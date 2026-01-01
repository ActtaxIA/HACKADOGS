-- =============================================
-- HAKADOGS DATABASE SCHEMA
-- =============================================

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "postgis";

-- =============================================
-- PROFILES TABLE
-- =============================================
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  full_name TEXT,
  phone TEXT,
  avatar_url TEXT,
  role TEXT DEFAULT 'client' CHECK (role IN ('client', 'admin')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS Policies for profiles
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- =============================================
-- DOGS TABLE
-- =============================================
CREATE TABLE dogs (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  owner_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  breed TEXT,
  birthdate DATE,
  weight DECIMAL(5,2),
  gender TEXT CHECK (gender IN ('male', 'female')),
  size TEXT CHECK (size IN ('small', 'medium', 'large', 'giant')),
  neutered BOOLEAN DEFAULT false,
  photo_url TEXT,
  gallery_urls TEXT[],
  microchip TEXT,
  insurance_info TEXT,
  bio TEXT,
  personality_tags TEXT[],
  interests TEXT[],
  energy_level INT CHECK (energy_level BETWEEN 1 AND 5),
  socialization_level INT CHECK (socialization_level BETWEEN 1 AND 5),
  compatible_small_dogs BOOLEAN DEFAULT true,
  compatible_large_dogs BOOLEAN DEFAULT true,
  compatible_puppies BOOLEAN DEFAULT true,
  compatible_same_gender BOOLEAN DEFAULT true,
  compatible_cats BOOLEAN DEFAULT false,
  compatible_kids BOOLEAN DEFAULT true,
  location_city TEXT,
  location_neighborhood TEXT,
  location_lat DECIMAL(10, 8),
  location_lng DECIMAL(11, 8),
  show_location BOOLEAN DEFAULT false,
  looking_for TEXT CHECK (looking_for IN ('friends', 'partner', 'exploring', 'available')),
  profile_public BOOLEAN DEFAULT false,
  allow_messages_from TEXT DEFAULT 'friends' CHECK (allow_messages_from IN ('all', 'friends', 'none')),
  behavior_notes TEXT,
  health_notes TEXT,
  special_characteristics TEXT,
  allergies TEXT[],
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS Policies for dogs
ALTER TABLE dogs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own dogs"
  ON dogs FOR SELECT
  USING (auth.uid() = owner_id OR profile_public = true);

CREATE POLICY "Users can create own dogs"
  ON dogs FOR INSERT
  WITH CHECK (auth.uid() = owner_id);

CREATE POLICY "Users can update own dogs"
  ON dogs FOR UPDATE
  USING (auth.uid() = owner_id);

CREATE POLICY "Users can delete own dogs"
  ON dogs FOR DELETE
  USING (auth.uid() = owner_id);

-- =============================================
-- VACCINATIONS TABLE (HakaHealth)
-- =============================================
CREATE TABLE vaccinations (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  dog_id UUID REFERENCES dogs(id) ON DELETE CASCADE NOT NULL,
  vaccine_name TEXT NOT NULL,
  vaccine_type TEXT,
  date_administered DATE NOT NULL,
  next_dose_date DATE,
  veterinarian TEXT,
  clinic TEXT,
  batch_number TEXT,
  notes TEXT,
  reminder_sent BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE vaccinations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage vaccinations for own dogs"
  ON vaccinations FOR ALL
  USING (dog_id IN (SELECT id FROM dogs WHERE owner_id = auth.uid()));

-- =============================================
-- VETERINARY_VISITS TABLE (HakaHealth)
-- =============================================
CREATE TABLE veterinary_visits (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  dog_id UUID REFERENCES dogs(id) ON DELETE CASCADE NOT NULL,
  visit_date DATE NOT NULL,
  reason TEXT NOT NULL,
  veterinarian TEXT,
  clinic TEXT,
  diagnosis TEXT,
  treatment TEXT,
  prescriptions TEXT,
  next_visit_date DATE,
  cost DECIMAL(10,2),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE veterinary_visits ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage vet visits for own dogs"
  ON veterinary_visits FOR ALL
  USING (dog_id IN (SELECT id FROM dogs WHERE owner_id = auth.uid()));

-- =============================================
-- EXERCISES TABLE (HakaTrainer)
-- =============================================
CREATE TABLE exercises (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  difficulty TEXT CHECK (difficulty IN ('beginner', 'intermediate', 'advanced')),
  duration INT, -- in minutes
  video_url TEXT,
  thumbnail_url TEXT,
  instructions TEXT,
  tips TEXT,
  common_mistakes TEXT,
  published BOOLEAN DEFAULT false,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE exercises ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published exercises"
  ON exercises FOR SELECT
  USING (published = true);

-- =============================================
-- EXERCISE_PROGRESS TABLE (HakaTrainer)
-- =============================================
CREATE TABLE exercise_progress (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  dog_id UUID REFERENCES dogs(id) ON DELETE CASCADE,
  exercise_id UUID REFERENCES exercises(id) ON DELETE CASCADE NOT NULL,
  completed BOOLEAN DEFAULT false,
  practice_date DATE DEFAULT CURRENT_DATE,
  duration_minutes INT,
  rating INT CHECK (rating BETWEEN 1 AND 5),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE exercise_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage own exercise progress"
  ON exercise_progress FOR ALL
  USING (auth.uid() = user_id);

-- =============================================
-- EVENTS TABLE (HakaCommunity)
-- =============================================
CREATE TABLE events (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_by UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  event_date TIMESTAMPTZ NOT NULL,
  location TEXT NOT NULL,
  location_lat DECIMAL(10, 8),
  location_lng DECIMAL(11, 8),
  max_attendees INT,
  attendees_count INT DEFAULT 0,
  event_type TEXT CHECK (event_type IN ('official', 'community')),
  status TEXT DEFAULT 'upcoming' CHECK (status IN ('upcoming', 'ongoing', 'completed', 'cancelled')),
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view events"
  ON events FOR SELECT
  USING (true);

CREATE POLICY "Users can create events"
  ON events FOR INSERT
  WITH CHECK (auth.uid() = created_by);

-- =============================================
-- EVENT_ATTENDEES TABLE (HakaCommunity)
-- =============================================
CREATE TABLE event_attendees (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  event_id UUID REFERENCES events(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  dog_id UUID REFERENCES dogs(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'confirmed' CHECK (status IN ('confirmed', 'maybe', 'cancelled')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(event_id, user_id)
);

ALTER TABLE event_attendees ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage own event attendance"
  ON event_attendees FOR ALL
  USING (auth.uid() = user_id);

-- =============================================
-- FORUM_POSTS TABLE (HakaCommunity)
-- =============================================
CREATE TABLE forum_posts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  author_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT,
  replies_count INT DEFAULT 0,
  views_count INT DEFAULT 0,
  pinned BOOLEAN DEFAULT false,
  locked BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE forum_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view forum posts"
  ON forum_posts FOR SELECT
  USING (true);

CREATE POLICY "Users can create forum posts"
  ON forum_posts FOR INSERT
  WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Users can update own posts"
  ON forum_posts FOR UPDATE
  USING (auth.uid() = author_id);

-- =============================================
-- FRIENDSHIPS TABLE (HakaCommunity)
-- =============================================
CREATE TABLE friendships (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  dog_id_1 UUID REFERENCES dogs(id) ON DELETE CASCADE NOT NULL,
  dog_id_2 UUID REFERENCES dogs(id) ON DELETE CASCADE NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'rejected')),
  initiated_by UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  CHECK (dog_id_1 < dog_id_2),
  UNIQUE(dog_id_1, dog_id_2)
);

ALTER TABLE friendships ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view friendships involving own dogs"
  ON friendships FOR SELECT
  USING (
    dog_id_1 IN (SELECT id FROM dogs WHERE owner_id = auth.uid()) OR
    dog_id_2 IN (SELECT id FROM dogs WHERE owner_id = auth.uid())
  );

-- =============================================
-- TRIGGERS FOR UPDATED_AT
-- =============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_dogs_updated_at BEFORE UPDATE ON dogs
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_vaccinations_updated_at BEFORE UPDATE ON vaccinations
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_exercises_updated_at BEFORE UPDATE ON exercises
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_events_updated_at BEFORE UPDATE ON events
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =============================================
-- INDEXES FOR PERFORMANCE
-- =============================================
CREATE INDEX idx_dogs_owner_id ON dogs(owner_id);
CREATE INDEX idx_dogs_location ON dogs USING GIST (ll_to_earth(location_lat, location_lng));
CREATE INDEX idx_vaccinations_dog_id ON vaccinations(dog_id);
CREATE INDEX idx_vaccinations_next_dose ON vaccinations(next_dose_date);
CREATE INDEX idx_exercises_slug ON exercises(slug);
CREATE INDEX idx_exercises_category ON exercises(category);
CREATE INDEX idx_events_date ON events(event_date);
CREATE INDEX idx_forum_posts_created ON forum_posts(created_at DESC);

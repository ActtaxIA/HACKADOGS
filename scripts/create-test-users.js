// Script para crear usuarios de prueba
// Ejecutar con: node scripts/create-test-users.js

const { createClient } = require('@supabase/supabase-js')

// Configurar Supabase (usando las variables de entorno)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'your-service-role-key'

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

async function createTestUsers() {
  console.log('🚀 Creando usuarios de prueba...\n')

  // Usuario Admin
  const adminData = {
    email: 'narciso.pardo@outlook.com',
    password: '14356830Np',
    user_metadata: {
      name: 'Narciso Pardo',
      role: 'admin',
      full_name: 'Narciso Pardo',
    },
  }

  // Usuario Regular
  const userData = {
    email: 'user@hakadogs.com',
    password: '14356830Np',
    user_metadata: {
      name: 'Usuario Demo',
      role: 'user',
      full_name: 'Usuario Demo',
    },
  }

  try {
    // Crear usuario Admin
    console.log('📝 Creando usuario ADMIN...')
    const { data: admin, error: adminError } = await supabase.auth.admin.createUser({
      email: adminData.email,
      password: adminData.password,
      email_confirm: true, // Auto-confirmar el email
      user_metadata: adminData.user_metadata,
    })

    if (adminError) {
      console.error('❌ Error al crear admin:', adminError.message)
    } else {
      console.log('✅ Usuario ADMIN creado exitosamente')
      console.log('   📧 Email:', adminData.email)
      console.log('   🔑 Password:', adminData.password)
      console.log('   👤 Rol: admin')
      console.log('   🆔 ID:', admin.user?.id)
    }

    console.log('\n')

    // Crear usuario Regular
    console.log('📝 Creando usuario REGULAR...')
    const { data: user, error: userError } = await supabase.auth.admin.createUser({
      email: userData.email,
      password: userData.password,
      email_confirm: true,
      user_metadata: userData.user_metadata,
    })

    if (userError) {
      console.error('❌ Error al crear usuario:', userError.message)
    } else {
      console.log('✅ Usuario REGULAR creado exitosamente')
      console.log('   📧 Email:', userData.email)
      console.log('   🔑 Password:', userData.password)
      console.log('   👤 Rol: user')
      console.log('   🆔 ID:', user.user?.id)
    }

    console.log('\n✨ Proceso completado!\n')
    console.log('📌 Credenciales de acceso:')
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log('👨‍💼 ADMIN:')
    console.log('   Email: narciso.pardo@outlook.com')
    console.log('   Password: 14356830Np')
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log('👤 USER:')
    console.log('   Email: user@hakadogs.com')
    console.log('   Password: 14356830Np')
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')

  } catch (error) {
    console.error('❌ Error general:', error)
  }
}

// Ejecutar
createTestUsers()


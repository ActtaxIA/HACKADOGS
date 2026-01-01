# 📦 GUÍA DE INSTALACIÓN - HAKADOGS

**Versión**: 1.0.0  
**Última actualización**: 31 Diciembre 2024

---

## ⏱️ TIEMPO ESTIMADO

- **Configuración básica**: 30 minutos
- **Testing completo**: 1 hora
- **Deploy producción**: 30 minutos
- **Total**: ~2 horas

---

## 📋 PREREQUISITOS

### Software Necesario

- **Node.js** >= 18.0.0 ([descargar](https://nodejs.org))
- **npm** >= 9.0.0 (incluido con Node.js)
- **Git** ([descargar](https://git-scm.com))
- **Editor de código** (VS Code recomendado)

### Cuentas Necesarias

- **Supabase** ([crear cuenta gratis](https://supabase.com))
- **Vercel** (opcional, para deploy) ([crear cuenta](https://vercel.com))
- **GitHub** (opcional, para repositorio) ([crear cuenta](https://github.com))

---

## 🚀 INSTALACIÓN PASO A PASO

### PASO 1: Clonar o Descargar el Proyecto

#### Opción A: Con Git
```bash
git clone [url-del-repositorio]
cd hakadogs-app
```

#### Opción B: Sin Git
1. Descargar el ZIP del proyecto
2. Extraer en una carpeta
3. Abrir terminal en esa carpeta

### PASO 2: Instalar Dependencias

```bash
npm install
```

Esto instalará:
- Next.js 14
- React 18
- TypeScript 5.3
- Tailwind CSS 3.4
- Supabase Client
- Y todas las demás dependencias (~200MB)

**Tiempo**: 2-3 minutos

---

### PASO 3: Configurar Supabase

#### 3.1 Crear Proyecto Supabase

1. Ir a https://supabase.com
2. Click en "Start your project"
3. Click en "New project"
4. Rellenar:
   - **Name**: hakadogs-production (o el que quieras)
   - **Database Password**: Guardar en lugar seguro
   - **Region**: Europe West (Irlanda) - más cercana a España
   - **Plan**: Free (suficiente para empezar)
5. Click "Create new project"
6. Esperar 2-3 minutos mientras se crea

#### 3.2 Copiar Credenciales

Una vez creado el proyecto:

1. En el dashboard de Supabase, ir a **Settings** → **API**
2. Copiar estos dos valores:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon public**: `eyJhbGc...` (una clave muy larga)

#### 3.3 Ejecutar SQL para Crear Base de Datos

1. En Supabase, ir a **SQL Editor** (icono de código en el menú)
2. Click en "+ New query"

**Ejecutar en este orden:**

**A) schema.sql** - Crear las 14 tablas
```sql
-- Copiar TODO el contenido de supabase/schema.sql
-- Pegar en el editor
-- Click en "Run" (o Ctrl+Enter)
```

**B) notifications.sql** - Sistema de notificaciones
```sql
-- Copiar TODO el contenido de supabase/notifications.sql
-- Pegar en el editor
-- Click en "Run"
```

**C) seed.sql** - Datos de ejemplo (12 ejercicios)
```sql
-- Copiar TODO el contenido de supabase/seed.sql
-- Pegar en el editor
-- Click en "Run"
```

✅ **Verificar**: Ir a **Table Editor** y deberías ver las 14 tablas

#### 3.4 Configurar Storage

1. En Supabase, ir a **Storage**
2. Crear 3 buckets nuevos:

**Bucket 1: avatars**
- Click "+ New bucket"
- Name: `avatars`
- Public: ✅ (activar)
- Click "Create bucket"

**Bucket 2: dog-photos**
- Click "+ New bucket"
- Name: `dog-photos`
- Public: ✅ (activar)
- Click "Create bucket"

**Bucket 3: exercise-videos**
- Click "+ New bucket"
- Name: `exercise-videos`
- Public: ✅ (activar)
- Click "Create bucket"

**Configurar políticas RLS para cada bucket:**

Para cada bucket, click en los 3 puntos → "Manage policies" → "New policy":

**Política 1: Lectura pública**
```sql
-- Policy name: Public read access
-- Allowed operation: SELECT
-- Target roles: public
-- USING expression:
bucket_id = 'avatars'  -- cambiar según el bucket
```

**Política 2: Upload autenticado**
```sql
-- Policy name: Authenticated upload
-- Allowed operation: INSERT
-- Target roles: authenticated
-- WITH CHECK expression:
bucket_id = 'avatars' AND auth.role() = 'authenticated'
```

Repetir para los 3 buckets (avatars, dog-photos, exercise-videos)

---

### PASO 4: Configurar Variables de Entorno

1. En la raíz del proyecto, crear archivo `.env.local`
2. Copiar y pegar esto:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

3. **Reemplazar** los valores con los que copiaste en el paso 3.2
4. Guardar el archivo

**⚠️ IMPORTANTE**: 
- Este archivo NO se sube a Git (está en .gitignore)
- Guarda las credenciales en lugar seguro

---

### PASO 5: Ejecutar en Desarrollo

```bash
npm run dev
```

Deberías ver:
```
  ▲ Next.js 14.x.x
  - Local:        http://localhost:3000
  - Ready in 2.3s
```

---

### PASO 6: Testing Inicial

#### 6.1 Abrir la Aplicación

Ir a http://localhost:3000

✅ Deberías ver el landing page de Hakadogs

#### 6.2 Crear Primer Usuario Admin

1. Click en "Comenzar" o "Iniciar Sesión"
2. Click en "¿No tienes cuenta? Regístrate"
3. Rellenar formulario:
   - Email: `admin@hakadogs.com` (o el que quieras)
   - Contraseña: mínimo 6 caracteres
   - Nombre completo
   - Teléfono
4. Click "Registrarse"

#### 6.3 Convertir en Admin

El primer usuario es automáticamente cliente. Para hacerlo admin:

1. Ir a Supabase Dashboard
2. Ir a **Table Editor** → **profiles**
3. Buscar tu usuario recién creado
4. Editar el campo `role` de `client` a `admin`
5. Click "Save"
6. Refrescar la app (F5)

✅ Ahora deberías ver "Panel Admin" en el menú

#### 6.4 Crear Primer Perro

1. En el dashboard cliente, click "Añadir Perro"
2. Rellenar formulario básico:
   - Nombre: "Max" (o el que quieras)
   - Raza, fecha nacimiento, etc.
3. Click "Crear Perro"

✅ Deberías ver la página del perro creado

#### 6.5 Probar HakaHealth

1. Click en "HakaHealth" en el menú
2. Debería mostrar el dashboard vacío
3. Ir a "Historial" → "Vacunas"
4. Click "Añadir Vacuna"
5. Rellenar y guardar

✅ La vacuna debería aparecer en la lista

#### 6.6 Probar HakaTrainer

1. Click en "HakaTrainer"
2. Deberías ver los 12 ejercicios del seed
3. Click en uno para ver el detalle
4. Click "Marcar como Completado"

✅ El ejercicio se marca y aparece en progreso

#### 6.7 Probar Blog

1. Ir a "Blog" en el menú
2. Deberías ver 6 artículos
3. Click en un filtro de categoría
4. Los posts deberían filtrarse

✅ El filtro funciona correctamente

---

### PASO 7: Configuración Adicional (Opcional)

#### Email de Confirmación

Por defecto, Supabase requiere confirmación de email:

**Opción A: Desactivar (para desarrollo)**
1. Supabase → **Authentication** → **Settings**
2. Buscar "Enable email confirmations"
3. Desactivar
4. Guardar

**Opción B: Configurar SMTP**
1. Supabase → **Settings** → **Auth**
2. Scroll hasta "SMTP Settings"
3. Configurar con tu servidor de email
4. Guardar

#### Límites de Storage

Por defecto, cada bucket tiene límite de 5MB por archivo:

1. Supabase → **Storage** → Seleccionar bucket
2. Click en "..." → "Edit bucket"
3. Ajustar "File size limit"
4. Guardar

---

## 🚀 DEPLOY A PRODUCCIÓN

### Opción 1: Vercel (Recomendado)

#### 1. Preparar Repositorio Git

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin [tu-repo-github]
git push -u origin main
```

#### 2. Deploy en Vercel

1. Ir a https://vercel.com
2. Click "New Project"
3. Importar desde GitHub
4. Seleccionar repositorio hakadogs-app
5. Vercel detecta Next.js automáticamente
6. **IMPORTANTE**: Añadir variables de entorno:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_APP_URL` = `https://tu-dominio.vercel.app`
7. Click "Deploy"
8. Esperar 2-3 minutos

✅ Tu app estará en: `https://hakadogs-app.vercel.app`

#### 3. Configurar Dominio Personalizado (Opcional)

1. En Vercel, ir a tu proyecto → **Settings** → **Domains**
2. Añadir tu dominio: `hakadogs.com`
3. Seguir instrucciones de DNS
4. Actualizar `NEXT_PUBLIC_APP_URL` en Vercel

### Opción 2: Otros Hosting

- **Netlify**: Similar a Vercel
- **Railway**: Alternativa moderna
- **Digital Ocean App Platform**: Escalable
- **AWS Amplify**: Enterprise

---

## 🔧 COMANDOS ÚTILES

```bash
# Desarrollo
npm run dev              # Iniciar en modo desarrollo

# Producción
npm run build            # Crear build de producción
npm run start            # Ejecutar build de producción
npm run lint             # Revisar código con ESLint

# Utilidades
npm run type-check       # Verificar errores TypeScript
npm run format           # Formatear código (si tienes Prettier)
```

---

## 🐛 SOLUCIÓN DE PROBLEMAS

### Error: "Module not found"

```bash
rm -rf node_modules package-lock.json
npm install
```

### Error: "Cannot connect to Supabase"

1. Verificar `.env.local` tiene las credenciales correctas
2. Verificar que el proyecto Supabase está activo
3. Verificar que no hay espacios en las URLs

### Error: "Storage upload failed"

1. Verificar que los buckets están creados
2. Verificar políticas RLS en Storage
3. Verificar que el archivo es < 5MB

### Error: "Unauthorized" al crear perro

1. Verificar que estás autenticado (refrescar página)
2. Verificar que las políticas RLS están aplicadas
3. Verificar en Supabase Dashboard que el usuario existe

### El build falla en Vercel

1. Verificar todas las variables de entorno en Vercel
2. Ejecutar `npm run build` localmente para ver errores
3. Verificar que no hay errores de TypeScript
4. Verificar los logs de Vercel

### No se ven las imágenes

1. Verificar que los buckets son públicos
2. Verificar las políticas de lectura pública
3. Verificar la URL del storage en `.env.local`

---

## 📞 AYUDA ADICIONAL

Si sigues teniendo problemas:

1. **Revisar logs**: En desarrollo, la consola del navegador y terminal
2. **Supabase logs**: Dashboard → Logs
3. **Vercel logs**: Dashboard → Deployments → Ver logs
4. **Documentación oficial**:
   - [Next.js](https://nextjs.org/docs)
   - [Supabase](https://supabase.com/docs)
   - [Vercel](https://vercel.com/docs)

---

## ✅ CHECKLIST FINAL

Antes de considerar la instalación completa:

- [ ] Proyecto Supabase creado
- [ ] Las 3 SQL ejecutadas (schema, notifications, seed)
- [ ] 3 buckets de storage creados con políticas
- [ ] Variables de entorno configuradas
- [ ] `npm install` ejecutado sin errores
- [ ] App corriendo en localhost:3000
- [ ] Primer usuario creado y convertido a admin
- [ ] Primer perro creado
- [ ] Probado crear vacuna
- [ ] Probado marcar ejercicio completado
- [ ] Probado filtros del blog
- [ ] (Opcional) Deploy en Vercel funcionando

---

## 🎉 ¡INSTALACIÓN COMPLETADA!

Si has llegado hasta aquí, **¡felicidades!** Hakadogs está funcionando.

**Próximos pasos**:
1. Añadir más contenido (ejercicios, posts blog)
2. Invitar usuarios de prueba
3. Configurar dominio personalizado
4. ¡Lanzar! 🚀

---

**Fecha**: 31 Diciembre 2024  
**Versión**: 1.0.0  
**Tiempo total**: ~2 horas

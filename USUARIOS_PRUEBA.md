# 👥 USUARIOS DE PRUEBA - HAKADOGS

## 🔐 Sistema de Autenticación Local (Mock)

**Hakadogs utiliza un sistema de autenticación local en memoria** (sin Supabase) para desarrollo y pruebas.

---

## 🎯 Credenciales de Acceso

### 👨‍💼 Usuario ADMIN
- **Email:** narciso.pardo@outlook.com
- **Password:** 14356830Np
- **Rol:** Administrador
- **Permisos:** Acceso completo al sistema, panel admin
- **URL:** http://localhost:3000/admin/dashboard

### 👤 Usuario REGULAR
- **Email:** user@hakadogs.com
- **Password:** hakadogs2024
- **Rol:** Cliente estándar
- **Permisos:** Acceso a apps y funcionalidades de cliente
- **URL:** http://localhost:3000/cliente/perfil

---

## 🚀 Cómo Iniciar Sesión

### 1. Iniciar el Servidor
```bash
npm run dev
```

### 2. Ir a Login
Abre tu navegador en: **http://localhost:3000/auth/login**

### 3. Usar Credenciales
Usa cualquiera de las dos credenciales de arriba para iniciar sesión.

---

## 📝 Sistema de Autenticación Mock

### Ubicación del Código
- **Archivo principal:** `lib/auth/mockAuth.ts`
- **Hook de React:** `hooks/useAuth.ts`
- **Componente menú:** `components/ui/UserMenu.tsx`

### Cómo Funciona
1. Los usuarios están pre-creados en `mockAuth.ts`
2. Las sesiones se guardan en `localStorage`
3. No requiere backend ni Supabase
4. Ideal para desarrollo sin configuración

### Crear Nuevos Usuarios de Prueba
Edita `lib/auth/mockAuth.ts`:

```typescript
const MOCK_USERS = [
  {
    id: '3',
    email: 'nuevo@ejemplo.com',
    user_metadata: {
      name: 'Nuevo Usuario',
      role: 'user'
    }
  }
]

const MOCK_PASSWORDS = {
  'nuevo@ejemplo.com': 'password123'
}
```

---

## 🔗 URLs Importantes

### Autenticación
- **Login:** http://localhost:3000/auth/login
- **Registro:** http://localhost:3000/auth/registro

### Área Cliente
- **Dashboard:** http://localhost:3000/cliente/perfil
- **Mascotas:** http://localhost:3000/cliente/mascotas

### Área Admin (solo admin)
- **Panel Admin:** http://localhost:3000/admin/dashboard

### Apps
- **HakaHealth:** http://localhost:3000/apps/hakahealth
- **HakaTrainer:** http://localhost:3000/apps/hakatrainer
- **HakaCommunity:** http://localhost:3000/apps/hakacommunity

---

## 🐛 Solución de Problemas

### No puedo iniciar sesión
1. Verifica que estás usando las credenciales exactas
2. Limpia `localStorage`: F12 → Application → Local Storage → Borrar todo
3. Recarga la página (F5)

### "Mi Perfil" me redirige a login
1. Cierra todas las pestañas del navegador
2. Abre una nueva ventana
3. Inicia sesión de nuevo

### El admin login falla
- Usa exactamente: `narciso.pardo@outlook.com` / `14356830Np`
- El email debe coincidir exactamente (mayúsculas/minúsculas)

### Quiero limpiar la sesión
```javascript
// En la consola del navegador (F12):
localStorage.removeItem('hakadogs_session')
location.reload()
```

---

## 📊 Datos de Prueba

### Usuarios Pre-creados
- **Total:** 2 usuarios
- **Admin:** 1
- **Clientes:** 1

### Funcionalidades Disponibles

**Como Admin:**
- ✅ Ver panel de administración
- ✅ Gestionar ejercicios (próximamente)
- ✅ Ver estadísticas (mock data)

**Como Cliente:**
- ✅ Ver perfil personal
- ✅ Gestionar mascotas
- ✅ Añadir/editar/eliminar mascotas
- ✅ Subir fotos de mascotas
- ✅ Acceder a las 3 apps

---

## 🔄 Migración a Supabase (Futuro)

Cuando se configure Supabase, estos usuarios mock se reemplazarán por usuarios reales en la base de datos.

**Pasos para migrar:**
1. Configurar Supabase Auth
2. Descomentar código en `middleware.ts`
3. Actualizar `lib/supabase/client.ts`
4. Eliminar o renombrar `lib/auth/mockAuth.ts`

---

## ⚠️ IMPORTANTE

### Seguridad
- ⚠️ **NO uses estos usuarios en producción**
- ⚠️ Cambia las contraseñas antes de hacer deploy
- ⚠️ Son solo para desarrollo local

### LocalStorage
- Las sesiones se guardan en `localStorage`
- Se pierden al limpiar caché del navegador
- Son específicas por navegador

---

## ✅ Checklist de Testing

- [ ] Login con usuario admin funciona
- [ ] Login con usuario regular funciona
- [ ] Admin puede acceder a `/admin/dashboard`
- [ ] Usuario regular puede acceder a `/cliente/perfil`
- [ ] Usuario regular puede gestionar mascotas
- [ ] Logout funciona correctamente
- [ ] Sesión persiste al recargar página
- [ ] Rutas protegidas redirigen a login

---

## 📞 Soporte

Si tienes problemas con la autenticación:
1. Revisa la consola del navegador (F12)
2. Busca errores en rojo
3. Verifica que el servidor esté corriendo (`npm run dev`)
4. Prueba en modo incógnito

---

**Última actualización:** Enero 2026  
**Proyecto:** HakaDogs - Educación Canina Profesional  
**Sistema:** Autenticación Mock Local (sin backend)

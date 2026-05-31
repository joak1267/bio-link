# Mi Bio Link (Alternativa Premium a Linktree)

¡Bienvenido a tu propia página de enlaces personalizada! Este proyecto es una alternativa elegante, rápida y libre de marcas de agua o suscripciones de pago para tu biografía de Instagram, TikTok o Twitter.

## Características

- 💎 **Estilo Glassmorphism:** Diseño premium con efecto de vidrio esmerilado y fondos fluidos y animados.
- 🎨 **Selector de Color Interactivo:** Los visitantes pueden cambiar el color de acento directamente desde la página (haciendo clic en la paleta de colores).
- 📱 **100% Responsivo:** Optimizado para navegadores móviles (dentro de Instagram/TikTok).
- ⚙️ **Configuración Sencilla:** No necesitas saber programar para añadir o cambiar enlaces. Todo se maneja en un único archivo.
- 📈 **Sin límites ni marcas de agua:** Todo es tuyo y es 100% gratuito.

---

## 🛠️ Cómo Personalizar Tus Enlaces

Todo el contenido de la página se configura desde el archivo **[config.js](config.js)**. Ábrelo con cualquier editor de texto (como el Bloc de Notas o VS Code) y modifica los valores:

### 1. Cambiar tu perfil
Modifica la sección `profile`:
```javascript
profile: {
  name: "Tu Nombre o Marca",
  bio: "Creador de contenido & Diseñador digital. Bienvenidos a mi espacio. ✨",
  avatar: "avatar.png" // Pon el nombre del archivo de tu foto en esta misma carpeta
}
```

### 2. Cambiar tus redes sociales (iconos inferiores)
Modifica la lista `socials`. Puedes usar cualquier icono de la librería **[Lucide Icons](https://lucide.dev/icons)** (ej: `instagram`, `youtube`, `facebook`, `linkedin`, `twitter`, `mail`, `message-circle` para WhatsApp, etc.):
```javascript
{ icon: "instagram", url: "https://instagram.com/tu_usuario", label: "Instagram" }
```

### 3. Cambiar tus botones principales
Modifica la lista `links`. Puedes añadir tantos como quieras:
```javascript
{ 
  title: "💬 Escríbeme por WhatsApp", 
  url: "https://wa.me/tu_numero", 
  description: "Hablemos de tu próximo proyecto directamente.",
  highlight: true // Si es true, brillará con una animación llamativa
}
```

---

## 🚀 Cómo Subirlo Gratis a Internet

Para que la gente pueda entrar a tu enlace desde Instagram, el sitio debe estar subido a internet. Aquí tienes las dos formas más sencillas y gratuitas:

### Opción A: Vercel (Recomendado - Muy fácil y rápido)
1. Entra a [vercel.com](https://vercel.com) y regístrate gratis (puedes usar tu cuenta de correo, Google o GitHub).
2. Descarga la herramienta de consola de Vercel o simplemente arrastra la carpeta del proyecto en su panel web si usas GitHub.
3. **El método más fácil (Arrastrar y Soltar):**
   - Sube tu código a un repositorio en [GitHub](https://github.com).
   - En Vercel, haz clic en **"Add New"** > **"Project"** y conecta tu cuenta de GitHub.
   - Selecciona el repositorio de este proyecto y haz clic en **"Deploy"**.
4. ¡Listo! Vercel te dará un enlace único (ej: `mi-biolink.vercel.app`) que puedes pegar en tu Instagram.

### Opción B: GitHub Pages (Ideal si ya usas GitHub)
1. Crea un repositorio público en [GitHub](https://github.com) llamado `nombre-de-usuario.github.io` (reemplaza `nombre-de-usuario` por tu usuario de GitHub).
2. Sube todos los archivos de esta carpeta a ese repositorio.
3. Ve a la pestaña **Settings** (Configuración) de tu repositorio en GitHub.
4. En el menú de la izquierda, entra a **Pages**.
5. En **Build and deployment**, selecciona la rama `main` (o `master`) y la carpeta `/ (root)`. Haz clic en **Save**.
6. En unos minutos tu sitio estará en vivo en `https://nombre-de-usuario.github.io`.

---

## 📸 Personalizar tu foto de perfil
Reemplaza el archivo `avatar.png` en esta carpeta con tu propia foto de perfil. Asegúrate de que se llame exactamente `avatar.png` (o edita el nombre en `config.js`).

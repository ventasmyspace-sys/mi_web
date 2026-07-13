# 📦 Guía de Instalación - AADARIBUS

## ⚠️ PASO CRÍTICO PRIMERO: Renombrar package.json

El archivo `packege.json` tiene un **typo** en el nombre. Debes renombrarlo a `package.json`:

### Opción 1: Usar VS Code (Recomendado)
1. En el explorador de archivos de VS Code
2. Haz clic derecho en `packege.json`
3. Selecciona "Rename"
4. Cambia a `package.json`

### Opción 2: Usar Terminal (Windows PowerShell)
```powershell
cd "g:\mis sitios web\mi_web"
Rename-Item -Path "packege.json" -NewName "package.json"
Rename-Item -Path "packege-lock.json" -NewName "package-lock.json"
```

### Opción 3: Usar Terminal (CMD)
```cmd
cd "g:\mis sitios web\mi_web"
ren packege.json package.json
ren packege-lock.json package-lock.json
```

---

## ✅ Instalación Paso a Paso

### 1. Abre la Terminal en VS Code
- Presiona `Ctrl + ~` (tilde)
- Asegúrate de estar en el directorio: `g:\mis sitios web\mi_web`

### 2. Instala las Dependencias
```bash
npm install
```
Esto instalará:
- ✅ React 18.3
- ✅ React DOM 18.3
- ✅ Vite 5.4
- ✅ TypeScript 5.5
- ✅ Tailwind CSS 3.4
- ✅ Lucide Icons
- ✅ y más...

Espera a que termine (puede tomar 2-3 minutos).

### 3. Configura las Variables de Entorno
```bash
cp .env.example .env
```
O manualmente: Copia `.env.example` a `.env` y edítalo con tus valores.

### 4. Inicia el Servidor de Desarrollo
```bash
npm run dev
```

Deberías ver algo como:
```
  VITE v5.4.2  ready in 128 ms

  ➜  Local:   http://localhost:5173/
  ➜  Press h to show help
```

### 5. Abre en el Navegador
- Ve a `http://localhost:5173/`
- ¡El sitio debe aparecer!

---

## 🔧 Configurar el Formulario

El formulario de contacto necesita un endpoint. Elige una opción:

### Opción A: Formspree (Gratis, Sin Servidor)

1. Visita [formspree.io](https://formspree.io)
2. Crea una cuenta gratuita
3. Haz clic en "New Project"
4. Copia el ID del formulario (ej: `xxxxx`)
5. En tu `.env`, actualiza:
   ```env
   VITE_FORM_ENDPOINT=https://formspree.io/f/xxxxx
   ```
6. Guarda y recarga el sitio

### Opción B: Backend Personalizado (Node.js)

Ver [SETUP.md](./SETUP.md) para instrucciones avanzadas.

---

## ✨ Verificar que Todo Funciona

### 1. Verifica errores de TypeScript
```bash
npm run typecheck
```
Debería mostrar: ✓ Sin errores

### 2. Prueba el Lint
```bash
npm run lint
```

### 3. Prueba el Formulario
1. Ve a la sección "CONTACTO" del sitio
2. Completa el formulario
3. Haz clic en "ENVIAR MENSAJE"
4. Deberías ver un mensaje de éxito

---

## 🚀 Compilar para Producción

Cuando todo funcione perfectamente:

```bash
npm run build
```

Esto crea la carpeta `dist/` lista para desplegar.

---

## 🐛 Solución de Problemas

### Error: "npm: comando no encontrado"
→ Instala Node.js desde [nodejs.org](https://nodejs.org)

### Error: "No se puede leer package.json"
→ Renombra `packege.json` a `package.json` (ver PASO CRÍTICO)

### El sitio no carga
→ Asegúrate de que `npm run dev` está ejecutándose
→ Verifica que estés en `http://localhost:5173`

### El formulario no envía
→ Verifica que `VITE_FORM_ENDPOINT` es correcto en `.env`
→ Recarga la página (Ctrl + Shift + R para limpiar caché)

### Errores de TypeScript
→ Ejecuta `npm install` de nuevo
→ Ejecuta `npm run typecheck`

---

## 📋 Checklist Final

- [ ] Renombré `packege.json` a `package.json`
- [ ] Ejecuté `npm install`
- [ ] Copié `.env.example` a `.env`
- [ ] Configuré `VITE_FORM_ENDPOINT`
- [ ] Ejecuté `npm run dev`
- [ ] El sitio carga en `http://localhost:5173`
- [ ] Probé el formulario
- [ ] Sin errores de TypeScript

---

## 📞 Próximos Pasos

1. **Personalizar datos:**
   - Edita `.env` con tu email, teléfono, ubicación
   - Actualiza URLs del portafolio en `src/App.tsx`

2. **Desplegar:**
   - [Vercel](https://vercel.com) (Recomendado)
   - [Netlify](https://netlify.com)
   - Tu servidor propio

3. **Optimizar:**
   - Lee [SETUP.md](./SETUP.md)
   - Consulta [IMPROVEMENTS_CHECKLIST.md](./IMPROVEMENTS_CHECKLIST.md)

¡Listo! 🎉

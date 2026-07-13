# ⚡ INICIO RÁPIDO - Haz esto AHORA

## 🔴 PASO 1: Renombra el archivo (CRÍTICO)

VS Code está mostrando errores porque el archivo se llama **`packege.json`** (CON TYPO).

### Opción Fácil - VS Code:
1. En el explorador de archivos (a la izquierda)
2. Haz clic DERECHO en `packege.json`
3. Elige "Rename"
4. Cambia a: `package.json`
5. Presiona Enter

### Opción Terminal (PowerShell):
Abre terminal (Ctrl + ~) y copia esto:
```powershell
Rename-Item -Path "packege.json" -NewName "package.json"
Rename-Item -Path "packege-lock.json" -NewName "package-lock.json"
```

---

## 🟢 PASO 2: Instala dependencias

En la terminal, ejecuta:
```bash
npm install
```

Espera a que termine (2-3 minutos). Deberías ver una carpeta `node_modules` creada.

---

## 🟠 PASO 3: Configura el formulario

### Opción A: Formspree (Recomendado - 2 minutos)

1. Abre [formspree.io](https://formspree.io)
2. Crea cuenta gratis
3. Haz clic "New Project"
4. Copia tu ID (verás: `https://formspree.io/f/xxxxx`)
5. En VS Code, abre `.env`
6. Reemplaza esta línea:
   ```env
   VITE_FORM_ENDPOINT=https://formspree.io/f/xxxxx
   ```
   Con tu ID real
7. Guarda (Ctrl + S)

### Opción B: Saltarte el formulario por ahora
Si solo quieres ver el sitio funcionando:
```env
VITE_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```
El formulario mostrará error, pero el sitio funcionará.

---

## 🚀 PASO 4: Inicia el servidor

En la terminal, ejecuta:
```bash
npm run dev
```

Deberías ver:
```
  VITE v5.4.2  ready in 128 ms

  ➜  Local:   http://localhost:5173/
  ➜  Press h to show help
```

---

## 🌐 PASO 5: Abre el sitio

Presiona Ctrl + Click en la URL o ve a:
```
http://localhost:5173/
```

**¡LISTO! 🎉 El sitio está funcionando**

---

## ✅ Verificar que todo funciona

### ✓ El sitio se ve bien
- Navegación funciona
- Imágenes cargan
- Responsive en móvil

### ✓ Prueba el formulario
1. Desplázate a "CONTACTO"
2. Rellena: Nombre, Email, Tipo proyecto, Mensaje
3. Haz clic "ENVIAR MENSAJE"
4. Deberías ver: ✅ "Mensaje enviado"

### ✓ Sin errores rojo en la terminal
Si ves errores, revisa que:
- ✅ Renombraste `packege.json`
- ✅ Ejecutaste `npm install`
- ✅ No hay errores de tipeo en `.env`

---

## 🆘 Si algo no funciona

### "npm: comando no encontido"
Instala Node.js: [nodejs.org](https://nodejs.org)

### "El sitio no carga"
- Verifica que ejecutaste `npm run dev`
- Abre exactamente: `http://localhost:5173/` (no otro puerto)

### "El formulario no envía"
- Verifica que configuraste `VITE_FORM_ENDPOINT` en `.env`
- Presiona Ctrl + Shift + R para limpiar caché

### "Errores rojo en VS Code"
- Si están bajo `node_modules`: Ignóralos
- Si están en `App.tsx`: Ejecuta `npm run typecheck`

---

## 📚 Documentación

- **¿Cómo instalo?** → Lee [INSTALL.md](./INSTALL.md)
- **¿Cómo configuro backend?** → Lee [SETUP.md](./SETUP.md)
- **¿Qué cambios se hicieron?** → Lee [FIXES_SUMMARY.md](./FIXES_SUMMARY.md)
- **¿Qué mejoras hay?** → Lee [IMPROVEMENTS_CHECKLIST.md](./IMPROVEMENTS_CHECKLIST.md)

---

## ⏱️ Tiempo Total

- Paso 1 (Renombrar): 1 minuto
- Paso 2 (npm install): 2-3 minutos  
- Paso 3 (Formulario): 2 minutos
- Paso 4 (Servidor): 30 segundos
- **Total: ~7 minutos**

---

**¿Estás listo? ¡Comienza con el PASO 1!** 🚀

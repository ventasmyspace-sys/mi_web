# Guía de Configuración - ventasmyspace-sys

## Variables de Entorno (.env)

1. **Copia el archivo `.env.example` a `.env`:**
   ```bash
   cp .env.example .env
   ```

2. **Configura tus variables:**

   ```env
   VITE_COMPANY_NAME=ventasmyspace-sys
   VITE_EMAIL=hola@ventasmyspace-sys.com
   VITE_PHONE=+1 (809) 555-0192
   VITE_LOCATION=Santo Domingo, RD
   VITE_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```

### Detalles de cada variable:

- **VITE_COMPANY_NAME**: Nombre de tu compañía
- **VITE_EMAIL**: Email de contacto
- **VITE_PHONE**: Teléfono de contacto
- **VITE_LOCATION**: Ubicación de tu empresa
- **VITE_FORM_ENDPOINT**: Endpoint para recibir formularios

## Backend - Formulario de Contacto

### Opción 1: Formspree (Recomendado - Sin configuración)

1. Visita [formspree.io](https://formspree.io)
2. Registrate gratuitamente
3. Crea un nuevo formulario
4. Copia la URL del formulario a `VITE_FORM_ENDPOINT`

**Ventajas:**
- ✅ Sin servidor propio
- ✅ Gratis hasta 50 envíos/mes
- ✅ Recibe emails directamente
- ✅ Soporte SPAM integrado

### Opción 2: Netlify Forms

Si despliegas en Netlify, puedes usar sus forms nativas sin código adicional.

### Opción 3: Backend personalizado (Node.js + Express)

Para usar un backend propio:

```bash
npm install express nodemailer cors
```

**Crear archivo `server.js`:**

```javascript
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

app.post('/api/contact', async (req, res) => {
  const { name, email, project, message } = req.body;

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_RECIPIENT,
      subject: `Nuevo proyecto: ${project}`,
      html: `
        <h2>${name}</h2>
        <p><strong>Tipo:</strong> ${project}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error enviando email' });
  }
});

app.listen(3000, () => console.log('Servidor en puerto 3000'));
```

**Actualizar VITE_FORM_ENDPOINT:**
```env
VITE_FORM_ENDPOINT=http://localhost:3000/api/contact
```

## URLs del Portfolio

Actualiza las URLs de los proyectos en `App.tsx`:

```javascript
const PORTFOLIO_ITEMS = [
  {
    id: 1,
    url: 'https://tudominio.com/proyecto1', // ← Actualiza aquí
    ...
  },
];
```

## Mejoras Implementadas

### ✅ Variables de Entorno
- Email, teléfono y ubicación configurables
- URL del formulario personalizable

### ✅ Formulario Funcional
- Integración con backend
- Manejo de errores
- Estados de carga
- Validaciones

### ✅ Portfolio Funcional
- Enlaces a proyectos reales
- Opens en nueva pestaña
- Aria-labels para accesibilidad

### ✅ Accesibilidad Mejorada
- Labels vinculados a inputs (htmlFor)
- Aria-labels en botones
- Aria-expanded en menú móvil
- Aria-label en navegación
- Role="alert" en mensajes de error
- Soporte para lectores de pantalla

## Despliegue

### En Vercel/Netlify
1. Conecta tu repositorio
2. Agrega variables en el dashboard
3. Deploy automático

### En tu servidor
```bash
npm run build
# Servir la carpeta dist con tu servidor favorito
```

## Testing

Para probar el formulario localmente:
1. Usa Formspree (mejor opción)
2. O inicia el servidor Node.js en otra terminal
3. Asegúrate que `VITE_FORM_ENDPOINT` apunta al correcto

## Contacto

Para soporte, revisa la sección de contacto en el sitio.

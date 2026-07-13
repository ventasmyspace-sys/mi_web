// Validaciones para el formulario
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateForm = (name: string, email: string, message: string, project: string) => {
  const errors: Record<string, string> = {};

  if (!name.trim()) {
    errors.name = 'El nombre es requerido';
  }

  if (!email.trim()) {
    errors.email = 'El email es requerido';
  } else if (!validateEmail(email)) {
    errors.email = 'El email no es válido';
  }

  if (!project) {
    errors.project = 'Debes seleccionar un tipo de proyecto';
  }

  if (!message.trim()) {
    errors.message = 'El mensaje es requerido';
  } else if (message.length < 10) {
    errors.message = 'El mensaje debe tener al menos 10 caracteres';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

// Utilidades para meta tags
export const generateMetaTags = (
  title: string,
  description: string,
  image?: string,
  url?: string
) => {
  return {
    'og:title': title,
    'og:description': description,
    'og:image': image || 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg',
    'og:url': url || window.location.href,
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': image,
  };
};

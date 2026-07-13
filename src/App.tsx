import { useState, useEffect } from 'react';
import {
  Menu, X, Globe, Smartphone, Palette, Code2, Star, ArrowRight,
  Mail, Phone, MapPin, ChevronDown, ExternalLink, Award, Users, Briefcase, Clock
} from 'lucide-react';

// Configuración desde variables de entorno
const CONFIG = {
  companyName: import.meta.env.VITE_COMPANY_NAME || 'AADARIBUSWEB',
  email: import.meta.env.VITE_EMAIL || 'hola@aadaribus.com',
  phone: import.meta.env.VITE_PHONE || '+505 8445 7800',
  location: import.meta.env.VITE_LOCATION || 'Managua, Nicaragua',
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || 'https://formspree.io/f/mlgyynop',
};

const NAV_LINKS = [
  { label: 'INICIO', href: '#hero' },
  { label: 'PORTAFOLIO', href: '#portfolio' },
  { label: 'SERVICIOS', href: '#services' },
  { label: 'NOSOTROS', href: '#about' },
  { label: 'CONTACTO', href: '#contact' },
];

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'Hotel Grand Soleil',
    category: 'Hotel de Lujo',
    tag: 'HOTELES',
    description: 'Sitio web de reservas con experiencia inmersiva y motor de booking integrado.',
    image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['React', 'Node.js', 'Stripe'],
    url: 'https://hotelgrandsoleil.example.com',
  },
  {
    id: 2,
    title: 'Maison Blanc',
    category: 'Restaurante Gourmet',
    tag: 'RESTAURANTES',
    description: 'Plataforma de reservas online con menú interactivo y galería visual.',
    image: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['Vue.js', 'Supabase', 'Tailwind'],
    url: 'https://maisonblanc.example.com',
  },
  {
    id: 3,
    title: 'Oasis Boutique Resort',
    category: 'Resort & Spa',
    tag: 'HOTELES',
    description: 'Experiencia digital completa para resort boutique con gestión de paquetes.',
    image: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['Next.js', 'PostgreSQL', 'Cloudinary'],
    url: 'https://oasisboutique.example.com',
  },
  {
    id: 4,
    title: 'Terra Bistró',
    category: 'Bistró Contemporáneo',
    tag: 'RESTAURANTES',
    description: 'Identidad digital y sistema de pedidos en línea con integración de delivery.',
    image: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['React', 'Firebase', 'PWA'],
    url: 'https://terrabistro.example.com',
  },
  {
    id: 5,
    title: 'Azul Palace Hotel',
    category: 'Hotel Urbano',
    tag: 'HOTELES',
    description: 'Rediseño completo con optimización SEO y aumento del 340% en reservas directas.',
    image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['Gatsby', 'Contentful', 'Netlify'],
    url: 'https://azulpalacehotel.example.com',
  },
  {
    id: 6,
    title: 'Sazón & Arte',
    category: 'Restaurante Fusión',
    tag: 'RESTAURANTES',
    description: 'App web con reservas, eventos privados y programa de fidelización de clientes.',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['React', 'Supabase', 'Stripe'],
    url: 'https://sazonarterestaurante.example.com',
  },
];

const SERVICES = [
  {
    icon: Globe,
    title: 'Sitios Web Corporativos',
    description: 'Diseño premium que transmite la esencia y exclusividad de tu establecimiento hotelero o gastronómico.',
  },
  {
    icon: Smartphone,
    title: 'Diseño Responsivo',
    description: 'Experiencias perfectas en cada dispositivo, desde móvil hasta pantallas de recepción.',
  },
  {
    icon: Code2,
    title: 'Sistemas de Reservas',
    description: 'Motores de booking personalizados integrados con los principales PMS y plataformas.',
  },
  {
    icon: Palette,
    title: 'Identidad Digital',
    description: 'Branding visual coherente que eleva la percepción de tu marca en el mundo digital.',
  },
];

const TESTIMONIALS = [
  {
    name: 'Valentina Restrepo',
    role: 'Directora, Hotel Lumiere',
    text: 'AADARIBUS transformó nuestra presencia digital completamente. Las reservas directas aumentaron un 280% en solo tres meses.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    name: 'Carlos Mendoza',
    role: 'Propietario, Restaurante Sauvignon',
    text: 'El diseño captura exactamente el ambiente que queríamos proyectar. Nuestros clientes llegan al restaurante con expectativas perfectamente alineadas.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    name: 'Isabella Torres',
    role: 'Gerente, Boutique Hotel Cielo',
    text: 'Profesionalismo impecable y resultados extraordinarios. El sitio web se convirtió en nuestra mejor herramienta de ventas.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
];

const STATS = [
  { icon: Briefcase, value: '50+', label: 'Proyectos' },
  { icon: Users, value: '38', label: 'Clientes' },
  { icon: Award, value: '12', label: 'Premios' },
  { icon: Clock, value: '6+', label: 'Años' },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'navbar-blur py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleNav('#hero')} className="flex items-center gap-3 group" aria-label="AADARIBUS inicio">
          <div className="relative">
            <div className="w-9 h-9 border border-[#C9A96E] rotate-45 transition-transform group-hover:rotate-90 duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-[#C9A96E] text-xs font-bold tracking-widest">A</span>
            </div>
          </div>
          <span className="font-serif text-xl tracking-[0.25em] text-[#F8F4EE] font-light">
            AADARIBUSWEB
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          {NAV_LINKS.map((l) => (
            <button key={l.href} onClick={() => handleNav(l.href)} className="nav-link uppercase">
              {l.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <button
          onClick={() => handleNav('#contact')}
          className="hidden md:flex btn-gold px-5 py-2.5 text-xs tracking-widest uppercase rounded-none"
        >
          <span>HABLEMOS</span>
        </button>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-[#C9A96E]"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile nav */}
      <div className={`md:hidden transition-all duration-400 overflow-hidden ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`} id="mobile-nav">
        <nav className="navbar-blur flex flex-col px-6 py-4 gap-4 border-t border-[#C9A96E]/10" aria-label="Navegación móvil">
          {NAV_LINKS.map((l) => (
            <button key={l.href} onClick={() => handleNav(l.href)} className="nav-link text-left uppercase">
              {l.label}
            </button>
          ))}
          <button onClick={() => handleNav('#contact')} className="btn-gold px-5 py-2.5 text-xs tracking-widest uppercase text-center mt-2">
            <span>HABLEMOS</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  const handleScroll = () => {
    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Luxury hotel lobby"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Decorative lines */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className="w-px h-24 bg-gradient-to-b from-transparent to-[#C9A96E]" />
        <span className="text-[#C9A96E] text-xs tracking-[0.3em] rotate-90 whitespace-nowrap opacity-60">SCROLL DOWN</span>
        <div className="w-px h-24 bg-gradient-to-t from-transparent to-[#C9A96E]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 pt-28">
        <div className="max-w-3xl">
          <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase mb-6 animate-fade-up opacity-0" style={{ animationFillMode: 'forwards' }}>
            DESARROLLO WEB DE ALTO NIVEL
          </p>
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] mb-6 animate-fade-up opacity-0 delay-100" style={{ animationFillMode: 'forwards' }}>
            Presencias digitales{' '}
            <span className="gold-gradient italic">extraordinarias</span>
          </h1>
          <p className="text-[#F8F4EE]/70 text-lg font-light leading-relaxed max-w-xl mb-10 animate-fade-up opacity-0 delay-200" style={{ animationFillMode: 'forwards' }}>
            Creamos experiencias web que capturan la esencia de los hoteles y restaurantes más exclusivos. Cada pixel, una declaración de lujo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 delay-300" style={{ animationFillMode: 'forwards' }}>
            <button
              onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-gold px-8 py-4 text-xs tracking-widest uppercase"
            >
              <span>VER PORTAFOLIO</span>
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline px-8 py-4 text-xs tracking-widest uppercase"
            >
              INICIAR PROYECTO
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScroll}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#C9A96E]/60 hover:text-[#C9A96E] transition-colors animate-bounce"
      >
        <ChevronDown size={20} />
      </button>
    </section>
  );
}

function Stats() {
  return (
    <section className="bg-[#111111] border-y border-[#C9A96E]/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((s, i) => (
            <div key={i} className={`stat-item flex flex-col items-center py-10 px-6 ${i < 2 ? 'border-b md:border-b-0' : ''}`}>
              <s.icon size={20} className="text-[#C9A96E] mb-3 opacity-70" />
              <span className="font-serif text-4xl gold-gradient font-light mb-1">{s.value}</span>
              <span className="text-[#8C8070] text-xs tracking-widest uppercase">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const [active, setActive] = useState('TODOS');
  const filters = ['TODOS', 'HOTELES', 'RESTAURANTES'];

  const filtered = active === 'TODOS' ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter((p) => p.tag === active);

  return (
    <section id="portfolio" className="py-28 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase mb-4">TRABAJO SELECTO</p>
          <h2 className="font-serif text-5xl md:text-6xl font-light mb-6">
            Nuestro <span className="italic gold-gradient">Portafolio</span>
          </h2>
          <div className="section-divider mx-auto mb-8" />
          <p className="text-[#F8F4EE]/60 max-w-xl mx-auto font-light leading-relaxed">
            Cada proyecto es una obra construida con precisión, pensada para convertir visitantes en huéspedes y clientes.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-2 mb-14">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-6 py-2.5 text-xs tracking-widest uppercase transition-all duration-300 ${
                active === f
                  ? 'btn-gold'
                  : 'btn-outline'
              }`}
            >
              {active === f ? <span>{f}</span> : f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-card group relative overflow-hidden rounded-sm cursor-pointer block hover:no-underline"
              aria-label={`Ver proyecto ${item.title}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="card-overlay absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-[#C9A96E] text-xs tracking-widest uppercase mb-2">{item.category}</span>
                <h3 className="font-serif text-2xl font-light text-[#F8F4EE] mb-2">{item.title}</h3>
                <p className="text-[#F8F4EE]/70 text-sm font-light leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.tech.map((t) => (
                    <span key={t} className="text-[10px] tracking-widest uppercase text-[#C9A96E] border border-[#C9A96E]/30 px-2 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-[#1A1A1A]/80 backdrop-blur-sm p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink size={14} className="text-[#C9A96E]" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-28 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase mb-4">LO QUE OFRECEMOS</p>
            <h2 className="font-serif text-5xl md:text-6xl font-light leading-tight mb-6">
              Servicios de{' '}
              <span className="italic gold-gradient">Excelencia</span>
            </h2>
            <div className="section-divider mb-8" />
            <p className="text-[#F8F4EE]/60 font-light leading-relaxed mb-10">
              Combinamos tecnología de vanguardia con una sensibilidad estética única para crear sitios web que venden la experiencia antes de que el cliente llegue a la puerta.
            </p>
            <div className="space-y-4">
              {['Diseño UX/UI orientado a conversión', 'Optimización SEO para turismo y gastronomía', 'Integración con sistemas de reservas', 'Mantenimiento y soporte continuo'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-[#C9A96E] flex-shrink-0" />
                  <span className="text-[#F8F4EE]/70 text-sm font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SERVICES.map((s, i) => (
              <div key={i} className="service-card p-6 rounded-sm">
                <div className="w-10 h-10 border border-[#C9A96E]/30 flex items-center justify-center mb-4 group-hover:border-[#C9A96E] transition-colors">
                  <s.icon size={18} className="text-[#C9A96E]" />
                </div>
                <h3 className="font-serif text-lg font-light text-[#F8F4EE] mb-3">{s.title}</h3>
                <p className="text-[#8C8070] text-sm font-light leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-28 bg-[#1A1A1A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image collage */}
          <div className="relative h-[500px]">
            <img
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team at work"
              className="absolute top-0 left-0 w-4/5 h-80 object-cover rounded-sm"
            />
            <img
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Design process"
              className="absolute bottom-0 right-0 w-3/5 h-60 object-cover rounded-sm border-4 border-[#1A1A1A]"
            />
            <div className="absolute bottom-12 left-8 bg-[#C9A96E] p-6 z-10">
              <span className="font-serif text-4xl font-light text-[#1A1A1A] block">6+</span>
              <span className="text-[#1A1A1A]/70 text-xs tracking-widest uppercase">Años de experiencia</span>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase mb-4">NUESTRA HISTORIA</p>
            <h2 className="font-serif text-5xl md:text-6xl font-light leading-tight mb-6">
              Pasión por lo{' '}
              <span className="italic gold-gradient">excepcional</span>
            </h2>
            <div className="section-divider mb-8" />
            <div className="space-y-5 text-[#F8F4EE]/60 font-light leading-relaxed">
              <p>
                AADARIBUS nació de una convicción: que los negocios de hospitalidad merecen presencias digitales tan impecables como sus propios espacios físicos.
              </p>
              <p>
                Somos especialistas en el sector hotelero y gastronómico. Entendemos el lenguaje visual del lujo, la importancia del primer impacto y el valor de cada reserva directa conseguida.
              </p>
              <p>
                Cada proyecto es una colaboración profunda. Estudiamos tu identidad, tu clientela y tus objetivos para entregar un sitio web que no solo se ve extraordinario — sino que trabaja por ti las 24 horas.
              </p>
            </div>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-10 flex items-center gap-3 text-[#C9A96E] text-xs tracking-widest uppercase hover:gap-5 transition-all duration-300 group"
            >
              INICIAR UNA CONVERSACIÓN
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-28 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase mb-4">CLIENTES SATISFECHOS</p>
          <h2 className="font-serif text-5xl md:text-6xl font-light">
            Lo que dicen <span className="italic gold-gradient">ellos</span>
          </h2>
          <div className="section-divider mx-auto mt-6" />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="testimonial-card p-8 rounded-sm">
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={12} className="fill-[#C9A96E] text-[#C9A96E]" />
                ))}
              </div>
              <p className="text-[#F8F4EE]/70 font-light leading-relaxed mb-8 italic font-serif text-lg">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover grayscale" />
                <div>
                  <p className="text-[#F8F4EE] text-sm font-medium">{t.name}</p>
                  <p className="text-[#8C8070] text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      const response = await fetch(CONFIG.formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSent(true);
        setForm({ name: '', email: '', project: '', message: '' });
        setTimeout(() => setSent(false), 5000);
      } else {
        setError('Hubo un error al enviar el mensaje. Intenta de nuevo.');
      }
    } catch {
      setError('Error de conexión. Verifica tu correo es válido o intenta más tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase mb-4">EMPECEMOS</p>
            <h2 className="font-serif text-5xl md:text-6xl font-light leading-tight mb-6">
              Hablemos de tu{' '}
              <span className="italic gold-gradient">proyecto</span>
            </h2>
            <div className="section-divider mb-8" />
            <p className="text-[#F8F4EE]/60 font-light leading-relaxed mb-12">
              Cuéntanos sobre tu hotel o restaurante. Estamos listos para escuchar y crear algo verdaderamente especial juntos.
            </p>
            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: CONFIG.email },
                { icon: Phone, label: 'Teléfono', value: CONFIG.phone },
                { icon: MapPin, label: 'Ubicación', value: CONFIG.location },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-[#C9A96E]/30 flex items-center justify-center flex-shrink-0">
                    <c.icon size={16} className="text-[#C9A96E]" />
                  </div>
                  <div>
                    <p className="text-[#8C8070] text-xs tracking-widest uppercase mb-0.5">{c.label}</p>
                    <p className="text-[#F8F4EE] text-sm font-light">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#111111] border border-[#C9A96E]/10 p-8 rounded-sm">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 border border-[#C9A96E] flex items-center justify-center mb-6">
                  <Star size={24} className="text-[#C9A96E] fill-[#C9A96E]" />
                </div>
                <h3 className="font-serif text-3xl font-light text-[#F8F4EE] mb-3">Mensaje enviado</h3>
                <p className="text-[#8C8070] font-light">Nos pondremos en contacto contigo en menos de 24 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="text-[#8C8070] text-xs tracking-widest uppercase block mb-2">Nombre</label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="form-input w-full px-4 py-3 text-sm rounded-none"
                      placeholder="Tu nombre"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      aria-label="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-[#8C8070] text-xs tracking-widest uppercase block mb-2">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="form-input w-full px-4 py-3 text-sm rounded-none"
                      placeholder="tu@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      aria-label="Tu dirección de email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="project" className="text-[#8C8070] text-xs tracking-widest uppercase block mb-2">Tipo de proyecto</label>
                  <select
                    id="project"
                    className="form-input w-full px-4 py-3 text-sm rounded-none appearance-none"
                    value={form.project}
                    onChange={(e) => setForm({ ...form, project: e.target.value })}
                    aria-label="Tipo de proyecto"
                  >
                    <option value="" className="bg-[#2C2C2C]">Selecciona una opción</option>
                    <option value="hotel" className="bg-[#2C2C2C]">Hotel / Resort</option>
                    <option value="restaurant" className="bg-[#2C2C2C]">Restaurante / Bistró</option>
                    <option value="spa" className="bg-[#2C2C2C]">Spa / Wellness</option>
                    <option value="other" className="bg-[#2C2C2C]">Otro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="text-[#8C8070] text-xs tracking-widest uppercase block mb-2">Mensaje</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="form-input w-full px-4 py-3 text-sm rounded-none resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    aria-label="Descripción del proyecto"
                  />
                </div>
                {error && (
                  <div className="bg-red-900/20 border border-red-500/30 p-4 rounded text-red-400 text-sm" role="alert">
                    {error}
                  </div>
                )}
                <button type="submit" disabled={loading} className="btn-gold w-full py-4 text-xs tracking-widest uppercase disabled:opacity-50">
                  <span>{loading ? 'ENVIANDO...' : 'ENVIAR MENSAJE'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-[#C9A96E]/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="relative w-7 h-7">
              <div className="w-7 h-7 border border-[#C9A96E]/60 rotate-45" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-[#C9A96E] text-[10px] font-bold">A</span>
              </div>
            </div>
            <span className="font-serif text-lg tracking-[0.25em] text-[#F8F4EE]/60 font-light">AADARIBUS</span>
          </div>
          <p className="text-[#8C8070] text-xs tracking-wider text-center">
            © {new Date().getFullYear()} AADARIBUS. Todos los derechos reservados.
          </p>
          <nav className="flex gap-6" aria-label="Enlaces legales">
            {['Privacidad', 'Términos', 'Sitemap'].map((l) => (
              <a key={l} href={`/#${l.toLowerCase()}`} className="text-[#8C8070] text-xs tracking-wider hover:text-[#C9A96E] transition-colors uppercase">
                {l}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Portfolio />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

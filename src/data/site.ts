// Placeholder — swap for the real production domain before deploy (affects canonical/OG/JSON-LD).
export const SITE_URL = "https://miladigital.ar";
export const TITLE =
  "Mila Digital | Agencia de Marketing Digital y Community Management";
export const DESCRIPTION =
  "Mila Digital es una agencia de marketing digital en Argentina. Gestionamos redes sociales, creamos contenido (reels, carruseles, diseño) y desarrollamos landing pages que convierten. Pedí tu diagnóstico gratis.";

export const WA_CELES = "5491170365216";
export const WA_CAMI = "5491154091703";
const WA_MSG = encodeURIComponent(
  "¡Hola! Vi la web de Mila Digital y quiero mi diagnóstico gratis ✨",
);
export const waLink = (num: string) => `https://wa.me/${num}?text=${WA_MSG}`;
export const IG_URL = "https://www.instagram.com/miladigital.ar/";

export const nav = [
  { href: "#servicios", label: "Servicios" },
  { href: "#trabajo", label: "Cómo trabajamos" },
  { href: "#equipo", label: "Equipo" },
  { href: "#planes", label: "Planes" },
];

export const services = [
  {
    name: "Community Management",
    desc: "Gestión estratégica de tus redes: calendario de contenidos, publicación y análisis de resultados, mes a mes.",
    tags: ["Instagram", "TikTok", "Estrategia"],
    icon: "chat",
  },
  {
    name: "Creación de Contenido",
    desc: "Diseño gráfico, edición audiovisual y copywriting pensados para que tu marca se vea — y se lea — coherente en cada pieza.",
    tags: ["Reels", "Carruseles", "Copywriting"],
    icon: "spark",
  },
  {
    name: "Landing Pages",
    desc: "Páginas simples y efectivas, pensadas para convertir visitas en clientes. Del brief a publicada, sin vueltas.",
    tags: ["Diseño UI", "Copy", "Conversión"],
    icon: "layout",
  },
];

export const addons = [
  { name: "Reel adicional", price: "$12.000" },
  { name: "Carrusel adicional", price: "$8.000" },
  { name: "Flyer / Historia", price: "$5.000" },
  { name: "Jornada de grabación", price: "$20.000" },
  { name: "Optimización de perfil IG", price: "$35.000" },
  { name: "Meta Ads", price: "$35.000" },
  { name: "Logo + identidad visual", price: "$25.000" },
  { name: "Landing page a medida", price: "A coordinar" },
  { name: "Servicio de drone", price: "$80.000" },
];

export const steps = [
  {
    n: "01",
    title: "Reunión inicial",
    desc: "Conocemos tu negocio, tus objetivos y a quién le querés hablar.",
  },
  {
    n: "02",
    title: "Estrategia",
    desc: "Definimos el enfoque del mes y los temas del calendario.",
  },
  {
    n: "03",
    title: "Creación",
    desc: "Coordinamos una grabación o trabajamos con tu material.",
  },
  {
    n: "04",
    title: "Diseño y edición",
    desc: "Reels, carruseles e historias con identidad visual coherente.",
  },
  {
    n: "05",
    title: "Revisión",
    desc: "Te mostramos todo antes de publicar y ajustamos si hace falta.",
  },
  {
    n: "06",
    title: "Publicación",
    desc: "Programamos y publicamos según el calendario acordado.",
  },
  {
    n: "07",
    title: "Seguimiento",
    desc: "Informe mensual de resultados y próximos pasos.",
  },
];

export const pillars = [
  {
    title: "Identidad de marca",
    desc: "Estrategias fieles a la esencia real de cada marca, sin fórmulas genéricas.",
  },
  {
    title: "Engagement",
    desc: "Comunicación pensada para generar interacción real, no solo impactar.",
  },
  {
    title: "Confianza",
    desc: "Procesos claros y entregas puntuales que construyen reputación en el tiempo.",
  },
  {
    title: "Estrategia integral",
    desc: "Cada pieza se integra en un plan unificado, con coherencia en todos los canales.",
  },
];

export const plans = [
  {
    name: "Esencial",
    price: "45.000",
    desc: "Ideal si ya tenés fotos y videos propios.",
    features: [
      "Estrategia de contenido",
      "6 contenidos/mes (reels + carrusel + post)",
      "7 historias + diseño y copy",
      "Informe mensual de resultados",
      "Vos enviás el material, nosotros creamos",
    ],
    featured: false,
  },
  {
    name: "Crecimiento",
    price: "65.000",
    desc: "El más elegido: contenido + producción propia.",
    features: [
      "Estrategia de contenido",
      "9 contenidos/mes (reels + carruseles + post)",
      "10 historias + diseño y copy",
      "1 jornada de grabación al mes (2 hs)",
      "Gestión básica de comunidad (DMs y comentarios)",
      "Informe mensual de resultados",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "75.000",
    desc: "Acompañamiento integral, todo resuelto.",
    features: [
      "Estrategia de contenido personalizada",
      "12 contenidos/mes (reels + carruseles + post)",
      "21 historias + diseño y copy",
      "1 jornada de grabación al mes",
      "Gestión completa de comunidad (DMs, comentarios, moderación)",
      "Reunión mensual + informe con recomendaciones",
    ],
    featured: false,
  },
];

export const team = [
  {
    name: "Celeste Martino",
    role: "Diseñadora",
    photo: "/team-celeste.jpg",
    wa: WA_CELES,
    phone: "+54 9 11 7036-5216",
  },
  {
    name: "Camila Borrajo",
    role: "Creadora de Contenido",
    photo: "/team-camila.jpg",
    wa: WA_CAMI,
    phone: "+54 9 11 5409-1703",
  },
];

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mila Digital",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon-512.png`,
  image: `${SITE_URL}/og-image.jpg`,
  description: DESCRIPTION,
  foundingDate: "2026",
  founders: [
    { "@type": "Person", name: "Celeste Martino" },
    { "@type": "Person", name: "Camila Borrajo" },
  ],
  areaServed: "AR",
  sameAs: [IG_URL],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+54-9-11-7036-5216",
      contactType: "customer service",
      areaServed: "AR",
      availableLanguage: "Spanish",
    },
  ],
};

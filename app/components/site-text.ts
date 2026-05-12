export type SiteLanguage = "en" | "es";

export const siteText = {
  header: {
    en: {
      brand: "Premium Helmets",
      home: "Home",
      products: "Products",
      contact: "Contact",
      lineup: "Product Lineup",
      helmetView: "Helmet View",
      shortcuts: "Shortcuts",
      quickLinks: [
        "Browse by Helmet Type",
        "Flip-Up Collection",
        "Contact for Wholesale",
      ],
    },
    es: {
      brand: "Cascos Premium",
      home: "Inicio",
      products: "Productos",
      contact: "Contacto",
      lineup: "Línea de Productos",
      helmetView: "Vista General",
      shortcuts: "Accesos Rápidos",
      quickLinks: [
        "Buscar por tipo de casco",
        "Colección Flip-Up",
        "Contacto para mayoristas",
      ],
    },
  },
  footer: {
    en: "© 2026 XVEX Helmets. All rights reserved.",
    es: "© 2026 XVEX Helmets. Todos los derechos reservados.",
  },
  home: {
    en: {
      badge: "XVEX HELMETS",
      eyebrow: "Engineered For Road Presence",
      featuredModel: "Featured Model",
      titleTop: "Premium Motorcycle",
      titleBottom: "Helmets",
      description:
        "High-quality helmets designed for safety, comfort, and a strong road presence.",
      note: "Flip-Up / Full Face / Open Face / Off Road",
      factoryPoints: [
        "Factory Direct Supply",
        "OEM / ODM Support",
        "Wholesale Partnership",
      ],
      products: "Explore Products",
      contact: "Contact Us",
      whatsapp: "WhatsApp Us",
      slideLabel: "Current Slide",
      slideNote: "Click the image to open the product detail page.",
      showcaseDescriptions: [
        "Modern helmet silhouettes for riders who want clean lines, bold presence, and reliable protection.",
        "From city commuting to long-distance touring, explore product lines shaped for real-world performance.",
      ],
      categories: ["Full Face", "Flip-Up", "Open Face", "Off Road"],
    },
    es: {
      badge: "CASCOS XVEX",
      eyebrow: "Diseñados para destacar en la carretera",
      featuredModel: "Modelo Destacado",
      titleTop: "Cascos Premium",
      titleBottom: "para Motocicleta",
      description:
        "Cascos de alta calidad diseñados para ofrecer seguridad, comodidad y una presencia sólida en carretera.",
      note: "Flip-Up / Integral / Open Face / Off Road",
      factoryPoints: [
        "Suministro Directo de Fábrica",
        "Soporte OEM / ODM",
        "Alianzas para Mayoristas",
      ],
      products: "Ver productos",
      contact: "Contáctanos",
      whatsapp: "WhatsApp",
      slideLabel: "Modelo Actual",
      slideNote: "Haz clic en la imagen para abrir la ficha del producto.",
      showcaseDescriptions: [
        "Diseños modernos para motociclistas que buscan líneas limpias, presencia fuerte y protección confiable.",
        "Desde el uso urbano hasta el touring de larga distancia, explora líneas de producto desarrolladas para el rendimiento real.",
      ],
      categories: ["Integral", "Flip-Up", "Open Face", "Off Road"],
    },
  },
  products: {
    en: {
      badge: "Product Collection",
      eyebrow: "Classified By Riding Style",
      title: "Helmet Models By Riding Category",
      description:
        "Browse our flip-up, full-face, open-face, and off-road lineup in a cleaner product structure.",
      modelOverview: "Model Overview",
      viewDetails: "View Details",
      categoryLabel: "Category",
      categoryDescription: {
        "Flip-Up":
          "Versatile modular helmets with front, side, open, and back-view support.",
        "Full Face":
          "Performance-focused road helmets built for speed, protection, and racing posture.",
        "Open Face":
          "Open-face urban helmets with flexible visor and peak combinations for broader styling options.",
        "Off-Road":
          "Aggressive off-road and adventure shells designed for wider vision and stronger presence.",
      } as Record<string, string>,
      categoryTitles: {
        "Flip-Up": "Flip-Up Helmets",
        "Full Face": "Full Face Helmets",
        "Open Face": "Open Face Helmets",
        "Off-Road": "Off-Road Helmets",
      } as Record<string, string>,
    },
    es: {
      badge: "Colección de Productos",
      eyebrow: "Clasificados por estilo de conducción",
      title: "Modelos de Cascos por Categoría",
      description:
        "Explora nuestra línea flip-up, integral, open face y off-road con una estructura de producto más clara.",
      modelOverview: "Resumen del Modelo",
      viewDetails: "Ver Detalles",
      categoryLabel: "Categoría",
      categoryDescription: {
        "Flip-Up":
          "Cascos modulares versátiles con soporte para vistas frontal, lateral, abierta y trasera.",
        "Full Face":
          "Cascos integrales orientados al rendimiento, desarrollados para velocidad, protección y postura deportiva.",
        "Open Face":
          "Cascos open face de enfoque urbano con combinaciones flexibles de visor y peak para más opciones de estilo.",
        "Off-Road":
          "Cascos off-road de carácter agresivo, diseñados para ofrecer mayor visión y una presencia más marcada.",
      } as Record<string, string>,
      categoryTitles: {
        "Flip-Up": "Cascos Flip-Up",
        "Full Face": "Cascos Integrales",
        "Open Face": "Cascos Open Face",
        "Off-Road": "Cascos Off Road",
      } as Record<string, string>,
    },
  },
  detail: {
    en: {
      back: "Back to Products",
      badge: "Product Detail",
      notFound: "Product Not Found",
      notFoundText: "The product you are looking for does not exist.",
      material: "Material",
      weight: "Weight",
      certification: "Certification",
      sizes: "Available Sizes",
      features: "Key Features",
      contact: "Contact for Inquiry",
      whatsapp: "WhatsApp Us",
      graphics: "Graphic Options",
      views: {
        front: "Front",
        side: "Side",
        open: "Open",
        back: "Back",
      },
      standard: "Standard",
      graphicNames: {
        Ghost: "Ghost",
        "Orange Mecha": "Orange Mecha",
        Joker: "Joker",
        Mecha: "Mecha",
        "Red Fiber": "Red Fiber",
        Skull: "Skull",
        Viper: "Viper",
        Gray: "Gray",
        "Ink Wash Lotus": "Ink Wash Lotus",
        "Mecha Blue": "Mecha Blue",
        "Mecha Gray": "Mecha Gray",
        "Venom Black": "Venom Black",
        "Venom Red": "Venom Red",
        Cream: "Cream",
        Flame: "Flame",
        Vintage: "Vintage",
        "Black Peak": "Black Peak",
        "Cream Black Peak": "Cream Black Peak",
        "Gray Black Peak": "Gray Black Peak",
        "Flame Black Peak": "Flame Black Peak",
        "Bubble Shield": "Bubble Shield",
        "Vintage Black Peak": "Vintage Black Peak",
        "Rainbow Peak": "Rainbow Peak",
        "Vintage Rainbow Peak": "Vintage Rainbow Peak",
        "Black Red": "Black Red",
        "Black White": "Black White",
        "Black Yellow": "Black Yellow",
        "Purple Red": "Purple Red",
        White: "White",
        Blue: "Blue",
      } as Record<string, string>,
    },
    es: {
      back: "Volver a Productos",
      badge: "Detalle del Producto",
      notFound: "Producto no Encontrado",
      notFoundText: "El producto que buscas no está disponible.",
      material: "Material",
      weight: "Peso",
      certification: "Certificación",
      sizes: "Tallas Disponibles",
      features: "Características Clave",
      contact: "Solicitar Información",
      whatsapp: "WhatsApp",
      graphics: "Opciones Gráficas",
      views: {
        front: "Frontal",
        side: "Lateral",
        open: "Abierto",
        back: "Trasera",
      },
      standard: "Estándar",
      graphicNames: {
        Ghost: "Ghost",
        "Orange Mecha": "Mecha Naranja",
        Joker: "Joker",
        Mecha: "Mecha",
        "Red Fiber": "Fibra Roja",
        Skull: "Calavera",
        Viper: "Viper",
        Gray: "Gris",
        "Ink Wash Lotus": "Loto Ink Wash",
        "Mecha Blue": "Mecha Azul",
        "Mecha Gray": "Mecha Gris",
        "Venom Black": "Venom Negro",
        "Venom Red": "Venom Rojo",
        Cream: "Crema",
        Flame: "Flame",
        Vintage: "Vintage",
        "Black Peak": "Black Peak",
        "Cream Black Peak": "Black Peak Crema",
        "Gray Black Peak": "Black Peak Gris",
        "Flame Black Peak": "Black Peak Flame",
        "Bubble Shield": "Bubble Shield",
        "Vintage Black Peak": "Black Peak Vintage",
        "Rainbow Peak": "Rainbow Peak",
        "Vintage Rainbow Peak": "Vintage Rainbow Peak",
        "Black Red": "Negro Rojo",
        "Black White": "Negro Blanco",
        "Black Yellow": "Negro Amarillo",
        "Purple Red": "Púrpura Rojo",
        White: "Blanco",
        Blue: "Azul",
      } as Record<string, string>,
    },
  },
  contact: {
    en: {
      badge: "Contact Us",
      title: "Start Your Inquiry",
      description:
        "Reach out for product details, pricing, or wholesale cooperation.",
      direct: "Direct Contact",
      phone: "Phone",
      formBadge: "Inquiry Form",
      formTitle: "Send Us a Message",
      formDescription:
        "Tell us the model, quantity, and market requirement.",
      name: "Name",
      email: "Email",
      message: "Message",
      messagePlaceholder:
        "Tell us the model, quantity, market, or customization needs",
      hint: "Include the model name and target quantity for a faster reply.",
      send: "Send Inquiry",
      whatsapp: "WhatsApp Us",
      quickBadge: "Quick Contact",
      quickTitle: "Scan to Connect",
      quickDescription:
        "For faster communication, scan the QR code below to connect with us directly on WhatsApp or WeChat.",
      whatsappQr: "WhatsApp QR",
      whatsappQrText:
        "Instant chat for product inquiry and wholesale contact.",
      fastReply: "Fast Reply",
      scanWhatsapp: "Scan to open WhatsApp chat directly.",
      openWhatsapp: "Open WhatsApp",
      wechatQr: "WeChat QR",
      wechatQrText:
        "Best for quick messaging and sharing product details.",
      wechat: "WeChat",
      scanWechat: "Scan to connect with us on WeChat.",
      instagramQr: "Instagram QR",
      instagramQrText:
        "Scan to view our latest helmet updates and product visuals.",
      instagram: "Instagram",
      scanInstagram: "Scan to open our Instagram profile directly.",
      openInstagram: "Open Instagram",
    },
    es: {
      badge: "Contáctanos",
      title: "Inicia tu Consulta",
      description:
        "Contáctanos para detalles de producto, precios o cooperación mayorista.",
      direct: "Contacto Directo",
      phone: "Teléfono",
      formBadge: "Formulario de Consulta",
      formTitle: "Envíanos un Mensaje",
      formDescription:
        "Indícanos el modelo, la cantidad y el requisito de tu mercado.",
      name: "Nombre",
      email: "Correo Electrónico",
      message: "Mensaje",
      messagePlaceholder:
        "Indícanos el modelo, la cantidad, el mercado o las necesidades de personalización",
      hint:
        "Incluye el nombre del modelo y la cantidad estimada para una respuesta más rápida.",
      send: "Enviar Consulta",
      whatsapp: "WhatsApp",
      quickBadge: "Contacto Rápido",
      quickTitle: "Escanea para Conectar",
      quickDescription:
        "Para una comunicación más ágil, escanea el código QR y conéctate con nosotros directamente por WhatsApp o WeChat.",
      whatsappQr: "QR de WhatsApp",
      whatsappQrText:
        "Chat directo para consultas de producto y atención a mayoristas.",
      fastReply: "Respuesta Rápida",
      scanWhatsapp: "Escanea para abrir el chat de WhatsApp.",
      openWhatsapp: "Abrir WhatsApp",
      wechatQr: "QR de WeChat",
      wechatQrText:
        "Ideal para mensajes rápidos y para compartir detalles del producto.",
      wechat: "WeChat",
      scanWechat: "Escanea para conectar con nosotros en WeChat.",
      instagramQr: "QR de Instagram",
      instagramQrText:
        "Escanea para ver nuestras últimas novedades de cascos e imágenes de producto.",
      instagram: "Instagram",
      scanInstagram: "Escanea para abrir directamente nuestro perfil de Instagram.",
      openInstagram: "Abrir Instagram",
    },
  },
} as const;

export const floatingWhatsApp = {
  en: "WhatsApp",
  es: "WhatsApp",
} as const;

export const productText = {
  "jf-001": {
    en: {
      description: "Lightweight flip-up helmet for everyday city riding.",
      details:
        "Built for commuters who want reliable protection, low wind noise, and a clean modern look.",
      features: [
        "Lightweight outer shell",
        "Breathable comfort lining",
        "Quick-release buckle",
      ],
    },
    es: {
      description: "Casco flip-up ligero para uso urbano diario.",
      details:
        "Diseñado para motociclistas que buscan protección confiable, bajo nivel de ruido del viento y una estética moderna y limpia.",
      features: [
        "Carcasa exterior ligera",
        "Forro interior transpirable",
        "Hebilla de liberación rápida",
      ],
    },
  },
  "rx-2": {
    en: {
      description: "Aerodynamic shell built for speed and track performance.",
      details:
        "Designed for aggressive riders who want a sport-focused helmet with a streamlined profile.",
      features: [
        "Aerodynamic racing profile",
        "High-performance interior padding",
        "Enhanced chin ventilation",
      ],
    },
    es: {
      description:
        "Carcasa aerodinámica desarrollada para velocidad y rendimiento en pista.",
      details:
        "Diseñado para pilotos exigentes que buscan un casco deportivo con perfil aerodinámico y enfoque racing.",
      features: [
        "Perfil aerodinámico de competición",
        "Acolchado interior de alto rendimiento",
        "Ventilación reforzada en la mentonera",
      ],
    },
  },
  "x-130": {
    en: {
      description:
        "Aggressive modular helmet with a sharp shell profile for sport touring.",
      details:
        "Built for riders who want a stronger visual identity, stable road comfort, and reliable modular performance for daily and long-distance use.",
      features: [
        "Sharp aerodynamic shell",
        "Flip-up modular construction",
        "Road-ready comfort padding",
      ],
    },
    es: {
      description:
        "Casco modular de carácter agresivo con un perfil de carcasa definido para sport touring.",
      details:
        "Desarrollado para pilotos que buscan una identidad visual más fuerte, comodidad estable en carretera y un rendimiento modular confiable tanto en uso diario como en recorridos largos.",
      features: [
        "Carcasa aerodinámica de líneas marcadas",
        "Construcción modular flip-up",
        "Acolchado cómodo para carretera",
      ],
    },
  },
  "rx-3": {
    en: {
      description:
        "Modern full-face helmet built for road performance and daily protection.",
      details:
        "Designed for riders who want a clean sport-focused silhouette, stable comfort, and reliable full-face coverage for daily riding and distribution programs.",
      features: [
        "Clean aerodynamic shell",
        "Road-ready interior comfort",
        "Stable full-face protection",
      ],
    },
    es: {
      description:
        "Casco integral moderno desarrollado para rendimiento en carretera y protección diaria.",
      details:
        "Diseñado para motociclistas que buscan una silueta deportiva limpia, confort estable y una cobertura integral confiable para el uso diario y programas de distribución.",
      features: [
        "Carcasa aerodinámica de líneas limpias",
        "Confort interior listo para carretera",
        "Protección integral estable",
      ],
    },
  },
  "x-330": {
    en: {
      description: "Designed for long-distance touring and mixed terrain rides.",
      details:
        "A versatile option for touring and adventure routes, with comfort for extended rides.",
      features: [
        "Touring-ready comfort fit",
        "Wide field of vision",
        "Durable multi-terrain shell",
      ],
    },
    es: {
      description:
        "Diseñado para viajes de larga distancia y recorridos en terrenos mixtos.",
      details:
        "Una opción versátil para rutas touring y adventure, con el nivel de confort necesario para trayectos prolongados.",
      features: [
        "Ajuste cómodo orientado al touring",
        "Amplio campo de visión",
        "Carcasa resistente para múltiples terrenos",
      ],
    },
  },
  "rx-8": {
    en: {
      description: "Clean full-face helmet built for everyday road protection.",
      details:
        "Designed for riders who need a clean full-face shape, stable comfort, and dependable daily protection for retail and wholesale programs.",
      features: [
        "Clean road-focused shell",
        "Stable interior comfort",
        "Dependable full-face coverage",
      ],
    },
    es: {
      description:
        "Casco integral de l铆neas limpias, desarrollado para la protecci贸n diaria en carretera.",
      details:
        "Dise帽ado para motociclistas que necesitan una forma integral limpia, confort estable y protecci贸n confiable para el uso diario, retail y programas mayoristas.",
      features: [
        "Carcasa limpia orientada a carretera",
        "Confort interior estable",
        "Cobertura integral confiable",
      ],
    },
  },
  "s-701": {
    en: {
      description:
        "Open-face helmet with flexible visor and peak style combinations.",
      details:
        "Designed for riders who want an open-face silhouette with more visor and peak styling options for urban riding, retail display, and wholesale programs.",
      features: [
        "Open-face city riding profile",
        "Flexible visor and peak combinations",
        "Strong display appeal for retail lines",
      ],
    },
    es: {
      description:
        "Casco open face con combinaciones flexibles de visor y peak.",
      details:
        "Diseñado para motociclistas que buscan una silueta open face con más opciones de visor y peak para uso urbano, exhibición comercial y programas mayoristas.",
      features: [
        "Perfil urbano open face",
        "Combinaciones flexibles de visor y peak",
        "Fuerte atractivo visual para líneas retail",
      ],
    },
  },
} as const;

export type Language = "en" | "es";

type LocaleText = {
  header: {
    products: string;
    contact: string;
    languageLabel: string;
    lineup: string;
    helmetView: string;
    shortcuts: string;
    categories: {
      flipUp: string;
      fullFace: string;
      openFace: string;
      offRoad: string;
    };
    quickLinks: {
      browseType: string;
      flipUpCollection: string;
      wholesale: string;
    };
  };
  footer: {
    copyright: string;
  };
  home: {
    brand: string;
    title: string;
    titleAccent: string;
    description: string;
    factoryPoints: string[];
    categoryLine: string;
    primaryCta: string;
    secondaryCta: string;
    whatsappCta: string;
    featuredLabel: string;
    slideLabel: string;
    shellLabel: string;
    viewModel: string;
    slideHint: string;
    lowerSlides: {
      title: string;
      subtitle: string;
      categories: string[];
      note: string;
    }[];
  };
  products: {
    eyebrow: string;
    kicker: string;
    title: string;
    description: string;
    viewDetails: string;
    groupedTitles: {
      flipUp: string;
      fullFace: string;
      openFace: string;
      offRoad: string;
    };
  };
  detail: {
    productDetail: string;
    notFound: string;
    backToProducts: string;
    material: string;
    weight: string;
    certification: string;
    availableSizes: string;
    keyFeatures: string;
    graphicOptions: string;
    colorOptions: string;
    contactForInquiry: string;
    whatsappUs: string;
    side: string;
    front: string;
    open: string;
    back: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    directContact: string;
    inquiryForm: string;
    sendUsMessage: string;
    formDescription: string;
    name: string;
    email: string;
    phone: string;
    whatsapp: string;
    message: string;
    messagePlaceholder: string;
    note: string;
    sendInquiry: string;
    whatsappUs: string;
    qrEyebrow: string;
    qrTitle: string;
    qrDescription: string;
    qrCards: {
      whatsapp: {
        title: string;
        badge: string;
        description: string;
        note: string;
        action: string;
      };
      wechat: {
        title: string;
        badge: string;
        description: string;
        note: string;
      };
      instagram: {
        title: string;
        badge: string;
        description: string;
        note: string;
        action: string;
      };
    };
  };
  floatingWhatsApp: string;
  productText: Record<
    string,
    {
      description: string;
      details: string;
      features: string[];
    }
  >;
};

const localeText: Record<Language, LocaleText> = {
  en: {
    header: {
      products: "PRODUCTS",
      contact: "CONTACT",
      languageLabel: "LANGUAGE",
      lineup: "PRODUCT LINEUP",
      helmetView: "HELMET VIEW",
      shortcuts: "SHORTCUTS",
      categories: {
        flipUp: "FLIP-UP",
        fullFace: "FULL FACE",
        openFace: "OPEN FACE",
        offRoad: "OFF-ROAD",
      },
      quickLinks: {
        browseType: "BROWSE BY HELMET TYPE",
        flipUpCollection: "FLIP-UP COLLECTION",
        wholesale: "CONTACT FOR WHOLESALE",
      },
    },
    footer: {
      copyright: "© 2026 XVEX Helmets. All rights reserved.",
    },
    home: {
      brand: "XVEX HELMETS",
      title: "Premium Motorcycle",
      titleAccent: "Helmets",
      description:
        "High-quality helmets designed for safety, comfort, and a strong road presence.",
      factoryPoints: [
        "FACTORY DIRECT SUPPLY",
        "OEM / ODM SUPPORT",
        "WHOLESALE PARTNERSHIP",
      ],
      categoryLine: "FLIP-UP / FULL FACE / OPEN FACE / OFF ROAD",
      primaryCta: "Explore Products",
      secondaryCta: "Contact Us",
      whatsappCta: "WhatsApp Us",
      featuredLabel: "FEATURED MODEL",
      slideLabel: "CURRENT SLIDE",
      shellLabel: "SHELL",
      viewModel: "VIEW MODEL",
      slideHint: "Click the image to open the product detail page.",
      lowerSlides: [
        {
          title: "Always Ahead",
          subtitle: "Built for speed, style, and rider confidence.",
          categories: ["Full Face", "Flip-Up", "Open Face", "Off Road"],
          note: "Modern helmet silhouettes for riders who want clean lines, bold presence, and reliable protection.",
        },
        {
          title: "Road Presence",
          subtitle: "Helmet models shaped for urban use and wholesale programs.",
          categories: ["Flip-Up", "Full Face", "Open Face", "Off Road"],
          note: "Factory-ready helmet collections prepared for product expansion, sourcing, and long-term cooperation.",
        },
      ],
    },
    products: {
      eyebrow: "PRODUCT COLLECTION",
      kicker: "CLASSIFIED BY RIDING STYLE",
      title: "Helmet Models By Riding Category",
      description:
        "Browse our flip-up, full-face, open-face, and off-road lineup in a cleaner product structure.",
      viewDetails: "View Details",
      groupedTitles: {
        flipUp: "Flip-Up",
        fullFace: "Full Face",
        openFace: "Open Face",
        offRoad: "Off Road",
      },
    },
    detail: {
      productDetail: "Product Detail",
      notFound: "Product not found.",
      backToProducts: "Back to Products",
      material: "Material",
      weight: "Weight",
      certification: "Certification",
      availableSizes: "Available Sizes",
      keyFeatures: "Key Features",
      graphicOptions: "Graphic Options",
      colorOptions: "Color Options",
      contactForInquiry: "Contact for Inquiry",
      whatsappUs: "WhatsApp Us",
      side: "Side",
      front: "Front",
      open: "Open",
      back: "Back",
    },
    contact: {
      eyebrow: "CONTACT US",
      title: "Start Your Inquiry",
      description:
        "Reach out for product details, pricing, or wholesale cooperation.",
      directContact: "DIRECT CONTACT",
      inquiryForm: "INQUIRY FORM",
      sendUsMessage: "Send Us a Message",
      formDescription:
        "Tell us the model, quantity, and market requirement.",
      name: "Name",
      email: "Email",
      phone: "Phone",
      whatsapp: "WhatsApp",
      message: "Message",
      messagePlaceholder:
        "Tell us the model, quantity, market, or customization needs",
      note: "Include the model name and target quantity for a faster reply.",
      sendInquiry: "Send Inquiry",
      whatsappUs: "WhatsApp Us",
      qrEyebrow: "QUICK CONTACT",
      qrTitle: "Scan to Connect",
      qrDescription:
        "For faster communication, scan the QR code below to connect with us directly.",
      qrCards: {
        whatsapp: {
          title: "WhatsApp QR",
          badge: "FAST REPLY",
          description:
            "Instant chat for product inquiry and wholesale contact.",
          note: "Scan to open WhatsApp chat directly.",
          action: "Open WhatsApp",
        },
        wechat: {
          title: "WeChat QR",
          badge: "WECHAT",
          description: "Best for quick messaging and sharing product details.",
          note: "Scan to connect with us on WeChat.",
        },
        instagram: {
          title: "Instagram QR",
          badge: "INSTAGRAM",
          description: "Scan to view our latest helmet updates and product visuals.",
          note: "Scan to open our Instagram profile directly.",
          action: "Open Instagram",
        },
      },
    },
    floatingWhatsApp: "WhatsApp",
    productText: {
      "jf-001": {
        description:
          "DOT certified flip-up motorcycle helmet developed for city riding, wholesale supply, and product line expansion.",
        details:
          "JF-001 is a lightweight flip-up helmet with a clean shell profile, practical daily comfort, and a product structure suited to distributors, wholesalers, and factory-direct cooperation.",
        features: [
          "DOT certified flip-up protection",
          "Lightweight shell for daily riding programs",
          "Suitable for wholesale and OEM cooperation",
        ],
      },
      "rx-2": {
        description:
          "DOT certified full-face motorcycle helmet built for road riding, product programs, and wholesale supply.",
        details:
          "RX-2 is a full-face motorcycle helmet with a clean aerodynamic shell, stable daily comfort, and a sport-focused profile suited to both retail collections and factory-direct supply programs.",
        features: [
          "DOT certified full-face protection",
          "Clean shell design for road-focused product lines",
          "Suitable for wholesale and OEM cooperation",
        ],
      },
      "x-130": {
        description:
          "DOT certified off-road motorcycle helmet designed for off-road riding, distribution, and factory-direct supply.",
        details:
          "X-130 is an off-road helmet with a stronger shell presence, stable riding comfort, and a product profile suited to dealerships, wholesalers, and long-term supply programs.",
        features: [
          "DOT certified off-road protection",
          "Stronger shell profile for off-road product lines",
          "Suitable for wholesale and OEM cooperation",
        ],
      },
      "rx-3": {
        description:
          "DOT certified full-face motorcycle helmet built for daily riding, dealer programs, and wholesale supply.",
        details:
          "RX-3 combines a clean full-face silhouette, stable comfort, and dependable road protection in a format that fits both retail collections and factory-direct distribution programs.",
        features: [
          "DOT certified full-face protection",
          "Clean shell for road-focused collections",
          "Suitable for wholesale and OEM cooperation",
        ],
      },
      "x-330": {
        description:
          "DOT certified flip-up motorcycle helmet designed for touring comfort, wholesale supply, and product line expansion.",
        details:
          "X-330 is a flip-up helmet with a balanced shell profile, practical touring comfort, and a product structure suited to retailers, distributors, and factory-direct helmet programs.",
        features: [
          "DOT certified flip-up protection",
          "Comfort-focused structure for touring programs",
          "Suitable for wholesale and OEM cooperation",
        ],
      },
      "rx-8": {
        description:
          "DOT certified full-face motorcycle helmet built for daily protection, wholesale supply, and dealer-ready product lines.",
        details:
          "RX-8 is a clean full-face helmet with dependable daily protection, stable comfort, and a simple product profile that works well for retail collections and factory-direct programs.",
        features: [
          "DOT certified full-face protection",
          "Clean shell profile for dealer-ready lines",
          "Suitable for wholesale and OEM cooperation",
        ],
      },
      "s-701": {
        description:
          "DOT certified open-face motorcycle helmet with flexible visor and peak combinations for urban-focused product lines.",
        details:
          "S-701 is an open-face helmet built around flexible shield and peak options, making it suitable for city riding, visual retail display, and factory-direct wholesale programs.",
        features: [
          "DOT certified open-face protection",
          "Flexible shield and peak configurations",
          "Strong display appeal for retail and wholesale lines",
        ],
      },
    },
  },
  es: {
    header: {
      products: "PRODUCTOS",
      contact: "CONTACTO",
      languageLabel: "IDIOMA",
      lineup: "LÍNEA DE PRODUCTOS",
      helmetView: "VISTA DE CASCOS",
      shortcuts: "ACCESOS RÁPIDOS",
      categories: {
        flipUp: "FLIP-UP",
        fullFace: "INTEGRAL",
        openFace: "OPEN FACE",
        offRoad: "OFF-ROAD",
      },
      quickLinks: {
        browseType: "BUSCAR POR TIPO DE CASCO",
        flipUpCollection: "COLECCIÓN FLIP-UP",
        wholesale: "CONTACTO MAYORISTA",
      },
    },
    footer: {
      copyright: "© 2026 XVEX Helmets. Todos los derechos reservados.",
    },
    home: {
      brand: "XVEX HELMETS",
      title: "Cascos Premium",
      titleAccent: "para Motocicleta",
      description:
        "Cascos de alta calidad diseñados para seguridad, confort y una presencia sólida en carretera.",
      factoryPoints: [
        "SUMINISTRO DIRECTO DE FÁBRICA",
        "SOPORTE OEM / ODM",
        "COOPERACIÓN MAYORISTA",
      ],
      categoryLine: "FLIP-UP / INTEGRAL / OPEN FACE / OFF ROAD",
      primaryCta: "Ver Productos",
      secondaryCta: "Contáctanos",
      whatsappCta: "WhatsApp",
      featuredLabel: "MODELO DESTACADO",
      slideLabel: "MODELO ACTUAL",
      shellLabel: "CARCASA",
      viewModel: "VER MODELO",
      slideHint: "Haz clic en la imagen para abrir la ficha del producto.",
      lowerSlides: [
        {
          title: "Siempre por Delante",
          subtitle: "Diseñado para velocidad, estilo y confianza en cada ruta.",
          categories: ["Integral", "Flip-Up", "Open Face", "Off Road"],
          note: "Siluetas modernas para riders que buscan líneas limpias, presencia fuerte y protección confiable.",
        },
        {
          title: "Presencia en Ruta",
          subtitle: "Modelos pensados para uso urbano y programas mayoristas.",
          categories: ["Flip-Up", "Integral", "Open Face", "Off Road"],
          note: "Colecciones de cascos preparadas para expansión de producto, compras y cooperación a largo plazo.",
        },
      ],
    },
    products: {
      eyebrow: "COLECCIÓN DE PRODUCTOS",
      kicker: "CLASIFICADOS POR ESTILO DE CONDUCCIÓN",
      title: "Modelos de Cascos por Categoría",
      description:
        "Explora nuestra línea flip-up, integral, open-face y off-road con una estructura de producto más clara.",
      viewDetails: "Ver Detalles",
      groupedTitles: {
        flipUp: "Flip-Up",
        fullFace: "Integral",
        openFace: "Open Face",
        offRoad: "Off Road",
      },
    },
    detail: {
      productDetail: "Detalle del Producto",
      notFound: "Producto no encontrado.",
      backToProducts: "Volver a Productos",
      material: "Material",
      weight: "Peso",
      certification: "Certificación",
      availableSizes: "Tallas Disponibles",
      keyFeatures: "Características Clave",
      graphicOptions: "Opciones Gráficas",
      colorOptions: "Opciones de Color",
      contactForInquiry: "Consultar Producto",
      whatsappUs: "WhatsApp",
      side: "Lateral",
      front: "Frontal",
      open: "Abierto",
      back: "Trasero",
    },
    contact: {
      eyebrow: "CONTACTO",
      title: "Inicia tu Consulta",
      description:
        "Contáctanos para detalles de producto, precios o cooperación mayorista.",
      directContact: "CONTACTO DIRECTO",
      inquiryForm: "FORMULARIO",
      sendUsMessage: "Envíanos un Mensaje",
      formDescription:
        "Indica el modelo, la cantidad y el mercado de destino.",
      name: "Nombre",
      email: "Correo",
      phone: "Teléfono",
      whatsapp: "WhatsApp",
      message: "Mensaje",
      messagePlaceholder:
        "Indica el modelo, la cantidad, el mercado o las necesidades de personalización",
      note: "Incluye el modelo y la cantidad prevista para una respuesta más rápida.",
      sendInquiry: "Enviar Consulta",
      whatsappUs: "WhatsApp",
      qrEyebrow: "CONTACTO RÁPIDO",
      qrTitle: "Escanea para Conectar",
      qrDescription:
        "Para una comunicación más rápida, escanea el código QR y conéctate con nosotros directamente.",
      qrCards: {
        whatsapp: {
          title: "WhatsApp QR",
          badge: "RESPUESTA RÁPIDA",
          description:
            "Chat directo para consultas de producto y atención a mayoristas.",
          note: "Escanea para abrir el chat de WhatsApp.",
          action: "Abrir WhatsApp",
        },
        wechat: {
          title: "WeChat QR",
          badge: "WECHAT",
          description:
            "Ideal para mensajes rápidos y para compartir detalles del producto.",
          note: "Escanea para conectar con nosotros en WeChat.",
        },
        instagram: {
          title: "Instagram QR",
          badge: "INSTAGRAM",
          description:
            "Escanea para ver nuestras últimas novedades de cascos e imágenes de producto.",
          note: "Escanea para abrir directamente nuestro perfil de Instagram.",
          action: "Abrir Instagram",
        },
      },
    },
    floatingWhatsApp: "WhatsApp",
    productText: {
      "jf-001": {
        description:
          "Casco flip-up con certificación DOT, desarrollado para uso urbano, suministro mayorista y ampliación de línea de producto.",
        details:
          "JF-001 es un casco flip-up ligero con un perfil limpio, comodidad práctica para el uso diario y una estructura adecuada para distribuidores, mayoristas y cooperación directa con fábrica.",
        features: [
          "Protección flip-up con certificación DOT",
          "Carcasa ligera para programas de uso diario",
          "Apto para cooperación mayorista y OEM",
        ],
      },
      "rx-2": {
        description:
          "Casco integral con certificación DOT, diseñado para uso en carretera, programas de producto y suministro mayorista.",
        details:
          "RX-2 es un casco integral con carcasa aerodinámica, comodidad estable para el uso diario y un perfil deportivo adecuado tanto para colecciones comerciales como para suministro directo de fábrica.",
        features: [
          "Protección integral con certificación DOT",
          "Diseño limpio para líneas de producto orientadas a carretera",
          "Apto para cooperación mayorista y OEM",
        ],
      },
      "x-130": {
        description:
          "Casco off-road con certificación DOT, diseñado para conducción fuera de carretera, distribución y suministro directo de fábrica.",
        details:
          "X-130 es un casco off-road con una presencia de carcasa más marcada, comodidad estable de conducción y un perfil de producto adecuado para distribuidores, mayoristas y programas de suministro a largo plazo.",
        features: [
          "Protección off-road con certificación DOT",
          "Perfil de carcasa más fuerte para líneas off-road",
          "Apto para cooperación mayorista y OEM",
        ],
      },
      "rx-3": {
        description:
          "Casco integral con certificación DOT, desarrollado para uso diario, programas para distribuidores y suministro mayorista.",
        details:
          "RX-3 combina una silueta integral limpia, confort estable y protección confiable en carretera dentro de un formato adecuado tanto para colecciones comerciales como para programas de distribución directa de fábrica.",
        features: [
          "Protección integral con certificación DOT",
          "Carcasa limpia para colecciones de carretera",
          "Apto para cooperación mayorista y OEM",
        ],
      },
      "x-330": {
        description:
          "Casco flip-up con certificación DOT, diseñado para confort touring, suministro mayorista y ampliación de línea de producto.",
        details:
          "X-330 es un casco flip-up con un perfil equilibrado, confort práctico para touring y una estructura adecuada para retailers, distribuidores y programas directos de fábrica.",
        features: [
          "Protección flip-up con certificación DOT",
          "Estructura cómoda para programas touring",
          "Apto para cooperación mayorista y OEM",
        ],
      },
      "rx-8": {
        description:
          "Casco integral con certificación DOT, desarrollado para protección diaria, suministro mayorista y líneas listas para distribuidores.",
        details:
          "RX-8 es un casco integral de líneas limpias con protección diaria confiable, confort estable y un perfil de producto simple que funciona bien para colecciones comerciales y programas directos de fábrica.",
        features: [
          "Protección integral con certificación DOT",
          "Perfil limpio para líneas listas para distribuidores",
          "Apto para cooperación mayorista y OEM",
        ],
      },
      "s-701": {
        description:
          "Casco open-face con certificación DOT, con combinaciones flexibles de visor y peak para líneas de producto urbanas.",
        details:
          "S-701 es un casco open-face desarrollado alrededor de opciones flexibles de visor y peak, adecuado para uso urbano, exhibición comercial y programas mayoristas directos de fábrica.",
        features: [
          "Protección open-face con certificación DOT",
          "Configuraciones flexibles de visor y peak",
          "Fuerte atractivo visual para líneas retail y mayoristas",
        ],
      },
    },
  },
};

export const graphicNames: Record<Language, Record<string, string>> = {
  en: {
    standard: "Standard",
    joker: "Joker",
    mecha: "Mecha",
    redFiber: "Red Fiber",
    skull: "Skull",
    viper: "Viper",
    ghost: "Ghost",
    orangeMecha: "Orange Mecha",
    blue: "Blue",
    black: "Black",
    creamBlackPeak: "Cream Black Peak",
    grayBlackPeak: "Gray Black Peak",
    flameBlackPeak: "Flame Black Peak",
    vintageBlackPeak: "Vintage Black Peak",
    bubbleShield: "Bubble Shield",
    rainbowPeak: "Rainbow Peak",
  },
  es: {
    standard: "Estándar",
    joker: "Joker",
    mecha: "Mecha",
    redFiber: "Fibra Roja",
    skull: "Skull",
    viper: "Viper",
    ghost: "Ghost",
    orangeMecha: "Mecha Naranja",
    blue: "Azul",
    black: "Negro",
    creamBlackPeak: "Crema Black Peak",
    grayBlackPeak: "Gris Black Peak",
    flameBlackPeak: "Flame Black Peak",
    vintageBlackPeak: "Vintage Black Peak",
    bubbleShield: "Bubble Shield",
    rainbowPeak: "Rainbow Peak",
  },
};

export const floatingWhatsApp: Record<Language, string> = {
  en: localeText.en.floatingWhatsApp,
  es: localeText.es.floatingWhatsApp,
};

export const productText = {
  "jf-001": {
    en: localeText.en.productText["jf-001"],
    es: localeText.es.productText["jf-001"],
  },
  "rx-2": {
    en: localeText.en.productText["rx-2"],
    es: localeText.es.productText["rx-2"],
  },
  "x-130": {
    en: localeText.en.productText["x-130"],
    es: localeText.es.productText["x-130"],
  },
  "rx-3": {
    en: localeText.en.productText["rx-3"],
    es: localeText.es.productText["rx-3"],
  },
  "x-330": {
    en: localeText.en.productText["x-330"],
    es: localeText.es.productText["x-330"],
  },
  "rx-8": {
    en: localeText.en.productText["rx-8"],
    es: localeText.es.productText["rx-8"],
  },
  "s-701": {
    en: localeText.en.productText["s-701"],
    es: localeText.es.productText["s-701"],
  },
} as const;

export const siteText = {
  header: {
    en: {
      brand: "PREMIUM HELMETS",
      home: "HOME",
      products: localeText.en.header.products,
      contact: localeText.en.header.contact,
      languageLabel: localeText.en.header.languageLabel,
      lineup: localeText.en.header.lineup,
      helmetView: localeText.en.header.helmetView,
      shortcuts: localeText.en.header.shortcuts,
      quickLinks: [
        localeText.en.header.quickLinks.browseType,
        localeText.en.header.quickLinks.flipUpCollection,
        localeText.en.header.quickLinks.wholesale,
      ],
    },
    es: {
      brand: "PREMIUM HELMETS",
      home: "INICIO",
      products: localeText.es.header.products,
      contact: localeText.es.header.contact,
      languageLabel: localeText.es.header.languageLabel,
      lineup: localeText.es.header.lineup,
      helmetView: localeText.es.header.helmetView,
      shortcuts: localeText.es.header.shortcuts,
      quickLinks: [
        localeText.es.header.quickLinks.browseType,
        localeText.es.header.quickLinks.flipUpCollection,
        localeText.es.header.quickLinks.wholesale,
      ],
    },
  },
  footer: {
    en: localeText.en.footer.copyright,
    es: localeText.es.footer.copyright,
  },
  home: {
    en: {
      badge: localeText.en.home.brand,
      titleTop: localeText.en.home.title,
      titleBottom: localeText.en.home.titleAccent,
      description: localeText.en.home.description,
      factoryPoints: localeText.en.home.factoryPoints,
      note: localeText.en.home.categoryLine,
      featuredModel: localeText.en.home.featuredLabel,
      slideLabel: localeText.en.home.slideLabel,
      slideNote: localeText.en.home.slideHint,
      products: localeText.en.home.primaryCta,
      contact: localeText.en.home.secondaryCta,
      whatsapp: localeText.en.home.whatsappCta,
      categories: localeText.en.home.lowerSlides[0].categories,
      showcaseDescriptions: localeText.en.home.lowerSlides.map((slide) => slide.note),
    },
    es: {
      badge: localeText.es.home.brand,
      titleTop: localeText.es.home.title,
      titleBottom: localeText.es.home.titleAccent,
      description: localeText.es.home.description,
      factoryPoints: localeText.es.home.factoryPoints,
      note: localeText.es.home.categoryLine,
      featuredModel: localeText.es.home.featuredLabel,
      slideLabel: localeText.es.home.slideLabel,
      slideNote: localeText.es.home.slideHint,
      products: localeText.es.home.primaryCta,
      contact: localeText.es.home.secondaryCta,
      whatsapp: localeText.es.home.whatsappCta,
      categories: localeText.es.home.lowerSlides[0].categories,
      showcaseDescriptions: localeText.es.home.lowerSlides.map((slide) => slide.note),
    },
  },
  products: {
    en: {
      badge: localeText.en.products.eyebrow,
      eyebrow: localeText.en.products.kicker,
      title: localeText.en.products.title,
      description: localeText.en.products.description,
      categoryTitles: {
        "Flip-Up": localeText.en.products.groupedTitles.flipUp,
        "Full Face": localeText.en.products.groupedTitles.fullFace,
        "Open Face": localeText.en.products.groupedTitles.openFace,
        "Off-Road": localeText.en.products.groupedTitles.offRoad,
      },
      categoryLabel: "CATEGORY",
      categoryDescription: {
        "Flip-Up": "Versatile flip-up helmet models prepared for daily commuting, touring comfort, and wholesale product programs.",
        "Full Face": "Road-focused full-face helmet models built for clean design, dependable protection, and dealer-ready collections.",
        "Open Face": "Open-face helmet models with flexible shield and peak combinations suited to urban display and retail programs.",
        "Off-Road": "Off-road helmet models designed for stronger shell presence, active riding use, and distributor supply.",
      },
      modelOverview: "MODEL OVERVIEW",
      viewDetails: localeText.en.products.viewDetails,
    },
    es: {
      badge: localeText.es.products.eyebrow,
      eyebrow: localeText.es.products.kicker,
      title: localeText.es.products.title,
      description: localeText.es.products.description,
      categoryTitles: {
        "Flip-Up": localeText.es.products.groupedTitles.flipUp,
        "Full Face": localeText.es.products.groupedTitles.fullFace,
        "Open Face": localeText.es.products.groupedTitles.openFace,
        "Off-Road": localeText.es.products.groupedTitles.offRoad,
      },
      categoryLabel: "CATEGORÍA",
      categoryDescription: {
        "Flip-Up": "Modelos flip-up preparados para desplazamiento diario, confort touring y programas de producto mayorista.",
        "Full Face": "Modelos integrales orientados a carretera, con diseño limpio, protección confiable y colecciones listas para distribuidores.",
        "Open Face": "Modelos open-face con combinaciones flexibles de visor y peak, adecuados para exhibición urbana y programas retail.",
        "Off-Road": "Modelos off-road diseñados para una presencia de carcasa más fuerte, uso activo y suministro para distribuidores.",
      },
      modelOverview: "RESUMEN DEL MODELO",
      viewDetails: localeText.es.products.viewDetails,
    },
  },
  detail: {
    en: {
      back: localeText.en.detail.backToProducts,
      badge: localeText.en.detail.productDetail,
      material: localeText.en.detail.material,
      weight: localeText.en.detail.weight,
      certification: localeText.en.detail.certification,
      sizes: localeText.en.detail.availableSizes,
      features: localeText.en.detail.keyFeatures,
      contact: localeText.en.detail.contactForInquiry,
      whatsapp: localeText.en.detail.whatsappUs,
      standard: "Standard",
      views: {
        front: localeText.en.detail.front,
        side: localeText.en.detail.side,
        open: localeText.en.detail.open,
        back: localeText.en.detail.back,
      },
      graphics: localeText.en.detail.graphicOptions,
      graphicNames: graphicNames.en,
      notFound: localeText.en.detail.notFound,
      notFoundText: "The requested helmet model is not available right now.",
    },
    es: {
      back: localeText.es.detail.backToProducts,
      badge: localeText.es.detail.productDetail,
      material: localeText.es.detail.material,
      weight: localeText.es.detail.weight,
      certification: localeText.es.detail.certification,
      sizes: localeText.es.detail.availableSizes,
      features: localeText.es.detail.keyFeatures,
      contact: localeText.es.detail.contactForInquiry,
      whatsapp: localeText.es.detail.whatsappUs,
      standard: "Estándar",
      views: {
        front: localeText.es.detail.front,
        side: localeText.es.detail.side,
        open: localeText.es.detail.open,
        back: localeText.es.detail.back,
      },
      graphics: localeText.es.detail.graphicOptions,
      graphicNames: graphicNames.es,
      notFound: localeText.es.detail.notFound,
      notFoundText: "El modelo solicitado no está disponible en este momento.",
    },
  },
  contact: {
    en: {
      badge: localeText.en.contact.eyebrow,
      title: localeText.en.contact.title,
      description: localeText.en.contact.description,
      direct: localeText.en.contact.directContact,
      email: localeText.en.contact.email,
      phone: localeText.en.contact.phone,
      formBadge: localeText.en.contact.inquiryForm,
      formTitle: localeText.en.contact.sendUsMessage,
      formDescription: localeText.en.contact.formDescription,
      name: localeText.en.contact.name,
      message: localeText.en.contact.message,
      messagePlaceholder: localeText.en.contact.messagePlaceholder,
      hint: localeText.en.contact.note,
      send: localeText.en.contact.sendInquiry,
      whatsapp: localeText.en.contact.whatsappUs,
      quickBadge: localeText.en.contact.qrEyebrow,
      quickTitle: localeText.en.contact.qrTitle,
      quickDescription: localeText.en.contact.qrDescription,
      whatsappQr: localeText.en.contact.qrCards.whatsapp.title,
      whatsappQrText: localeText.en.contact.qrCards.whatsapp.description,
      fastReply: localeText.en.contact.qrCards.whatsapp.badge,
      scanWhatsapp: localeText.en.contact.qrCards.whatsapp.note,
      openWhatsapp: localeText.en.contact.qrCards.whatsapp.action,
      wechatQr: localeText.en.contact.qrCards.wechat.title,
      wechatQrText: localeText.en.contact.qrCards.wechat.description,
      wechat: localeText.en.contact.qrCards.wechat.badge,
      scanWechat: localeText.en.contact.qrCards.wechat.note,
      instagramQr: localeText.en.contact.qrCards.instagram.title,
      instagramQrText: localeText.en.contact.qrCards.instagram.description,
      instagram: localeText.en.contact.qrCards.instagram.badge,
      scanInstagram: localeText.en.contact.qrCards.instagram.note,
      openInstagram: localeText.en.contact.qrCards.instagram.action,
    },
    es: {
      badge: localeText.es.contact.eyebrow,
      title: localeText.es.contact.title,
      description: localeText.es.contact.description,
      direct: localeText.es.contact.directContact,
      email: localeText.es.contact.email,
      phone: localeText.es.contact.phone,
      formBadge: localeText.es.contact.inquiryForm,
      formTitle: localeText.es.contact.sendUsMessage,
      formDescription: localeText.es.contact.formDescription,
      name: localeText.es.contact.name,
      message: localeText.es.contact.message,
      messagePlaceholder: localeText.es.contact.messagePlaceholder,
      hint: localeText.es.contact.note,
      send: localeText.es.contact.sendInquiry,
      whatsapp: localeText.es.contact.whatsappUs,
      quickBadge: localeText.es.contact.qrEyebrow,
      quickTitle: localeText.es.contact.qrTitle,
      quickDescription: localeText.es.contact.qrDescription,
      whatsappQr: localeText.es.contact.qrCards.whatsapp.title,
      whatsappQrText: localeText.es.contact.qrCards.whatsapp.description,
      fastReply: localeText.es.contact.qrCards.whatsapp.badge,
      scanWhatsapp: localeText.es.contact.qrCards.whatsapp.note,
      openWhatsapp: localeText.es.contact.qrCards.whatsapp.action,
      wechatQr: localeText.es.contact.qrCards.wechat.title,
      wechatQrText: localeText.es.contact.qrCards.wechat.description,
      wechat: localeText.es.contact.qrCards.wechat.badge,
      scanWechat: localeText.es.contact.qrCards.wechat.note,
      instagramQr: localeText.es.contact.qrCards.instagram.title,
      instagramQrText: localeText.es.contact.qrCards.instagram.description,
      instagram: localeText.es.contact.qrCards.instagram.badge,
      scanInstagram: localeText.es.contact.qrCards.instagram.note,
      openInstagram: localeText.es.contact.qrCards.instagram.action,
    },
  },
} as const;

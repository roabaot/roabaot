import {
  facebook,
  instagram,
  linkedin,
  twitter,
  semwar,
  shi,
  lodge,
  harajUAE,
  wafy,
  Express,
  Next,
  Node,
  Nuxt,
  PWA,
  React,
  Tailwind,
  Vue,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "langs",
    title: "Features",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const langs = [
  {
    title: "React",
    img: React,
  },
  {
    title: "Next",
    img: Next,
  },
  {
    title: "Vue",
    img: Vue,
  },
  {
    title: "Nuxt",
    img: Nuxt,
  },
  {
    title: "Node",
    img: Node,
  },
  {
    title: "Express",
    img: Express,
  },
];

export const projects = [
  {
    title: "نظام وفي",
    desc: "نظام وفي, هو نظام يستخدم لتنظيم وإدارة الوثائق والملفات الإلكترونية بطريقة فعالة ومنظمة. يتم استخدام هذا النظام في المؤسسات والمنظمات للحفاظ على الوثائق الهامة وتسهيل عملية الوصول إليها وإدارتها.",
    img: wafy,
    link: "https://wafysys.com/main/dashboard/login",
    tags: ["react", "primereact", "tailwind", "context", "CKEditor 5"],
  },
  {
    title: "مكتبة لغة الاشارة السعودية",
    desc: "مكتبة لغة الإشارة السعودية هي منصة إلكترونية تابعة للجمعية السعودية للاعاقة السمعية، وهي تهدف إلى توفير محتوى غني ومتنوع عن لغة الإشارة السعودية.",
    img: shi,
    link: "https://sshi.sa",
    tags: ["react", "primereact", "tailwind", "context"],
  },
  {
    title: "حراج الامارات",
    desc: "هو موقع إلكتروني مخصص للإعلانات والتسوق المحلي في دولة الإمارات العربية المتحدة. يقدم الموقع خدمة سوق إلكتروني حيث يمكن للمستخدمين نشر إعلانات لبيع أو شراء مختلف الأصناف",
    img: harajUAE,
    link: "https://harajemirates.com",
    tags: ["nuxt 2", "WebSocket", "vuetify", "vuex"],
  },
  {
    title: "lodge",
    desc: "نظام وفي, هو نظام يستخدم لتنظيم وإدارة الوثائق والملفات الإلكترونية بطريقة فعالة ومنظمة. يتم استخدام هذا النظام في المؤسسات والمنظمات للحفاظ على الوثائق الهامة وتسهيل عملية الوصول إليها وإدارتها.",
    img: lodge,
    link: "https://lodge-zeta.vercel.app/",
    tags: ["nuxt 2", "vuetify"],
  },
  {
    title: "semwar",
    desc: "موقع إلكتروني متخصص في تقديم خدمات تطوير البرامج والتطبيقات. يقدم الموقع مجموعة متنوعة من الحلول البرمجية لمساعدة الشركات والأفراد على تحقيق أهدافهم الرقمية.",
    img: semwar,
    link: "https://portfolio-nb41db5ag-semwar.vercel.app/",
    tags: ["react", "primereact", "tailwind"],
  },
];

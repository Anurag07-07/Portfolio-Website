// index.js
export const servicesData = [
  {
  title: "FullStack Development",
  description:
    "I build scalable, modern, and production-ready web applications from scratch. With expertise in both frontend and backend, I ensure clean architecture, smooth performance, and seamless developer experience—perfect for startups and businesses aiming for growth.",
  items: [
    {
      title: "Frontend Development",
      description:
        "HTML, CSS, JavaScript, TypeScript, React, Next.js — building responsive, interactive, and SEO-friendly UIs",
    },
    {
      title: "Backend Engineering",
      description:
        "Node.js, Express, HonoJS OAuth — designing robust APIs, authentication, and real-time features with WebSockets",
    },
    {
      title: "Database & ORM",
      description:
        "MongoDB, PostgreSQL, Prisma — efficient schema design, query optimization, and scalable data management",
    },
    {
      title: "Architecture & Tooling",
      description:
        "Monorepo & Turborepo setup, Docker — optimized workflows, modular codebase, and smooth deployment pipelines",
    },
  ],
},
//   {
//     title: "DevOps & Cloud Solutions",
//     description:
//       "Deploying software shouldn't be a gamble. I automate infrastructure, enforce security, and leverage cloud platforms (AWS/Azure) to keep your app running smoothly—24/7, at any scale.",
//     items: [
//       {
//         title: "CI/CD Pipelines",
//         description: "(GitHub Actions, Docker, Kubernetes)",
//       },
//       {
//         title: "Server Management ",
//         description: "(Linux, Nginx, Load Balancing)",
//       },
//       {
//         title: "Performance Tuning",
//         description: "(Caching, Compression, Lighthouse 90+ Scores)",
//       },
//     ],
//   },
//   {
//     title: "Security & Optimization",
//     description:
//       "Slow or hacked apps destroy trust. I harden security (XSS/SQLI protection, OAuth) and optimize bottlenecks so your app stays fast, safe, and scalable as you grow.",
//     items: [
//       {
//         title: "Code Audits",
//         description: "(Refactoring, Tech Debt Cleanup)",
//       },
//       {
//         title: "Pen Testing",
//         description: "(Vulnerability Assessments)",
//       },
//       {
//         title: "SEO Tech Stack",
//         description: "(SSR, Metadata, Structured Data)",
//       },
//     ],
//   },
//   {
//   title: "Web Apps & Web3",
//   description:
//     "I design and develop responsive, pixel-perfect Web Apps and Web3 experiences that users love—combining sleek UI/UX with blockchain functionality. Whether it's Solana or Ethereum, I build seamless interfaces that interact with smart contracts and wallets effortlessly.",
//   items: [
//     {
//       title: "Cross-Platform Apps",
//       description: "(Single codebase for iOS / Android / Web)",
//     },
//     {
//       title: "Progressive Web Apps (PWAs)",
//       description: "(Offline mode, Push Notifications, App-like feel)",
//     },
//     {
//       title: "Web3 Integration",
//       description: "(Wallet Connect, Smart Contracts, Solana / Ethereum DApps)",
//     },
//     {
//       title: "E-Commerce Solutions",
//       description: "(Checkout flows, Payment Gateways, Inventory APIs)",
//     },
//   ],
// }

];
export const projects = [
  {
    id: 1,
    name: "Mojito and Drink Website",
    description:"A modern, responsive website showcasing mojito and drink recipes with a clean, interactive design.",
    href: "",
    image: "/assets/projects/Screenshot 2025-08-03 020857.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 3, name: "GSAP" },
      { id: 5, name: "Tailwind CSS" },
    ],
    projectLink:"https://mojito-weld.vercel.app/",
    githubLink:"https://github.com/Anurag07-07/mojito"
  },
  {
    id: 2,
    name: "Apple Iphone Website",
    description:"A sleek, modern website for showcasing the latest Apple iPhone models with a focus on design and user experience.",
    href: "",
    image: "/assets/projects/Screenshot 2025-08-03 021019.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Sanity.io" },
      { id: 3, name: "Tailwind CSS" },
      { id: 4, name: "GSAP" },
      { id: 5, name: "Three.js" },
    ],
    projectLink:"https://iphone-seven-delta.vercel.app/",
    githubLink:"https://github.com/Anurag07-07/Iphone"
  },
  {
    id: 3,
    name: "Perfume UI Design",
    description:"A visually stunning UI design for a perfume brand, featuring elegant layouts and smooth animations.",
    href: "",
    image: "/assets/projects/Screenshot 2025-08-03 021225.png",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "HTML5" },
      { id: 2, name: "CSS3" },
      { id: 3, name: "JAVASCRIPT" },
      { id: 4, name: "TAILWIND CSS" },
    ],
    projectLink:"https://perfume-lilac.vercel.app/",
    githubLink:"https://github.com/Anurag07-07/perfume"
  },
  {
    id: 4,
    name: "Your Idea: Second Brain",
    description:"I’ve built a Second Brain – a full-stack productivity app where you can capture, organize, and recall ideas, notes, and tasks instantly. It works like a personal knowledge assistant, helping you never forget important thoughts while keeping everything structured and searchable",
    href: "",
    image: "assets/projects/Screenshot 2025-08-18 062228.png",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "REACT JS" },
      { id: 2, name: "TYPESCRIPT" },
      { id: 3, name: "EXPRESS JS" },
      { id: 4, name: "TAILWIND CSS" },
      { id: 4, name: "GSAP" },
    ],
    projectLink:"https://secondbrain-2.onrender.com/",
    githubLink:"https://github.com/Anurag07-07/SecondBrain"
  },
  {
    id: 4,
    name: "ExcilDraw:On Going",
    href: "",
    image: "assets/projects/Screenshot 2025-08-25 072210.png",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "NEXT JS" },
      { id: 2, name: "TYPESCRIPT" },
      { id: 3, name: "EXPRESS JS" },
      { id: 4, name: "WEBSOCKET" },
      { id: 5, name: "TURBOREPO" },
      { id: 6, name: "PRISMA" },
      { id: 7, name: "POSTGRES" },
    ],
    githubLink:"https://github.com/Anurag07-07/Drawapp"
  },
];
export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/anurag07raj/?__pwa=1" },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@shadowslayer0907",
  },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/anurag-raj-821214216/" },
  { name: "GitHub", href: "https://github.com/Anurag07-07" },
  { name: "Twitter", href: "https://x.com/ANuraGRaJ112005" },
];

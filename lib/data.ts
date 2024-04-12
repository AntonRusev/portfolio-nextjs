// DATA FILE
export const links = [
  {
    name: "Intro",
    hash: "#intro",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const highlightProjectsData = [
  {
    title: 'Fishing Buddies',
    purpose: `The purpose of "Fishing Buddies" is to provide people interested in fishing, with a platform, where they can create, or attend events, and interact with other fishing enthusiasts.`,
    description: `  The application features authorization and authentication of users(and Facebook sign-in*), email confirmation upon registration, Refresh Token functionality, client and server-side data validation, persisting data, all CRUD operations, error handling, WebSocket protocol, photo-uploading to a third party service(Cloudinary), user followings, event attendance, various filtering mechanisms, responsive design, dark and light themes, and more...
    *as Facebook requires a business account, in order to allow the developers to get access to data from users without "app role" set up, if you want to test the feature, contact me(either by the email or the phone number, provided in my CV/Portfolio), so that I can set up your Facebook account with an app role.`,
    techstack: `  "Fishing Buddies" is a full-stack application, developed with React and ASP.NET Core. It is a multi-project solution that is built using Clean Architecture and the CQRS and Mediator pattern. Among the tools and utilities used in the development of this project are: Vite, Redux-Toolkit, RTK-Query, Tailwind, Flowbite, React-Router-Dom, Formik, React-Infinite-Scroller, AutoMapper, SignalR, MediatR, .Net Core Identity and others...             
    React Testing Library, Vitest and Mock Service Worker are used for testing the client application.`,
    misc: [
      `The Frontend of "Fishing Buddies" is a SPA with responsive design.`,
      `The Client-App utilizes Redux, a state management library, to maintain a centralized and predictable state.`,
      `Updates to the cached data are done with the pessimistic updates approach. Validation tags are also used in some places, for auto-fetching outdated data.`,
      `The application is graded "A" for Content Security Policies on securityheaders.com`,
    ],
    imageUrlMobile: "https://i.ibb.co/Lkd0hKC/fb-mobile.jpg",
    imageUrlBig: "https://i.ibb.co/r30hwVH/fb-large.jpg",
    siteUrl: "https://fishing-buddies.fly.dev/",
    repoUrl: "https://github.com/AntonRusev/fishing-buddies",
  }
] as const;

export const otherProjectsData = [
  {
    title: 'Trivia-l',
    description: "Test your general knowledge in various quiz categories and set your own score records.",
    imageUrlMobile: "https://i.ibb.co/zfWPKRB/trivial-mobile.png",
    imageUrlBig: "https://i.ibb.co/BnCjXhs/trivial.png",
    siteUrl: "https://trivia-l.web.app",
    repoUrl: "https://github.com/AntonRusev/Trivial",
  },
  {
    title: 'NFTs Gallery',
    description: "No, not that kind of NFTs(although they seem to be equally worthless nowadays)...",
    imageUrlMobile: "https://i.ibb.co/k8HVYDr/nft-create-mobile.png",
    imageUrlBig: "https://i.ibb.co/xqb8y1f/nft-home-full.png",
    siteUrl: "https://nfts-gallery.web.app",
    repoUrl: "https://github.com/AntonRusev/React-NFTs",
  },
  {
    title: 'Crazy Calculator',
    description: "Junior developer portfolio and Calculator project, name a more iconic duo. I'll wait.",
    imageUrlMobile: "https://i.ibb.co/Y7m35jz/calc-mobile.png",
    imageUrlBig: "https://i.ibb.co/Vt3TmVF/calc-full.png",
    siteUrl: "https://crazy-calculating-challenge.web.app",
    repoUrl: "https://github.com/AntonRusev/Crazy-Calculator",
  },
  {
    title: 'CHOREMINDER',
    description: "Any resemblance to fictional creatures, their names, or colors, is purely coincidental.",
    imageUrlMobile: "https://i.ibb.co/0Zp8Cpd/chore-mobile.png",
    imageUrlBig: "https://i.ibb.co/Kmdz679/choreminder.png",
    siteUrl: "https://chore-minder.web.app",
    repoUrl: "https://github.com/AntonRusev/Choreminder",
  },
  {
    title: 'First Portfolio',
    description: "My former portfolio.",
    imageUrlMobile: "https://i.ibb.co/Jj9G3Rw/former-portfolio-mobile.jpg",
    imageUrlBig: "https://i.ibb.co/JC6dvDX/former-portfolio-large.jpg",
    siteUrl: "https://anton-rusev-portfolio.web.app",
    repoUrl: "https://github.com/AntonRusev/Portfolio",
  },
  {
    title: 'Apparel Averagestore',
    description: "Only real fans of crocs will get it...",
    imageUrlMobile: "https://i.ibb.co/GVDcZGw/aa-mobile.jpg",
    imageUrlBig: "https://i.ibb.co/G2MphJG/aa-large.jpg",
    siteUrl: "https://ar-product-listing-page.web.app",
    repoUrl: "https://github.com/AntonRusev/Product-Listing-Page",
  },
] as const;

export const skillsData = [
  "JavaScript",
  "React",
  "Tailwind CSS",
  "RTK Query",
  "Git",
  "Redux Toolkit",
  "Responsive Design",
  "Next.js",
  "Docker",
  "TypeScript",
  "ASP.NET",
  "SignalR",
  "PostgreSQL",
  "SASS",
  "Framer Motion",
] as const;
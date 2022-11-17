export enum URLPaths {
  ABOUT = "/",
  CONTACT = "/contact",
  CV = "/cv",
  PROJECTS = "/projects",
  SKILLS = "/skills",
  EXPERIENCE = "/experience",
  EDUCATION = "/education",
  LINKEDIN = "https://www.linkedin.com/in/sumit-singh-81a73817a/",
  STACKOVERFLOW = "https://stackoverflow.com/users/11687831/sumit-kumar-singh",
  GITHUB = "https://github.com/sumitsingh4411",
}

export const SIDEBAR_LINKS = [
  {
    name: "About",
    path: URLPaths.ABOUT,
    url: "#about",
  },
  {
    name: "Experience",
    path: URLPaths.EXPERIENCE,
    url: "#experience",
  },
  {
    name: "Skills",
    path: URLPaths.SKILLS,
    url: "#skills",
  },
  {
    name: "Projects",
    path: URLPaths.PROJECTS,
    url: "#projects",
  },
  {
    name: "Contact",
    path: URLPaths.CONTACT,
    url: "#contact",
  },
  {
    name: "CV",
    path: URLPaths.CV,
    url: "",
  },
];

export const SKILLS = [
  {
    name: "HTML",
    level: 90,
  },
  {
    name: "CSS",
    level: 90,
  },
  {
    name: "JavaScript",
    level: 80,
  },
  {
    name: "React",
    level: 80,
  },
  {
    name: "TypeScript",
    level: 70,
  },
  {
    name: "Redux",
    level: 70,
  },
  {
    name: "Next.js",
    level: 70,
  },
];

export const SKILLS_LIST: string[] = [
  "React",
  "GraphQL",
  "TypeScript",
  "Prisma",
  "Apollo",
  "NodeJS",
  "Express",
  "JWT",
  "Figma",
  "Git",
  "Netlify",
  "Heroku",
  "Angular",
  "SSR",
  "_Lodash",
  "Python",
  "Redux",
  "REST",
  "Cloudinary",
  "Firebase",
  "SCSS",
  "TDD",
  "Ionic",
];

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
  "TypeScript",
  "JWT",
  "Figma",
  "Git",
  "Netlify",
  "Heroku",
  "SSR",
  "_Lodash",
  "Redux",
  "REST",
  "Firebase",
  "SCSS",
  "CSS",
  "HTML",
  "JavaScript",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Material UI",
  "Bootstrap",
  "Three.js",
];

export const enum DEVICE_TYPE {
  MOBILE = 768,
  TABLET = 1024,
  LAPTOP = 1440,
}

export const GITHUB_URL =
  "https://api.github.com/users/sumitsingh4411/repos?sort=created&per_page=100";

export const GITHUB_REPO_URL =
  "https://github.com/sumitsingh4411?tab=repositories";

export const CONSTANT_URL = {
  GITHUB: "https://github.com/sumitsingh4411",
  MAPUP: "https://mapup.ai/",
  BYTELEARN: "https://www.bytelearn.com/",
  LINKEDIN: "https://www.linkedin.com/in/sumit-singh-81a73817a/",
};

export const ABOUT_SKILLS_1 = ["React", "Next.js", "TypeScript", "Redux"];
export const ABOUT_SKILLS_2 = ["JavaScript", "HTML", "CSS", "Sass"];

import aboutIcon from ".././assets/about.svg";
import experienceIcon from ".././assets/experience.svg";
import skillsIcon from ".././assets/skills.svg";
import contactIcon from ".././assets/contact.svg";
import cvIcon from ".././assets/cv.svg";
import projectIcon from ".././assets/project.svg";

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
    icon: aboutIcon,
  },
  {
    name: "Experience",
    path: URLPaths.EXPERIENCE,
    icon: experienceIcon,
  },
  {
    name: "Skills",
    path: URLPaths.SKILLS,
    icon: skillsIcon,
  },
  {
    name: "Projects",
    path: URLPaths.PROJECTS,
    icon: projectIcon,
  },
  {
    name: "CV",
    path: URLPaths.CV,
    icon: cvIcon,
  },
  {
    name: "Contact",
    path: URLPaths.CONTACT,
    icon: contactIcon,
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

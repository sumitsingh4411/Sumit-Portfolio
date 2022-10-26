export enum URLPaths {
  ABOUT = "/",
  CONTACT = "/contact",
  CV = "/cv",
  PROJECTS = "/projects",
  SKILLS = "/skills",
  EXPERIENCE = "/experience",
  EDUCATION = "/education",
}

export const SIDEBAR_LINKS = [
  {
    name: "About",
    path: URLPaths.ABOUT,
  },
  {
    name: "Experience",
    path: URLPaths.EXPERIENCE,
  },
  {
    name: "Skills",
    path: URLPaths.SKILLS,
  },
  {
    name: "Education",
    path: URLPaths.EDUCATION,
  },
  {
    name: "Projects",
    path: URLPaths.PROJECTS,
  },
  {
    name: "CV",
    path: URLPaths.CV,
  },
  {
    name: "Contact",
    path: URLPaths.CONTACT,
  },
];

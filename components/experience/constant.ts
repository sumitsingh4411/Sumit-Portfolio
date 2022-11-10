import { Interface } from "readline";

export const EXPERIENCE = [
  {
    name: "Frontend Developer",
    company: "ByteLearn",
    company_url: "https://bytelearn.com",
    _date: "November 2020 – Present",
    description: [
      "Developing a web application for a client in the healthcare industry using React, Redux, TypeScript, and Next.js.",
      "Developing a web application for a client in the healthcare industry using React, Redux, TypeScript, and Next.js.",
      "Developing a web application for a client in the healthcare industry using React, Redux, TypeScript, and Next.js.",
    ],
    technologies: [
      "React",
      "Redux",
      "TypeScript",
      "Next.js",
      "React",
      "Redux",
      "TypeScript",
    ],
  },
  {
    name: "Frontend Developer",
    company: "Softrams",
    company_url: "https://softrams.com",
    _date: "November 2020 – Present",
    description: [
      "Developing a web application for a client in the healthcare industry using React, Redux, TypeScript, and Next.js.",
      "Developing a web application for a client in the healthcare industry using React, Redux, TypeScript, and Next.js.",
      "Developing a web application for a client in the healthcare industry using React, Redux, TypeScript, and Next.js.",
    ],
    technologies: [
      "React",
      "Redux",
      "TypeScript",
      "Next.js",
      "React",
      "Redux",
      "TypeScript",
    ],
  },
  {
    name: "Frontend Developer",
    company: "Softrams",
    company_url: "https://softrams.com",
    _date: "November 2020 – Present",
    description: [
      "Developing a web application for a client in the healthcare industry using React, Redux, TypeScript, and Next.js.",
      "Developing a web application for a client in the healthcare industry using React, Redux, TypeScript, and Next.js.",
      "Developing a web application for a client in the healthcare industry using React, Redux, TypeScript, and Next.js.",
    ],
    technologies: [
      "React",
      "Redux",
      "TypeScript",
      "Next.js",
      "React",
      "Redux",
      "TypeScript",
    ],
  },
];

export interface IExperience {
  name: string;
  company_url: string;
  company: string;
  _date: string;
  description: string[];
  technologies: string[];
}

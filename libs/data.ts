import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import projectImage1 from "@/public/project1.png";
import projectImage2 from "@/public/project2.png";
import projectImage3 from "@/public/project3.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Senior Frontend Developer",
    location: "Shenzhen, CN",
    description:
      "Developed adult online education SaaS platform, facilitating course management, learning tracking, and analytics for teachers and students",
    icon: React.createElement(CgWorkAlt),
    date: "2018/11 - 2023/07",
  },
  {
    title: "Junior Frontend Developer",
    location: "Shenzhen, CN",
    description:
      "Contributed to a unified management solution for hotels and lodgings, involving web and mini-program development",
    icon: React.createElement(CgWorkAlt),
    date: "2018/03 - 2018/11",
  },
  {
    title: "Overseas Sales Representative",
    location: "Dongguang, CN",
    description: "To be completed",
    icon: React.createElement(CgWorkAlt),
    date: "2014/05 ~ 2017/12",
  },
] as const;

export const projectsData = [
  {
    title: "Conference Room Reservations",
    description: "Developed a system for managing conference room reservations",
    tags: ["Nest", "React", "MySQL", "TypeORM", "Docker"],
    imageUrl: projectImage1,
  },
  {
    title: "Portject Showcase",
    description:
      "Created a personal portfolio management system with user registration, artwork display, and user settings",
    tags: ["Nest", "PostgreSQL", "Prisma", "Docker"],
    imageUrl: projectImage2,
  },
  {
    title: "Portfolio",
    description:
      "Designed a personal website showcasing information, experience, and project previews",
    tags: ["Nest", "React"],
    imageUrl: projectImage3,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Vue",
  "React",
  "Next",
  "Node",
  "Nest",
  "Git",
  "Tailwind",
  "TypeORM",
  "Prisma",
  "MySQL",
  "PostgreSQL",
] as const;

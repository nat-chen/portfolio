import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
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
    title: "Full-Stack Developer",
    location: "Shanghai, CN",
    description: "To be completed",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
  {
    title: "Front-End Developer",
    location: "Shenzhen, CN",
    description: "To be completed",
    icon: React.createElement(FaReact),
    date: "2018 - 2022",
  },
  {
    title: "Overseas Trading Sales",
    location: "Dongguang, CN",
    description: "To be completed",
    icon: React.createElement(LuGraduationCap),
    date: "2014 ~ 2018",
  },
] as const;

export const projectsData = [
  {
    title: "Meeting Booking",
    description: "To be completed",
    tags: ["Nest", "React", "MySQL", "TypeORM", "Docker"],
    imageUrl: projectImage1,
  },
  {
    title: "Medium",
    description: "To be completed",
    tags: ["Nest", "PostgreSQL", "Prisma", "Docker"],
    imageUrl: projectImage2,
  },
  {
    title: "Low Code",
    description: "To be completed",
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

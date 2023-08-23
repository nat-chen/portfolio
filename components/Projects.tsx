"use client";

import { useSectionInView } from "@/libs/hooks";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/libs/data";
import React from "react";
import Project from "./Project";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

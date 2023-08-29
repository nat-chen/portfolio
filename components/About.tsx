"use client";

import { useSectionInView } from "@/libs/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My core stack includes{" "}
        <span className="font-bold underline">
          React, Vue, Next, Node, Nest
        </span>{" "}
        for implementing highly scalable, high-performance projects from concept
        to deployment. I am always eager to learn new technologies, currently
        focusing on.<span className="italic">Java</span>
      </p>

      <p>
        When I&#39;m not programming, I enjoy engaging in various other hobbies.
        I have a passion for cooking delicious meals and watching movies.
        Additionally, I find relaxation through running.
      </p>
    </motion.section>
  );
}

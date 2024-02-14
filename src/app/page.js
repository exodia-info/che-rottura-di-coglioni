"use client";

import React from "react";
import styles from "./page.module.scss";
import { useEffect, useRef } from "react";
import Intro from "./components/Intro";
import Description from "./components/Description";
import Projects from "./components/Projects";
import GSAP from "./components/GSAP";
import FramerMotion from "./components/FramerMotion";
import Gooey from "./components/Gooey";
import Dentro from "./components/Dentro";

const components = [
  Intro,
  Description,
  Projects,
  GSAP,
  FramerMotion,
  Gooey,
  Dentro,
];

export default function Home() {
  const activeRef = useRef(null);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const scroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className={styles.main}>
      <Intro />
      <Description />
      <Projects />
      <Dentro />
      <GSAP />
      <FramerMotion />
      <Gooey />
    </main>
  );
}

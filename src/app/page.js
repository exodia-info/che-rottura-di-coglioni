"use client";

import React from "react";
import styles from "./page.module.scss";
import { useEffect, useRef } from "react";
import Intro from "./components/Intro";
import Description from "./components/Description";
import Projects from "./components/Projects";
import FramerMotion from "./components/FramerMotion";
import Gooey from "./components/Gooey";
import Dentro from "./components/Dentro";
import Parallax from "./components/Parallax";
import Parallax2 from "./components/Parallax2";
import Scale from "./components/Scale";
import Header from "./components/Header";
import Switch from "./components/Switch";
import i18n from "./i18n";

export default function Home() {
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
      <Header />
      <Projects />
      <Dentro />
      <Scale />
      <FramerMotion />
      <Parallax />
      <Parallax2 />
    </main>
  );
}

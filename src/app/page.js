"use client";

import styles from "./page.module.scss";
import { useEffect } from "react";
import Intro from "./components/Intro";
import Description from "./components/Description";
import Projects from "./components/Projects";

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
      <Projects />
    </main>
  );
}

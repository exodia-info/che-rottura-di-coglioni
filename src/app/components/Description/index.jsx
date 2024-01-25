import styles from "./style.module.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export default function Description() {
  const phrases = ["vormgeven", "ontwerpen", "creëren", "ontwikkelen"];

  return (
    <section className={styles.section}>
      <div className={styles.description}>
        {phrases.map((phrase, index) => {
          return <AnimatedText key={index}>{phrase}</AnimatedText>;
        })}
      </div>
    </section>
  );
}

function AnimatedText({ children }) {
  const text = useRef(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      text.current,
      {
        scrollTrigger: {
          trigger: text.current,
          start: "0 bottom",
          end: "bottom+=400px bottom",
          scrub: true,
        },
        left: "-200px",
        opacity: 0,
        ease: "power3.out",
      },
      {
        duration: 1,
        scrollTrigger: {
          trigger: text.current,
          start: "0 bottom",
          end: "bottom+=400px bottom",
          scrub: true,
        },
        left: "0px",
        opacity: 1,
        ease: "power3.out",
      }
    );
  }, []);
  return <p ref={text}>{children}</p>;
}

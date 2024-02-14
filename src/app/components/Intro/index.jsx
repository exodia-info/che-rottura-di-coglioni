import styles from "./style.module.scss";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export default function Intro() {
  const backgroundImage = useRef(null);
  const introImage = useRef(null);
  const introTxt = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top",
        end: "+=500px",
        scrub: true,
      },
    });

    tl.fromTo(
      backgroundImage.current,
      {
        clipPath: "inset(15%)",
        filter: "brightness(0.6)",
      },
      {
        duration: 1,
        clipPath: "inset(0%)",
        filter: "brightness(1)",
      }
    )
      .to(
        document.body,
        {
          duration: 0.5,
        },
        0
      )
      .to(
        introImage.current,
        { y: "-50%", scale: 3.5, clipPath: "inset(50%)", duration: 1 },
        0
      )
      .to(introTxt.current, { opacity: 0, duration: 1 }, 0);
  }, []);
  return (
    <section className={styles.intro}>
      <div ref={backgroundImage} className={styles.backgroundImage}>
        <Image
          src="/images/landing.jpg"
          alt="Picture of the author"
          fill="true"
        />
      </div>

      <div className={styles.introContainer}>
        <div
          ref={introImage}
          data-scroll
          data-scroll-speed="0.3"
          className={styles.introImage}
        >
          <Image src="/images/logus.png" alt="logus" fill="true" />
        </div>
        <h1 ref={introTxt} data-scroll data-scroll-speed="0.7">
          Wij ii een creatief bureau
        </h1>
      </div>
    </section>
  );
}

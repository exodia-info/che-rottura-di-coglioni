import styles from "./style.module.scss";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import italy from "../../../../public/images/italy.png";
import eng from "../../../../public/images/uk.png";
import Switch from "../Switch";
import landing from "../../../../public/images/landing.jpg";
import logus from "../../../../public/images/logus.png";

export default function Intro() {
  const { t, i18n } = useTranslation();
  const languages = [
    { code: "it", name: "Italiano", src: italy },
    { code: "en", name: "English", src: eng },
  ];

  const backgroundImage = useRef(null);
  const introImage = useRef(null);
  const introTxt = useRef(null);
  const lang = useRef(null);

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
      .to(introTxt.current, { opacity: 0, duration: 1 }, 0)
      .to(lang.current, { opacity: 0, duration: 1 }, 0);
  }, []);
  return (
    <section className={styles.intro}>
      <div ref={backgroundImage} className={styles.backgroundImage}>
        <Image
          src={landing}
          alt="Picture of the house"
          fill="true"
          placeholder="empty"
        />
      </div>

      <div className={styles.introContainer}>
        <div
          ref={introImage}
          data-scroll
          data-scroll-speed="0.3"
          className={styles.introImage}
        >
          <Image src={logus} alt="logus" fill="true" placeholder="empty" />
        </div>
        <h1 ref={introTxt} data-scroll data-scroll-speed="0.7">
          {t("welcome")}
        </h1>
        <div
          ref={lang}
          data-scroll
          data-scroll-speed="0.7"
          className={styles.languages}
        >
          <Switch />
        </div>
      </div>
    </section>
  );
}

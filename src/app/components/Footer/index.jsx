"use client";

import styles from "./page.module.scss";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import next from "../../../../public/images/next.png";
import react from "../../../../public/images/react.png";
import sass from "../../../../public/images/sass.png";
import vercel from "../../../../public/images/vercel.png";
import github from "../../../../public/images/github.png";
import framer from "../../../../public/images/framer-motion.png";
import gsap from "../../../../public/images/gsao.png";
import { useTranslation } from "react-i18next";

const Stack = () => {
  return (
    <div className={styles.stack}>
      Made with:
      <div className={styles.carousel}>
        <div className={styles.icon}>
          <Image
            fill={true}
            objectFit="contain"
            alt={"image"}
            src={next}
            placeholder="blur"
          />
        </div>
        <div className={styles.icon}>
          <Image
            fill={true}
            objectFit="contain"
            alt={"image"}
            src={react}
            placeholder="blur"
          />
        </div>
        <div className={styles.icon}>
          <Image
            fill={true}
            objectFit="contain"
            alt={"image"}
            src={sass}
            placeholder="blur"
          />
        </div>
        <div className={styles.icon}>
          <Image
            fill={true}
            objectFit="contain"
            alt={"image"}
            src={framer}
            placeholder="blur"
          />
        </div>
        <div className={styles.icon}>
          <Image
            fill={true}
            objectFit="contain"
            alt={"image"}
            src={gsap}
            placeholder="blur"
          />
        </div>
        <div className={styles.icon}>
          <Image
            fill={true}
            objectFit="contain"
            alt={"image"}
            src={vercel}
            placeholder="blur"
          />
        </div>
        <div className={styles.icon}>
          <Image
            fill={true}
            objectFit="contain"
            alt={"image"}
            src={github}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  const container = useRef(null);
  const { t, i18n } = useTranslation();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <motion.div id="footer" ref={container} className={styles.contact}>
      <Stack />

      <div className={styles.body}>
        <div className={styles.title}>
          <span
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <h2>{t("contattaci")}</h2>
            <div className={styles.imageContainer}>
              <Image fill={true} alt={"image"} src={`/images/logus.png`} />
            </div>
          </span>

          {/* <motion.svg
              style={{ rotate, scale: 3 }}
              width={"9"}
              height={"9"}
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
                fill="white"
              />
            </motion.svg> */}
        </div>

        <div className="flex">
          <div className={styles.nav}>
            <div className={styles.contatto}>
              <h1>Marcella & Danilo</h1>

              <p>bdanilo@tiscali.it</p>
              <p>+39 335 653 9989</p>
              <p>+39 344 296 2107</p>
            </div>
            <div className={styles.contatto}>
              <h1>Developer</h1>

              <p>bianchinmauro2.0@gmail.com</p>
              <p>+39 338 747 2708</p>
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <div>
            <span>
              <h3>Version</h3>
              <p>2023/2024 © exodia.info</p>
            </span>
          </div>
          <div>
            <span>
              <h3>Designer & Developer</h3>

              <p>Mauro Bianchin</p>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Index;

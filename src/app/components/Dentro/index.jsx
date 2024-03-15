"use client";

import { useState, useLayoutEffect, useRef, useContext } from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScroll, useTransform, motion } from "framer-motion";
import Header from "../Header";
import Cornice from "../../../../public/images/suing.png";

const projects = [
  {
    title: "Zona camino",
    src: "dentro1.jpg",
  },
  {
    title: "Living room",
    src: "dentro2.jpg",
  },
  {
    title: "Zona televisione",
    src: "dentro3.jpg",
  },
  {
    title: "Camera matrimoniale",
    src: "dentro4.jpg",
  },
];

export default function Index() {
  const [selectedProject, setSelectedProject] = useState(0);
  const container = useRef(null);
  const imageContainer = useRef(null);
  const elleContainer = useRef(null);
  const headerRef1 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const elle = useTransform(scrollYProgress, [0, 1], [+400, +50]);
  const height = useTransform(scrollYProgress, [0, 1], [50, 0]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      ScrollTrigger.create({
        trigger: imageContainer.current,
        pin: true,
        start: "top-=140 top",
        end: "bottom+=180 top",
        scrub: true,
      });
    });

    gsap.fromTo(
      document.body,
      { backgroundColor: "rgb(206, 237, 255)" },
      {
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "top+=140 top",
          scrub: true,
        },
        backgroundColor: "rgb(255, 251, 219)",
      }
    );

    gsap.to(headerRef1.current, {
      opacity: 1, // Animate to fully visible
      ease: "power3.inOut", // Adjust easing as needed
      scrollTrigger: {
        trigger: container.current, // Element triggering the animation
        start: "top top", // Animation   starts when element hits top center
        end: "top+=140 top", // Animation ends when element is 140px below top center
        scrub: true, // Link animation progress to scroll position
        markers: false, // Display visual markers for debugging
      },
    });

    gsap.to(headerRef1.current, {
      opacity: 0, // Animate to fully visible

      ease: "power3.inOut", // Adjust easing as needed
      scrollTrigger: {
        trigger: container.current, // Element triggering the animation
        start: "bottom-=140 center", // Animation starts when element hits top center
        end: "bottom center", // Animation ends when element is 140px below top center
        scrub: true, // Link animation progress to scroll position
        markers: false, // Display visual markers for debugging
      },
    });

    return () => {
      context.revert();
    };
  }, [headerRef1]);

  return (
    <>
      <Header
        color={
          "linear-gradient(130deg, rgba(183, 50, 50, 0.1) 0%, rgba(183, 50, 50, 0.4) 100%)"
        }
        border={"2px solid #8C3E1C"}
        text={"exodia.info"}
        ref={headerRef1}
        style={{ fontSize: "4rem" }}
      />
      <motion.div ref={container} className={styles.projects}>
        <div className={styles.projectDescription}>
          <div ref={imageContainer} className={styles.imageContainer}>
            <div className={styles.content}>
              <Image
                src={`/images/${projects[selectedProject].src}`}
                fill
                alt="immagini 1"
                priority={true}
              />
            </div>
          </div>

          <div className={styles.cassaScrotaleContainer}>
            <div className={styles.column}>
              <h1>
                {`Spaziosi e accoglienti interni in un'atmosfera mite e confortevole `}
              </h1>
            </div>
            <div className={styles.column}>
              <p>
                Tradizionali interni con arredi in legno che ancora raccontano
                la storia di una casa, ma integrati con comodità ed elementi
                moderni. In un ampio spazio interno potrete rilassarvi
                scaldandovi vicino al camino oppure guardando la televisione.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.sfigati}>
          <motion.div
            style={{ top: elle }}
            ref={elleContainer}
            className={styles.projectList}
          >
            {projects.map((project, index) => {
              return (
                <div
                  key={index}
                  onMouseOver={() => {
                    setSelectedProject(index);
                  }}
                  className={styles.projectEl}
                >
                  <h2>{project.title}</h2>
                </div>
              );
            })}
          </motion.div>
          <div className={styles.imageContainer2}>
            <div className={styles.content}>
              <Image
                src={Cornice}
                fill
                alt="corncice 1"
                priority={true}
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </motion.div>
      <div style={{ height: "50vh" }}></div>
      <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </>
  );
}

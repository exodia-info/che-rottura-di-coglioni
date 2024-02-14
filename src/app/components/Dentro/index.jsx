import { useState, useLayoutEffect, useRef } from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScroll, useTransform, motion } from "framer-motion";

const projects = [
  {
    title: "Salar de Atacama",
    src: "dentro1.jpg",
  },
  {
    title: "Valle de la luna",
    src: "dentro2.jpg",
  },
  {
    title: "Miscanti Lake",
    src: "dentro3.jpg",
  },
  {
    title: "Miniques Lagoons",
    src: "dentro4.jpg",
  },
];

export default function Index() {
  const [selectedProject, setSelectedProject] = useState(0);
  const container = useRef(null);
  const imageContainer = useRef(null);
  const elleContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const elle = useTransform(scrollYProgress, [0, 1], [+600, +200]);

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

    return () => {
      context.revert();
    };
  }, []);

  return (
    <motion.div ref={container} className={styles.projects}>
      <div className={styles.projectDescription}>
        <div ref={imageContainer} className={styles.imageContainer}>
          <div className={styles.content}>
            <Image
              src={`/images/${projects[selectedProject].src}`}
              fill={true}
              alt="project image"
              priority={true}
            />
          </div>
        </div>

        <div className={styles.cassaScrotaleContainer}>
          <div className={styles.column}>
            <h1>
              The flora is characterized by the presence of high elevation
              wetland, si ok un po meno
            </h1>
          </div>
          <div className={styles.column}>
            <p>
              Some, like the southern viscacha, vicuña and Darwins rhea, are
              classified as endangered species. Others, such as Andean goose,
              horned coot, Andean gull, puna tinamou and the three flamingo
              species inhabiting in Chile (Andean flamingo, Chilean flamingo,
              and Jamess flamingo) are considered vulnerable.
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
              src={`/images/cornice1.png`}
              fill={true}
              alt="project image"
              priority={true}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

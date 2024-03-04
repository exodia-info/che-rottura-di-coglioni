import { useState, useLayoutEffect, useRef } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScroll, useTransform, motion } from "framer-motion";
import Header from "../Header";

const projects = [
  {
    title: "Salar de Atacama",
    src: "casa2.jpg",
  },
  {
    title: "Valle de la luna",
    src: "casa1.jpg",
  },
  {
    title: "Miscanti Lake",
    src: "casa3.jpg",
  },
  {
    title: "Miniques Lagoons",
    src: "casa4.jpg",
  },
];

export default function Index() {
  const [selectedProject, setSelectedProject] = useState(0);
  const container = useRef(null);
  const imageContainer = useRef(null);
  const elleContainer = useRef(null);
  const headerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const elle = useTransform(scrollYProgress, [0, 1], [+400, +50]);

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
      ScrollTrigger.create({
        trigger: container.current,
        start: "top top",
        end: "top+=100 top",
        scrub: true,
      });
    });

    gsap.to(headerRef.current, {
      opacity: 1, // Animate to fully visible
      duration: 2, // Adjust duration as needed
      ease: "power3.inOut", // Adjust easing as needed

      scrollTrigger: {
        trigger: container.current, // Element triggering the animation
        start: "top top", // Animation starts when element hits top center
        end: "top+=140 top", // Animation ends when element is 140px below top center
        scrub: true, // Link animation progress to scroll position
        markers: false, // Display visual markers for debugging
      },
    });
    gsap.to(headerRef.current, {
      opacity: 0, // Animate to fully visible
      duration: 2, // Adjust duration as needed

      ease: "power3.inOut", // Adjust easing as needed
      scrollTrigger: {
        trigger: container.current, // Element triggering the animation
        start: "bottom bottom-140", // Animation starts when element hits top center
        end: "top bottom", // Animation ends when element is 140px below top center
        scrub: true, // Link animation progress to scroll position
        markers: false, // Display visual markers for debugging
      },
    });

    console.log("headerRef", headerRef.current);

    return () => {
      context.revert();
    };
  }, [headerRef]);

  return (
    <>
      <Header
        color={
          "linear-gradient(130deg, rgba(233, 232, 215, 0.5) 0%, rgba(233, 232, 215, 0.8) 100%)"
        }
        border={"2px solid #7B523F"}
        ref={headerRef}
      />
      <div ref={container} className={styles.projects}>
        <div className={styles.projectDescription}>
          {" "}
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
        <div className={styles.imageContainer2}>
          <div className={styles.content}>
            <Image
              src={`/images/suing.png`}
              fill={true}
              alt="project image"
              priority={true}
            />
          </div>
        </div>
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
      </div>
    </>
  );
}

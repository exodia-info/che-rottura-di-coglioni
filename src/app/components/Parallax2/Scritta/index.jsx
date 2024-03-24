"use client";

import React, { useRef, useEffect } from "react";
import { useScroll } from "framer-motion";
import { VscArrowRight } from "react-icons/vsc";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t, i18n } = useTranslation();

  const cose = [t("bagni", { returnObjects: true }), t("lettini"), t("cucina")];

  const target = useRef(null);
  const coseRef = useRef([]);
  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => {
      coseRef.current.forEach((ref, i) => {
        ref.setAttribute("startOffset", -25 + i * 40 + e * 40 + "%");
      });
    });
  }, []);

  return (
    <>
      <div>
        <svg className="w-full" viewBox="0 0 250 10">
          <path
            id="line"
            d="M 0 8 H 250"
            fill="none"
            stroke="black"
            strokeWidth="0"
          />
          <text className=" text-orange-500 text-[4px]">
            {cose.map((_, i) => (
              <textPath
                key={i}
                ref={(ref) => (coseRef.current[i] = ref)}
                href="#line"
                startOffset={15 + i * 40 + "%"}
                className=" font-[monarcha] text-[#121212]"
              >
                →{cose[i]}
              </textPath>
            ))}
          </text>
        </svg>
      </div>
      <div className="absolute h-[100vh]" ref={target}></div>
    </>
  );
};

export default Index;

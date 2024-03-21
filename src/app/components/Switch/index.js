import React, { useState } from "react";
import styles from "./switch.module.scss";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t, i18n } = useTranslation();
  const [isChecked, setIsChecked] = useState(true);

  const handleSwitch = () => {
    setIsChecked(!isChecked);
    isChecked ? i18n.changeLanguage("en") : i18n.changeLanguage("it");
  };
  return (
    <div
      className={styles.flagSwitch}
      data-first-lang="EN"
      data-second-lang="IT"
    >
      <input
        type="checkbox"
        onChange={handleSwitch}
        id="check1"
        defaultChecked=""
      />
      <label htmlFor="check1" />
    </div>
  );
};

export default Index;

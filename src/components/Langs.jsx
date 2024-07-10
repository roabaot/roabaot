import React from "react";
import LangCard from "./LangCard";
import { langs } from "../constants";
import styles, { layout } from "../style";

const Langs = () => {
  return (
    <section
      id="langs"
      dir="rtl"
      className={`${styles.padding} ${styles.flexCenter} flex-col relative`}
    >
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>My Skills</h1>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full feedback-container relative z-[1]">
        {langs.map((card) => (
          <LangCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Langs;

import React from "react";
import Image from "next/image";
import styles from "./AboutText.module.css"; // Import the CSS module

const AboutText = () => {
  return (
    <section className={styles.aboutMe}>
      
      <div className={styles.aboutright}>
        <Image
          src="/images/developer2.png"
          alt="contact"
          width={300}
          height={300}
        />
        <h1>
          Hello! My name is Ayesha. I am a passionate web developer. I have
          built a portfolio website using Next.js and basic CSS. It showcases my
          skills in web development and design. I am excited to share it with
          you.
        </h1>
      </div>
    </section>
  );
};

export default AboutText;

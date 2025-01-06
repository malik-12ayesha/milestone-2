import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './ContactText.module.css'; // 

const ContactText = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Contact Me</h1>
        <Image src="/images/developer2.png" alt="contact" width={300} height={300} />
      </div>
      <div className={styles.links}>
        <Link href="malikayeshaalikhan777@gmail.com" className={styles.link}>
          Email
        </Link>
        <Link href="" className={styles.link}>
          LinkedIn
        </Link>
        <Link href="https://github.com/malik-12ayesha" className={styles.link}>
          GitHub
        </Link>
      </div>
    </div>
  );
};

export default ContactText;

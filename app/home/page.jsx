import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <section className={styles.homeContainer}>
        <section className={styles.homePictures}>
          <Image
            src="/home.jpg"
            layout="responsive"
            width={1500}
            height={1000}
            className={styles.picture}
            alt="prudential"
          />
        </section>
        <section className={styles.homeInfo}>
        
        </section>
    </section>
    <a href ="/login">
    <button className={styles.loginButton} type="button">
      login
    </button>
    </a>
    </>
  );
}

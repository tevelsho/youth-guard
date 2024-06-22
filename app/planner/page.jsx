import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function Planner() {
    return (
        <section className={styles.plannerContainer}>
            <section className={styles.game}>
                <div className={styles.rectangle}></div>
            </section>

            <section className={styles.infoContainer}>
                <div className={styles.infoBox}>
                    <Image src="/home.jpg" alt="Info 1" className={styles.infoImage} width={300} height={400} />
                    <div className={styles.infoText}>
                        <h3>Test</h3>
                        <p>Some info</p>
                    </div>
                </div>
                <div className={styles.infoBox}>
                    <Image src="/path/to/image2.png" alt="Info 2" className={styles.infoImage} width={300} height={200} />
                    <div className={styles.infoText}>
                        <h3>Test</h3>
                        <p>Some info.</p>
                    </div>
                </div>
                <div className={styles.infoBox}>
                    <Image src="/path/to/image3.png" alt="Info 3" className={styles.infoImage} width={300} height={200} />
                    <div className={styles.infoText}>
                        <h3>PRUPanel Connect</h3>
                        <p>A suite of value-added services to make your healthcare journey simpler.</p>
                    </div>
                </div>
            </section>

            <section className={styles.insuranceCalculator}>
            </section>
        </section>
    );
}


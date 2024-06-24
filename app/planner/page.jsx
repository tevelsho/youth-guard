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
                    <div className={styles.infoImageContainer}>
                        <Image src="/policy.png" alt="policy" layout="fill" className={styles.infoImage} />
                    </div>
                    <div className={styles.infoText}>
                        <h3>Understanding Insurance Policies</h3>
                        <p>Learn the basics of insurance policies to make informed decisions for your future.</p>
                    </div>
                </div>
                <div className={styles.infoBox}>
                    <div className={styles.infoImageContainer}>
                        <Image src="/reco.jpg" alt="reco" layout="fill" className={styles.infoImage} />
                    </div>
                    <div className={styles.infoText}>
                        <h3>Best Insurance Stocks to Buy</h3>
                        <p>Explore the top insurance stocks to invest in and maximize your financial growth.</p>
                    </div>
                </div>
                <div className={styles.infoBox}>
                    <div className={styles.infoImageContainer}>
                        <Image src="/youthInsurance.jpg" alt="youth insurance" layout="fill" className={styles.infoImage} />
                    </div>
                    <div className={styles.infoText}>
                        <h3>PRUPanel Connect</h3>
                        <p>A suite of value-added services to make your healthcare journey simpler.</p>
                    </div>
                </div>
                <div className={styles.infoBox}>
                    <div className={styles.infoImageContainer}>
                        <Image src="/howToInsurance.jpg" alt="how to insurance" layout="fill" className={styles.infoImage} />
                    </div>
                    <div className={styles.infoText}>
                        <h3>Comprehensive Health Insurance Guide</h3>
                        <p>An in-depth guide to understanding health insurance and choosing the right plan for you.</p>
                    </div>
                </div>
            </section>

            <section className={styles.game}>
                <div className={styles.rectangle}></div>
            </section>
        </section>
    );
}
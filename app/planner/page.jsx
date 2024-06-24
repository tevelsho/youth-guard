"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Planner() {
  const [age, setAge] = useState("");
  const [coverage, setCoverage] = useState("");
  const [duration, setDuration] = useState("");
  const [smokingStatus, setSmokingStatus] = useState("");
  const [healthStatus, setHealthStatus] = useState("");
  const [premium, setPremium] = useState(null);

  const calculatePremium = () => {
    if (age && coverage && duration && smokingStatus && healthStatus) {
      const basePremium = 100; // Example base premium
      const ageFactor = age * 1.5;
      const coverageFactor = coverage / 1000;
      const durationFactor = duration * 0.1;
      const smokingFactor = smokingStatus === "smoker" ? 200 : 0;
      const healthFactor =
        healthStatus === "poor" ? 150 : healthStatus === "average" ? 100 : 50;

      const estimatedPremium =
        basePremium +
        ageFactor +
        coverageFactor +
        durationFactor +
        smokingFactor +
        healthFactor;

      setPremium(estimatedPremium.toFixed(2));
    } else {
      setPremium(null);
    }
  };

  return (
    <section className={styles.plannerContainer}>
      <section className={styles.game}>
        <div className={styles.rectangle}></div>
      </section>

            <section className={styles.infoContainer}>
              <Link href="/planner/healthtest" className={styles.infoBox}>
                <div>
                    <div className={styles.infoImageContainer}>
                        <Image src="/policy.png" alt="policy" layout="fill" className={styles.infoImage} />
                    </div>
                    <div className={styles.infoText}>
                        <h3>Insurance Personality Test</h3>
                        <p>Some info</p>
                    </div>
                </div>
              </Link>
              <Link href="/planner/insurancetest" className={styles.infoBox}>
                <div>
                    <div className={styles.infoImageContainer}>
                        <Image src="/reco.jpg" alt="reco" layout="fill" className={styles.infoImage} />
                    </div>
                    <div className={styles.infoText}>
                        <h3>Health Insurance Personality Test</h3>
                        <p>Some info.</p>
                    </div>
                </div>
              </Link>
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
                        <h3>PRUPanel Connect</h3>
                        <p>A suite of value-added services to make your healthcare journey simpler.</p>
                    </div>
                </div>
            </section>

      <section className={styles.calculatorContainer}>
        <h2 className={styles.calculatorTitle}>Insurance Premium Calculator</h2>
        <div className={styles.calculatorForm}>
          <input
            type="number"
            placeholder="Enter your age"
            className={styles.calculatorInput}
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter desired coverage amount"
            className={styles.calculatorInput}
            value={coverage}
            onChange={(e) => setCoverage(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter coverage duration (years)"
            className={styles.calculatorInput}
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          <select
            className={styles.calculatorSelect}
            value={smokingStatus}
            onChange={(e) => setSmokingStatus(e.target.value)}
          >
            <option value="">Select smoking status</option>
            <option value="smoker">Smoker</option>
            <option value="non-smoker">Non-Smoker</option>
          </select>
          <select
            className={styles.calculatorSelect}
            value={healthStatus}
            onChange={(e) => setHealthStatus(e.target.value)}
          >
            <option value="">Select health status</option>
            <option value="poor">Poor</option>
            <option value="average">Average</option>
            <option value="good">Good</option>
          </select>
          <button
            onClick={calculatePremium}
            className={styles.calculatorButton}
          >
            Calculate Premium
          </button>
        </div>
        {premium && (
          <div className={styles.calculatorResult}>
            Estimated Monthly Premium: ${premium}
          </div>
        )}
      </section>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Planner() {
  const [age, setAge] = useState("");
  const [coverage, setCoverage] = useState("");
  const [duration, setDuration] = useState("");
  const [smokingStatus, setSmokingStatus] = useState("");
  const [healthStatus, setHealthStatus] = useState("");
  const [insuranceType, setInsuranceType] = useState("");
  const [insurancePlan, setInsurancePlan] = useState("");
  const [premium, setPremium] = useState(null);

  const calculatePremium = () => {
    if (
      age &&
      coverage &&
      duration &&
      smokingStatus &&
      healthStatus &&
      insuranceType &&
      insurancePlan
    ) {
      const basePremium = 100;
      const ageFactor = age * 1.5;
      const coverageFactor = coverage / 1000;
      const durationFactor = duration * 0.1;
      const smokingFactor = smokingStatus === "smoker" ? 200 : 0;
      const healthFactor =
        healthStatus === "poor"
          ? 150
          : healthStatus === "average"
          ? 100
          : 50;

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
              <Image
                src="/personality.png"
                alt="policy"
                layout="fill"
                className={styles.infoImage}
              />
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
              <Image
                src="/health.jpg"
                alt="reco"
                layout="fill"
                className={styles.infoImage}
              />
            </div>
            <div className={styles.infoText}>
              <h3>Health Insurance Personality Test</h3>
              <p>Some info.</p>
            </div>
          </div>
        </Link>
        <div className={styles.infoBox}>
          <div className={styles.infoImageContainer}>
            <Image
              src="/youthInsurance.jpg"
              alt="youth insurance"
              layout="fill"
              className={styles.infoImage}
            />
          </div>
          <div className={styles.infoText}>
            <h3>PRUPanel Connect</h3>
            <p>A suite of value-added services to make your healthcare journey simpler.</p>
          </div>
        </div>
      </section>

      <section className={styles.calculatorContainer}>
        <h2 className={styles.calculatorTitle}>Insurance Calculator</h2>
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
          <select
            className={styles.calculatorSelect}
            value={insuranceType}
            onChange={(e) => setInsuranceType(e.target.value)}
          >
            <option value="">Choose Insurance Type</option>
            <option value="medical">Medical</option>
            <option value="accident">Accident</option>
            <option value="critical">Critical Illness</option>
            <option value="dengue">Dengue</option>
            <option value="covid">COVID Vaccination Coverage</option>
          </select>
          <CSSTransition
            in={!!insuranceType}
            timeout={300}
            classNames={{
              enter: styles.fadeEnter,
              enterActive: styles.fadeEnterActive,
              exit: styles.fadeExit,
              exitActive: styles.fadeExitActive,
            }}
            unmountOnExit
          >
            <select
              className={styles.calculatorSelect}
              value={insurancePlan}
              onChange={(e) => setInsurancePlan(e.target.value)}
            >
              <option value="">Choose Insurance Plan</option>
              <option value="poor">Poor</option>
              <option value="average">Average</option>
              <option value="good">Good</option>
            </select>
          </CSSTransition>
          {premium && (
            <div className={styles.calculatorResult}>
              Estimated Monthly Premium: ${premium}
            </div>
          )}
          <button onClick={calculatePremium} className={styles.calculatorButton}>
            Calculate Premium
          </button>
        </div>
      </section>
    </section>
  );
}



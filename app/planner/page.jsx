"use client";

import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Planner() {
  const [age, setAge] = useState(30);
  const [coverage, setCoverage] = useState(100000);
  const [duration, setDuration] = useState(10);
  const [smokingStatus, setSmokingStatus] = useState("");
  const [healthStatus, setHealthStatus] = useState("");
  const [insuranceType, setInsuranceType] = useState("");
  const [insurancePlan, setInsurancePlan] = useState("");
  const [premium, setPremium] = useState(null);
  const [shake, setShake] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
      setErrorMessage("");
    } else {
      setPremium(null);
      setErrorMessage("Please fill out all fields!");
      setShake(true);
      setTimeout(() => setShake(false), 500); 
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
              <p>Discover the perfect insurance plan tailored just for you!</p>
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
              <p>Find the perfect health insurance plan personalized for your needs!</p>
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
            <h3>Some Other Test</h3>
            <p>A suite of tests.</p>
          </div>
        </div>
      </section>

      <section className={`${styles.calculatorContainer} ${shake ? styles.shake : ""}`}>
        <h2 className={styles.calculatorTitle}>Insurance Calculator</h2>
        <div className={styles.calculatorForm}>
          <div className={styles.sliderContainer}>
            <label className={styles.sliderLabel}>Age</label>
            <input
              type="number"
              min="0"
              max="100"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className={styles.numberInput}
            />
            <input
              type="range"
              min="0"
              max="100"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className={styles.slider}
            />
          </div>
          <div className={styles.sliderContainer}>
            <label className={styles.sliderLabel}>Coverage Amount</label>
            <input
              type="number"
              min="5000"
              max="500000"
              step="5000"
              value={coverage}
              onChange={(e) => setCoverage(e.target.value)}
              className={styles.numberInput}
            />
            <input
              type="range"
              min="5000"
              max="500000"
              step="5000"
              value={coverage}
              onChange={(e) => setCoverage(e.target.value)}
              className={styles.slider}
            />
          </div>
          <div className={styles.sliderContainer}>
            <label className={styles.sliderLabel}>Coverage Duration</label>
            <section className={styles.buttonContainer}>
            <button className={styles.buttonObject} type= "number" value = {5} onClick={(e)=> setDuration(e.target.value)} >5</button>
            <button className={styles.buttonObject} type= "number" value = {10} onClick={(e)=> setDuration(e.target.value)} >10</button>
            <button className={styles.buttonObject} type= "number" value = {20} onClick={(e)=> setDuration(e.target.value)} >20</button>
            </section>
          </div>
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
          {errorMessage && <div className={styles.errorText}>{errorMessage}</div>}
        </div>
      </section>
    </section>
  );
}




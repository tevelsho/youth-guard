"use client";

import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Planner() {
  const [age, setAge] = useState(30);
  const [status, setStatus] = useState("")
  const [coverage, setCoverage] = useState(100000);
  const [duration, setDuration] = useState(10);
  const [smokingStatus, setSmokingStatus] = useState("");
  const [healthStatus, setHealthStatus] = useState("");
  const [insuranceType, setInsuranceType] = useState("");
  const [insurancePlan, setInsurancePlan] = useState("");
  const [premium, setPremium] = useState(null);
  const [shake, setShake] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const insurancePlans = {
    medical: ["Basic Plan", "Standard Plan", "Premium Plan"],
    accident: ["Accident Plan A", "Accident Plan B"],
    critical: ["Critical Illness Plan 1", "Critical Illness Plan 2"],
    dengue: ["Dengue Plan A", "Dengue Plan B"],
    covid: ["COVID Plan A", "COVID Plan B"],
  };

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

  const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  ];

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

      <section className={styles.mainContent}>
        <div className={`${styles.calculatorContainer} ${shake ? styles.shake : ""}`}>
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
            <div>
              <label className={styles.buttonLabel}>Are you a Singapore Citizen or PR?</label>
              <section className={styles.buttonContainer}>
              <button
                  className={styles.buttonObject}
                  type="button"
                  value="Yes"
                  onClick={(e) => setStatus(e.target.value)}
                >
                  Yes
                </button>
                <button
                  className={styles.buttonObject}
                  type="button"
                  value="No"
                  onClick={(e) => setStatus(e.target.value)}
                >
                  No
                </button>
                </section>
            </div>
            <div>
              <label className={styles.buttonLabel}>Coverage Duration</label>
              <section className={styles.buttonContainer}>
                <button
                  className={styles.buttonObject}
                  type="button"
                  value={5}
                  onClick={(e) => setDuration(e.target.value)}
                >
                  5
                </button>
                <button
                  className={styles.buttonObject}
                  type="button"
                  value={10}
                  onClick={(e) => setDuration(e.target.value)}
                >
                  10
                </button>
                <button
                  className={styles.buttonObject}
                  type="button"
                  value={20}
                  onClick={(e) => setDuration(e.target.value)}
                >
                  20
                </button>
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
              onChange={(e) => {
                setInsuranceType(e.target.value);
                setInsurancePlan("");
              }}
            >
              <option value="">Choose Insurance Type</option>
              <option value="medical">Medical</option>
              <option value="accident">Accident</option>
              <option value="critical">Critical Illness</option>
              <option value="dengue">Dengue</option>
              <option value="covid">COVID-19</option>
            </select>
            <select
              className={styles.calculatorSelect}
              value={insurancePlan}
              onChange={(e) => setInsurancePlan(e.target.value)}
            >
              <option value="">Select Insurance Plan</option>
              {insurancePlans[insuranceType]?.map((plan) => (
                <option key={plan} value={plan}>
                  {plan}
                </option>
              ))}
            </select>
            <button className={styles.calculatorButton} onClick={calculatePremium}>
              Calculate Premium
            </button>
            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
            {premium && <p className={styles.premiumResult}>Estimated Premium: ${premium}</p>}
          </div>
        </div>

        <div className={styles.chartContainer}>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>
    </section>
  );
}



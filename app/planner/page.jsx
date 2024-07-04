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
  const [withdrawLimit, setWithdrawLimit] = useState("");

  const insurancePlans = {
    medical: ["Basic Plan", "Standard Plan", "Premium Plan"],
    accident: ["Accident Plan A", "Accident Plan B"],
    critical: ["Critical Illness Plan 1", "Critical Illness Plan 2"],
    dengue: ["Dengue Plan A", "Dengue Plan B"],
    covid: ["COVID Plan A", "COVID Plan B"],
  };
  const calcPremium = () => {
    if(insurancePlan !== ""){
    const dataset = pdfData[insurancePlan];
      console.log(insurancePlan);
    for(let i = 0; i <= dataset.length; i++){
      if(age >= dataset[i].ageRange[0] && age <= dataset[i].ageRange[1]){
        const prem = dataset[i].premium;
        if (dataset[i].withdrawalLimit != null){
          setWithdrawLimit("0.00");
        }else{
          setWithdrawLimit(dataset[i].withdrawalLimit);
        }
        setPremium(prem);
        break;
    }}
  }else{
    setPremium(null);
      setErrorMessage("Please fill out all fields!");
      setShake(true);
      setTimeout(() => setShake(false), 500);
  }};

  const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  ];
  const pdfData = {
    PRUShieldPremier: [
      { ageRange: [1, 20], premium: 147.71, withdrawalLimit: 300 },
      { ageRange: [21, 30], premium: 254.67, withdrawalLimit: 300 },
      { ageRange: [31, 40], premium: 397.29, withdrawalLimit: 300 },
      { ageRange: [41, 50], premium: 534.81, withdrawalLimit: 600 },
      { ageRange: [51, 60], premium: 814.95, withdrawalLimit: 600 },
      { ageRange: [61, 65], premium: 1039.07, withdrawalLimit: 600 },
      { ageRange: [66, 70], premium: 1120.56, withdrawalLimit: 600 },
      { ageRange: [71, 75], premium: 1217.34, withdrawalLimit: 900 },
      { ageRange: [76, 80], premium: 1619.72, withdrawalLimit: 900 },
      { ageRange: [81, 85], premium: 1971.17, withdrawalLimit: 900 },
      { ageRange: [86, 90], premium: 2062.85, withdrawalLimit: 900 },
      { ageRange: [91, 95], premium: 2093.41, withdrawalLimit: 900 },
      { ageRange: [96, 100], premium: 2093.41, withdrawalLimit: 900 }
    ],
    PRUShieldPremierForeignersType2: [
      { ageRange: [1, 20], premium: 370.80, withdrawalLimit: 447.71 },
      { ageRange: [21, 30], premium: 477.76, withdrawalLimit: 554.67 },
      { ageRange: [31, 40], premium: 746.70, withdrawalLimit: 697.29 },
      { ageRange: [41, 50], premium: 1233.63, withdrawalLimit: 1134.81 },
      { ageRange: [51, 60], premium: 2355.21, withdrawalLimit: 1414.95 },
      { ageRange: [61, 65], premium: 3081.55, withdrawalLimit: 1639.07 },
      { ageRange: [66, 70], premium: 4191.92, withdrawalLimit: 1720.56 },
      { ageRange: [71, 75], premium: 5787.18, withdrawalLimit: 2244.67 },
      { ageRange: [76, 80], premium: 7697.05, withdrawalLimit: 2519.72 },
      { ageRange: [81, 85], premium: 10201.18, withdrawalLimit: 2871.17 },
      { ageRange: [86, 90], premium: 11308.66, withdrawalLimit: 2962.85 },
      { ageRange: [91, 95], premium: 11829.05, withdrawalLimit: 2993.41 },
      { ageRange: [96, 100], premium: 12929.23, withdrawalLimit: 2993.41 }
    ],
    PRUShieldPremierForeignersType1: [
      { ageRange: [1, 20], premium: 370.80, withdrawalLimit: null },
      { ageRange: [21, 30], premium: 477.76, withdrawalLimit: null },
      { ageRange: [31, 40], premium: 746.70, withdrawalLimit: null },
      { ageRange: [41, 50], premium: 1233.63, withdrawalLimit: null },
      { ageRange: [51, 60], premium: 2355.21, withdrawalLimit: null },
      { ageRange: [61, 65], premium: 3081.55, withdrawalLimit: null },
      { ageRange: [66, 70], premium: 4191.92, withdrawalLimit: null },
      { ageRange: [71, 75], premium: 5787.18, withdrawalLimit: null },
      { ageRange: [76, 80], premium: 7697.05, withdrawalLimit: null },
      { ageRange: [81, 85], premium: 10201.18, withdrawalLimit: null },
      { ageRange: [86, 90], premium: 11308.66, withdrawalLimit: null },
      { ageRange: [91, 95], premium: 11829.05, withdrawalLimit: null },
      { ageRange: [96, 100], premium: 12929.23, withdrawalLimit: null }
    ],
    PRUShieldPlus: [
      { ageRange: [1, 5], premium: 75.38, withdrawalLimit: 300 },
      { ageRange: [6, 20], premium: 68.25, withdrawalLimit: 300 },
      { ageRange: [21, 30], premium: 59.08, withdrawalLimit: 300 },
      { ageRange: [31, 35], premium: 87.61, withdrawalLimit: 300 },
      { ageRange: [36, 40], premium: 114.09, withdrawalLimit: 300 },
      { ageRange: [41, 45], premium: 149.75, withdrawalLimit: 600 },
      { ageRange: [46, 50], premium: 184.38, withdrawalLimit: 600 },
      { ageRange: [51, 53], premium: 229.21, withdrawalLimit: 600 },
      { ageRange: [54, 55], premium: 256.71, withdrawalLimit: 600 },
      { ageRange: [56, 60], premium: 260.79, withdrawalLimit: 600 },
      { ageRange: [61, 65], premium: 432.94, withdrawalLimit: 600 },
      { ageRange: [66, 70], premium: 788.47, withdrawalLimit: 600 },
      { ageRange: [71, 75], premium: 1443.49, withdrawalLimit: 900 },
      { ageRange: [76, 80], premium: 2053.68, withdrawalLimit: 900 },
      { ageRange: [81, 85], premium: 2632.30, withdrawalLimit: 900 },
      { ageRange: [86, 90], premium: 2823.81, withdrawalLimit: 900 },
      { ageRange: [91, 95], premium: 3272.04, withdrawalLimit: 900 },
      { ageRange: [96, 100], premium: 3826.21, withdrawalLimit: 900 }
    ],
    PRUShieldPlusForeignersType2: [
      { ageRange: [1, 5], premium: 223.09, withdrawalLimit: 447.71 },
      { ageRange: [6, 20], premium: 215.96, withdrawalLimit: 447.71 },
      { ageRange: [21, 30], premium: 313.75, withdrawalLimit: 554.67 },
      { ageRange: [31, 35], premium: 484.90, withdrawalLimit: 697.29 },
      { ageRange: [36, 40], premium: 511.38, withdrawalLimit: 697.29 },
      { ageRange: [41, 45], premium: 684.56, withdrawalLimit: 1134.81 },
      { ageRange: [46, 50], premium: 719.19, withdrawalLimit: 1134.81 },
      { ageRange: [51, 53], premium: 1044.16, withdrawalLimit: 1414.95 },
      { ageRange: [54, 55], premium: 1071.66, withdrawalLimit: 1414.95 },
      { ageRange: [56, 60], premium: 1075.74, withdrawalLimit: 1414.95 },
      { ageRange: [61, 65], premium: 1472.01, withdrawalLimit: 1639.07 },
      { ageRange: [66, 70], premium: 1909.03, withdrawalLimit: 1720.56 },
      { ageRange: [71, 75], premium: 2788.16, withdrawalLimit: 2244.67 },
      { ageRange: [76, 80], premium: 3673.40, withdrawalLimit: 2519.72 },
      { ageRange: [81, 85], premium: 4603.47, withdrawalLimit: 2871.17 },
      { ageRange: [86, 90], premium: 4886.66, withdrawalLimit: 2962.85 },
      { ageRange: [91, 95], premium: 5365.45, withdrawalLimit: 2993.41 },
      { ageRange: [96, 100], premium: 5919.62, withdrawalLimit: 2993.41 }
    ],
    PRUShieldPlusForeignersType1: [
      { ageRange: [1, 5], premium: 223.09, withdrawalLimit: null },
      { ageRange: [6, 20], premium: 215.96, withdrawalLimit: null },
      { ageRange: [21, 30], premium: 313.75, withdrawalLimit: null },
      { ageRange: [31, 35], premium: 484.90, withdrawalLimit: null },
      { ageRange: [36, 40], premium: 511.38, withdrawalLimit: null },
      { ageRange: [41, 45], premium: 684.56, withdrawalLimit: null },
      { ageRange: [46, 50], premium: 719.19, withdrawalLimit: null },
      { ageRange: [51, 53], premium: 1044.16, withdrawalLimit: null },
      { ageRange: [54, 55], premium: 1071.66, withdrawalLimit: null },
      { ageRange: [56, 60], premium: 1075.74, withdrawalLimit: null },
      { ageRange: [61, 65], premium: 1472.01, withdrawalLimit: null },
      { ageRange: [66, 70], premium: 1909.03, withdrawalLimit: null },
      { ageRange: [71, 75], premium: 2788.16, withdrawalLimit: null },
      { ageRange: [76, 80], premium: 3673.40, withdrawalLimit: null },
      { ageRange: [81, 85], premium: 4603.47, withdrawalLimit: null },
      { ageRange: [86, 90], premium: 4886.66, withdrawalLimit: null },
      { ageRange: [91, 95], premium: 5365.45, withdrawalLimit: null },
      { ageRange: [96, 100], premium: 5919.62, withdrawalLimit: null }
    ],
    PRUShieldStandard: [
      { ageRange: [1, 5], premium: 41.77, withdrawalLimit: 300 },
      { ageRange: [6, 20], premium: 41.77, withdrawalLimit: 300 },
      { ageRange: [21, 30], premium: 48.90, withdrawalLimit: 300 },
      { ageRange: [31, 40], premium: 64.18, withdrawalLimit: 300 },
      { ageRange: [41, 50], premium: 110.02, withdrawalLimit: 600 },
      { ageRange: [51, 55], premium: 143.64, withdrawalLimit: 600 },
      { ageRange: [56, 60], premium: 182.35, withdrawalLimit: 600 },
      { ageRange: [61, 65], premium: 254.67, withdrawalLimit: 600 },
      { ageRange: [66, 70], premium: 403.40, withdrawalLimit: 900 },
      { ageRange: [71, 75], premium: 621.40, withdrawalLimit: 900 },
      { ageRange: [76, 80], premium: 1032.95, withdrawalLimit: 900 },
      { ageRange: [81, 85], premium: 1178.63, withdrawalLimit: 900 },
      { ageRange: [86, 90], premium: 1442.47, withdrawalLimit: 900 },
      { ageRange: [91, 95], premium: 1778.64, withdrawalLimit: 900 },
      { ageRange: [96, 100], premium: 2416.34, withdrawalLimit: 900 }
    ],
    PRUExtraPremierCoPay: [
      { ageRange: [1, 5], premium: 910.00, withdrawalLimit: null },
      { ageRange: [6, 20], premium: 844.00, withdrawalLimit: null },
      { ageRange: [21, 30], premium: 776.00, withdrawalLimit: null },
      { ageRange: [31, 40], premium: 701.00, withdrawalLimit: null },
      { ageRange: [41, 50], premium: 1032.95, withdrawalLimit: null },
      { ageRange: [51, 60], premium: 729.00, withdrawalLimit: null },
      { ageRange: [61, 65], premium: 815.00, withdrawalLimit: null },
      { ageRange: [66, 70], premium: 901.00, withdrawalLimit: null },
      { ageRange: [71, 75], premium: 1178.63, withdrawalLimit: null },
      { ageRange: [76, 80], premium: 1032.95, withdrawalLimit: null },
      { ageRange: [81, 85], premium: 1178.63, withdrawalLimit: null },
      { ageRange: [86, 90], premium: 1442.47, withdrawalLimit: null },
      { ageRange: [91, 95], premium: 1778.64, withdrawalLimit: null },
      { ageRange: [96, 100], premium: 2416.34, withdrawalLimit: null }
    ],
    PRUExtraPreferredCoPay: [
      { ageRange: [1, 5], premium: 728.00, withdrawalLimit: null },
      { ageRange: [6, 20], premium: 675.20, withdrawalLimit: null },
      { ageRange: [21, 30], premium: 620.80, withdrawalLimit: null },
      { ageRange: [31, 40], premium: 559.60, withdrawalLimit: null },
      { ageRange: [41, 50], premium: 694.00, withdrawalLimit: null },
      { ageRange: [51, 60], premium: 729.00, withdrawalLimit: null },
      { ageRange: [61, 65], premium: 873.00, withdrawalLimit: null },
      { ageRange: [66, 70], premium: 1058.00, withdrawalLimit: null },
      { ageRange: [71, 75], premium: 1210.00, withdrawalLimit: null },
      { ageRange: [76, 80], premium: 1394.00, withdrawalLimit: null },
      { ageRange: [81, 85], premium: 1520.00, withdrawalLimit: null },
      { ageRange: [86, 90], premium: 1752.00, withdrawalLimit: null },
      { ageRange: [91, 95], premium: 1980.00, withdrawalLimit: null },
      { ageRange: [96, 100], premium: 2412.00, withdrawalLimit: null }
    ],
    PRUExtraPremierLiteCoPay: [
      { ageRange: [1, 5], premium: 652.00, withdrawalLimit: null },
      { ageRange: [6, 20], premium: 609.00, withdrawalLimit: null },
      { ageRange: [21, 30], premium: 556.00, withdrawalLimit: null },
      { ageRange: [31, 40], premium: 501.00, withdrawalLimit: null },
      { ageRange: [41, 50], premium: 620.00, withdrawalLimit: null },
      { ageRange: [51, 60], premium: 660.00, withdrawalLimit: null },
      { ageRange: [61, 65], premium: 792.00, withdrawalLimit: null },
      { ageRange: [66, 70], premium: 1024.00, withdrawalLimit: null },
      { ageRange: [71, 75], premium: 1248.00, withdrawalLimit: null },
      { ageRange: [76, 80], premium: 1456.00, withdrawalLimit: null },
      { ageRange: [81, 85], premium: 1612.00, withdrawalLimit: null },
      { ageRange: [86, 90], premium: 1856.00, withdrawalLimit: null },
      { ageRange: [91, 95], premium: 2100.00, withdrawalLimit: null },
      { ageRange: [96, 100], premium: 2560.00, withdrawalLimit: null }
    ],
    PRUExtraPlusCoPay: [
      { ageRange: [1, 5], premium: 728.00, withdrawalLimit: null },
      { ageRange: [6, 20], premium: 686.00, withdrawalLimit: null },
      { ageRange: [21, 30], premium: 648.00, withdrawalLimit: null },
      { ageRange: [31, 40], premium: 610.00, withdrawalLimit: null },
      { ageRange: [41, 50], premium: 756.00, withdrawalLimit: null },
      { ageRange: [51, 60], premium: 812.00, withdrawalLimit: null },
      { ageRange: [61, 65], premium: 964.00, withdrawalLimit: null },
      { ageRange: [66, 70], premium: 1218.00, withdrawalLimit: null },
      { ageRange: [71, 75], premium: 1448.00, withdrawalLimit: null },
      { ageRange: [76, 80], premium: 1656.00, withdrawalLimit: null },
      { ageRange: [81, 85], premium: 1828.00, withdrawalLimit: null },
      { ageRange: [86, 90], premium: 2080.00, withdrawalLimit: null },
      { ageRange: [91, 95], premium: 2356.00, withdrawalLimit: null },
      { ageRange: [96, 100], premium: 2812.00, withdrawalLimit: null }
    ],
    PRUExtraPlusLiteCoPay: [
      { ageRange: [1, 5], premium: 468.00, withdrawalLimit: null },
      { ageRange: [6, 20], premium: 432.00, withdrawalLimit: null },
      { ageRange: [21, 30], premium: 398.00, withdrawalLimit: null },
      { ageRange: [31, 40], premium: 364.00, withdrawalLimit: null },
      { ageRange: [41, 50], premium: 468.00, withdrawalLimit: null },
      { ageRange: [51, 60], premium: 502.00, withdrawalLimit: null },
      { ageRange: [61, 65], premium: 608.00, withdrawalLimit: null },
      { ageRange: [66, 70], premium: 768.00, withdrawalLimit: null },
      { ageRange: [71, 75], premium: 920.00, withdrawalLimit: null },
      { ageRange: [76, 80], premium: 1052.00, withdrawalLimit: null },
      { ageRange: [81, 85], premium: 1160.00, withdrawalLimit: null },
      { ageRange: [86, 90], premium: 1328.00, withdrawalLimit: null },
      { ageRange: [91, 95], premium: 1528.00, withdrawalLimit: null },
      { ageRange: [96, 100], premium: 1820.00, withdrawalLimit: null }
    ]
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
              <option value = "">Select Insurance Plan</option>
                <option value = "PRUShieldPremier">
                  PRUShieldPremier
                </option>
                <option value = "PRUShieldPlus">
                PRUShieldPlus
              </option>
              <option value = "PRUShieldStandard">
                PRUShieldStandard
              </option>
              <option value = "PRUShieldExtraPremierCoPay">
                PRUShieldExtraPremierCoPay
              </option>
              <option value = "PRUShieldExtraPreferredCoPay">
              PRUShieldExtraPreferredCoPay
              </option>
              <option value = "PRUShieldExtraPremierLiteCoPay">
              PRUShieldExtraPremierLiteCoPay
              </option>
              <option value = "PRUExtraPlusCoPay">
              PRUExtraPlusCoPay
              </option>
              <option value = "PRUExtraPlusLiteCoPay">
              PRUExtraPlusLiteCoPay
              </option>
              <option value = "PRUShieldPremierForeignersType1">
              PRUShieldPremierForeignersType1
              </option>
              <option value = "PRUShieldPremierForeignersType2">
              PRUShieldPremierForeignersType2
              </option>
            </select>
            <button className={styles.calculatorButton} onClick={calcPremium}>
              Calculate Premium
            </button>
            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
            {premium && <p className={styles.premiumResult}>Estimated Premium: ${premium} <br/>Withdrawal Limit: ${withdrawLimit}</p>}
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



"use client";

import React, { useState } from 'react';
import styles from './page.module.css';
import Link from "next/link";

const scenarios = [
    {
      chapter: 'Chapter 1: Starting Out',
      scenario: 'You’ve just landed your first job and are excited about your new career. As you review your benefits, you have to decide whether to purchase a basic health insurance plan or save that money for other expenses. Both options have their pros and cons. Will you prioritize immediate financial savings or future health security?',
      decision: 'Will you get Health Insurance?',
      options: [
        { text: 'Purchase a basic health insurance plan.', outcome: 'You have peace of mind with coverage for minor accidents, and you earn 10 points.', points: 10 },
        { text: 'Skip health insurance to save money.', outcome: 'You face a major financial setback due to an unexpected illness, losing 10 points.', points: -10 }
      ]
    },
    {
      chapter: 'Chapter 2: On the Road',
      scenario: 'You’re buying your first car, a significant milestone. You must decide whether to get comprehensive auto insurance or stick with the basic liability insurance to save some money. Comprehensive insurance offers better protection but at a higher cost. What will you choose?',
      decision: 'Will you get Auto Insurance?',
      options: [
        { text: 'Get comprehensive auto insurance.', outcome: 'You are covered for damages from minor accidents with a small premium, earning 10 points.', points: 10 },
        { text: 'Only buy mandatory liability insurance.', outcome: 'You face high repair costs from a significant accident, losing 10 points.', points: -10 }
      ]
    },
    {
      chapter: 'Chapter 3: Building a Home',
      scenario: 'You’ve found the perfect apartment and are moving in. Now you need to decide whether to invest in renters insurance. It’s an additional expense but can protect your valuables. Without it, you save money but might face significant losses if something unexpected happens. What will you do?',
      decision: 'Will you get Renters Insurance?',
      options: [
        { text: 'Invest in renters insurance.', outcome: 'Your valuables are protected against theft or damage, and you earn 10 points.', points: 10 },
        { text: 'Skip renters insurance.', outcome: 'You suffer loss of valuables after a burglary without reimbursement, losing 10 points.', points: -10 }
      ]
    },
    {
      chapter: 'Chapter 4: Family and Health',
      scenario: 'Your family is growing, and you need to decide whether to upgrade to a family health insurance plan. The upgrade offers comprehensive coverage but comes with higher premiums. Keeping your individual plan saves money now but may leave you vulnerable in a medical emergency. What’s your decision?',
      decision: 'Will you get a Family Health Plan?',
      options: [
        { text: 'Upgrade to a family health insurance plan.', outcome: 'You have coverage for unexpected medical expenses, ensuring financial stability and earning 10 points.', points: 10 },
        { text: 'Stick with individual insurance.', outcome: 'You face financial strain due to unexpected medical expenses for your child, losing 10 points.', points: -10 }
      ]
    },
    {
      chapter: 'Chapter 5: Preparing for the Unexpected',
      scenario: 'Living in an area prone to natural disasters makes you consider homeowners insurance. Comprehensive coverage ensures protection against extensive damage but adds to your monthly expenses. Skipping the insurance saves you money now but risks high repair costs later. What will you choose?',
      decision: 'Will you get Homeowners Insurance?',
      options: [
        { text: 'Invest in comprehensive homeowners insurance.', outcome: 'You are protected against extensive damage from natural disasters, earning 10 points.', points: 10 },
        { text: 'Skip homeowners insurance.', outcome: 'You face severe financial loss and repair costs after a disaster, losing 10 points.', points: -10 }
      ]
    },
    {
      chapter: 'Chapter 6: Retirement Planning',
      scenario: 'As you approach retirement, you are considering whether to purchase long-term care insurance. This policy provides future security but is a significant expense now. Foregoing it saves you money but could lead to financial struggles later. What’s your decision?',
      decision: 'Will you get Long-Term Care Insurance?',
      options: [
        { text: 'Purchase long-term care insurance.', outcome: 'You ensure financial security in retirement with coverage for care costs, earning 10 points.', points: 10 },
        { text: 'Forego long-term care insurance.', outcome: 'You face financial struggles with high medical and care expenses in retirement, losing 10 points.', points: -10 }
      ]
    }
];

const Page = () => {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showOutcome, setShowOutcome] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setScore(score + option.points);
    setSelectedOption(option);
    setShowOutcome(true);
  };

  const handleNextClick = () => {
    if (currentScenarioIndex < scenarios.length - 1) {
      setShowOutcome(false);
      setSelectedOption(null);
      setCurrentScenarioIndex(currentScenarioIndex + 1);
    } else {
      setCurrentScenarioIndex(scenarios.length); // Move to conclusion
    }
  };

  const handleRetryClick = () => {
    setCurrentScenarioIndex(0);
    setScore(0);
    setShowOutcome(false);
    setSelectedOption(null);
  };

  const currentScenario = scenarios[currentScenarioIndex];

  const progressWidth = `${((currentScenarioIndex + 1) / scenarios.length) * 100}%`;

  if (currentScenarioIndex >= scenarios.length) {
    return (
      <div className={styles.container}>
        <h1 className={styles.conclusionTitle}>Conclusion</h1>
        <p className={styles.conclusionText}>Your final score is: <strong>{score}</strong></p>
        <p className={styles.conclusionMessage}>
          {score > 0 ? '🎉 You made wise decisions and ensured financial stability!' : '😞 You faced challenges due to lack of insurance.'}
        </p>
        <Link href="/" className={styles.homeLink}>
          Go to Homepage
        </Link>
        <button onClick={handleRetryClick} className={styles.retryButton}>
          Retry Game
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.progressBar}>
        <div className={styles.progress} style={{ width: progressWidth }} />
      </div>
      <h1 className={styles.chapterTitle}>{currentScenario.chapter}</h1>
      <p className={styles.scenarioText}>{currentScenario.scenario}</p>
      <h2 className={styles.decisionHeader}>{currentScenario.decision}</h2>
      {!showOutcome ? (
        <div className={styles.optionButtonContainer}>
          {currentScenario.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className={styles.optionButton}
            >
              {option.text}
            </button>
          ))}
        </div>
      ) : (
        <div className={styles.outcome}>
          <p>{selectedOption.outcome}</p>
          <button onClick={handleNextClick} className={styles.nextButton}>
            Next Scenario
          </button>
        </div>
      )}
    </div>
  );
};

export default Page;

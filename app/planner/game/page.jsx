"use client";

import React, { useState } from 'react';
import styles from './page.module.css';
import Link from "next/link";

const scenarios = [
    {
      chapter: 'Chapter 1: Starting Out',
      scenario: 'You’ve just landed your first job and are excited about your new career. As you review your benefits, you have to decide whether to purchase a basic health insurance plan or save that money for other expenses. Both options have their pros and cons, and it’s a tough call. Do you prioritize your immediate finances or think about potential future health issues?',
      decision: 'Get Health Insurance?',
      options: [
        { text: 'Purchase a basic health insurance plan.', outcome: 'Peace of mind; medical costs covered during a minor accident.', points: 10 },
        { text: 'Skip health insurance to save money.', outcome: 'Major financial setback after an unexpected illness.', points: -10 }
      ]
    },
    {
      chapter: 'Chapter 2: On the Road',
      scenario: 'You’re buying your first car, a significant milestone. As you navigate the costs, you wonder if you should get comprehensive auto insurance or stick with the mandatory liability insurance to save some money. Comprehensive insurance offers more protection but at a higher cost. Liability insurance is cheaper but could leave you vulnerable to high expenses if something goes wrong.',
      decision: 'Get Auto Insurance?',
      options: [
        { text: 'Get comprehensive auto insurance.', outcome: 'Covered damages from a minor accident; small premium costs.', points: 10 },
        { text: 'Only buy mandatory liability insurance.', outcome: 'High out-of-pocket repair costs after a significant accident.', points: -10 }
      ]
    },
    {
      chapter: 'Chapter 3: Building a Home',
      scenario: 'You’ve found the perfect apartment and are settling in. Now, you need to decide whether to invest in renters insurance. It’s an additional expense, but it could protect your valuables in case of theft or damage. Without it, you’ll save money, but you might face significant losses if the unexpected happens. Both choices have their merits, making this a tricky decision.',
      decision: 'Get Renters Insurance?',
      options: [
        { text: 'Invest in renters insurance.', outcome: 'Protection against theft; stolen items replaced.', points: 10 },
        { text: 'Skip renters insurance.', outcome: 'Loss of valuables after a burglary, with no reimbursement.', points: -10 }
      ]
    },
    {
      chapter: 'Chapter 4: Family and Health',
      scenario: 'Your family is growing, and it’s time to consider whether to upgrade to a family health insurance plan. The upgrade provides comprehensive coverage but comes with higher premiums. Keeping your individual plan saves money now but might leave you vulnerable to higher costs in a medical emergency. Balancing current financial needs with future security is challenging.',
      decision: 'Get Family Health Plan?',
      options: [
        { text: 'Upgrade to a family health insurance plan.', outcome: 'Coverage for unexpected medical expenses; financial stability.', points: 10 },
        { text: 'Stick with individual insurance.', outcome: 'Strain on finances due to child’s medical emergency.', points: -10 }
      ]
    },
    {
      chapter: 'Chapter 5: Preparing for the Unexpected',
      scenario: 'Living in an area prone to natural disasters makes you think about homeowners insurance. Comprehensive coverage ensures protection against extensive damage but adds to your monthly expenses. Foregoing the insurance saves you money upfront but leaves you at risk of high repair costs if disaster strikes. It’s a decision that weighs immediate financial relief against long-term security.',
      decision: 'Get Homeowners Insurance?',
      options: [
        { text: 'Invest in comprehensive homeowners insurance.', outcome: 'Coverage of repairs after a storm; minimal financial impact.', points: 10 },
        { text: 'No homeowners insurance.', outcome: 'Severe financial loss; home repairs are a major burden.', points: -10 }
      ]
    },
    {
      chapter: 'Chapter 6: Retirement Planning',
      scenario: 'As you approach retirement, you’re considering whether to purchase long-term care insurance. This policy could secure your future, covering high medical and care costs, but it’s a significant expense now. Choosing not to buy it saves money in the short term but might lead to financial struggles later. Deciding between immediate savings and future peace of mind is tough.',
      decision: 'Get Long-Term Care Insurance?',
      options: [
        { text: 'Purchase long-term care insurance.', outcome: 'Security in retirement; care costs covered.', points: 10 },
        { text: 'Forego long-term care insurance.', outcome: 'Financial struggle with high medical and care expenses.', points: -10 }
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
      setShowOutcome(false);
      setSelectedOption(null);
      setCurrentScenarioIndex(currentScenarioIndex + 1);
    };
  
    const currentScenario = scenarios[currentScenarioIndex];
  
    if (currentScenarioIndex >= scenarios.length) {
      return (
        <div className={styles.container}>
          <h1>Conclusion</h1>
          <p>Your final score is: {score}</p>
          <p>{score > 0 ? '🎉 You made wise decisions and ensured financial stability!' : '😞 You faced challenges due to lack of insurance.'}</p>
          <button onClick={() => { setCurrentScenarioIndex(0); setScore(0); setShowOutcome(false); setSelectedOption(null); }} className={styles.optionButton}>
            Retry Game
          </button>
          <Link href="/" className={styles.optionButton} style={{ marginTop: '10px', background: '#007bff' }}>
            Go to Homepage
          </Link>
        </div>
      );
    }
  
    return (
      <div className={styles.container}>
        <h1>{currentScenario.chapter}</h1>
        <p className={styles.paragraph}>{currentScenario.scenario}</p>
        <h2 className={styles.decisionHeader}>{currentScenario.decision}</h2>
        {!showOutcome ? (
          currentScenario.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className={styles.optionButton}
            >
              {option.text}
            </button>
          ))
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

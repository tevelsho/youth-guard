'use client';
import styles from "../page.module.css";
import { useEffect, useState } from 'react';

export default function HealthInsuranceTestPage() {
    const [data, setData] = useState(null);
    const [ selectedTopic, setSelectedTopic ] = useState("Health");
    const [startTest, setStartTest] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/healthquiz');
            const result = await response.json();
            setData(result);
        };

        fetchData();
    }, []);

    return (
        <div>
            <header className={styles.testHeader}>
                <h1>Insurance Personality Test</h1>
                <div className={styles.testSteps}>
                    <div className={styles.testStep}>
                        <img src="/completetest.png" alt="Complete the Test" className={styles.testStepImg} />
                        <h2>Complete the Test</h2>
                        <p>Answer to find the perfect insurance plan for you.</p>
                    </div>
                    <div className={styles.testStep}>
                        <img src="/detailedresults.png" alt="View Detailed Results" className={styles.testStepImg} />
                        <h2>View Detailed Results</h2>
                        <p>Learn why we chose this insurance plan for you.</p>
                    </div>
                    <div className={styles.testStep}>
                        <img src="/unlockpotential.png" alt="Unlock Your Potential" className={styles.testStepImg} />
                        <h2>Unlock Your Potential</h2>
                        <p>Make the most of your insurance plan with our support.</p>
                    </div>
                </div>
            </header>
            <div className={`${styles.testContent} ${startTest ? styles.hidden : ""}`}>
                <h2>Which category are you looking at?</h2>
                <div className={styles.testContentBtns}>
                    {data && Object.keys(data).map((category) => (
                        <button key={category} className={`${styles.testContentTopic} ${selectedTopic === category ? styles.selectedTopic : ""}}`} onClick={() => setSelectedTopic(category)}>
                            {category}
                        </button>
                    ))}
                </div>
                <button className={styles.startTest} onClick={() => setStartTest(true)}>
                    Start the Test
                </button>
            </div>

            <div className={`${styles.testContent} ${startTest ? "" : styles.hidden}`}>
                <h2>{selectedTopic}</h2>
                <div className={styles.testQuestions}>
                    {data && data[selectedTopic].map((question, index) => (
                        <div key={index} className={styles.testQuestion}>
                            <h3>{question.question}</h3>
                            <div className={styles.testAnswers}>
                                {question.options.map((answer, index) => (
                                    <button key={index} className={styles.testAnswer}>
                                        {answer}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <button className={styles.nextQuestion}>
                    Next Question
                </button>
            </div>
        </div>
    )
}
'use client';
import styles from "../page.module.css";
import { useEffect, useState } from 'react';

export default function HealthInsuranceTestPage() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/healthquiz');
            const result = await response.json();
            setData(result);
        };

        fetchData();
    }, []);

    const handleTopicClick = (category) => {
        console.log(category)
    }

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
            <div className={styles.testContent}>
                <h2>Which category are you looking at?</h2>
                <div className={styles.testContentBtns}>
                    {data && Object.keys(data).map((category) => (
                        <button key={category} className={styles.testContentTopic} onClick={handleTopicClick(category)}>
                            {category}
                        </button>
                    ))}
                </div>
                <button className={styles.startTest}>
                    Start the Test
                </button>
            </div>
        </div>
    )
}
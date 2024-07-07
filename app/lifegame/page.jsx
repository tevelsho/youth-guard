'use client'

import React from 'react';
import styles from "./page.module.css";

export default function LifeGame() {
    const [data, setData] = React.useState(null);
    const [gameState, setGameState] = React.useState(0);
    const [displayIntro, setDisplayIntro] = React.useState(true);
    const [displayResult, setDisplayResult] = React.useState(false);
    const [animateContainer, setAnimateContainer] = React.useState(false);
    const [optionOutcome, setOptionOutcome] = React.useState("");

    React.useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/lifegame');
            const result = await response.json();
            setData(result.chapters);
        };

        fetchData();
    }, [])

    function handleGameTransition() {
        setAnimateContainer(!animateContainer);
        setTimeout(() => {
            setGameState(gameState + 1);
            setAnimateContainer(false)
            setDisplayIntro(false)
        }, 1500);
    }

    function handleGameOption(option) {
        setOptionOutcome(data[gameState].options[option].outcome);
        setDisplayResult(true);

        setTimeout(() => {
            setGameState(data[gameState].options[option].nextChapter);
            setDisplayResult(false);

            setGameState(gameState + 1);
            if (gameState == data.length) {
                setOptionOutcome("Congratulations! You have completed the life game.");
                setDisplayResult(true);
                setGameState(-1);
            }
        }, 3000)
    }

    return (
        <div className={styles.gameScreenContainer}>
            <div className={`${styles.textContainer} ${animateContainer ? styles.containerTransition : ""} ${!displayIntro ? styles.hidden : ""}`}>
                <p className={styles.gamePrompt}>
                    You are Alex, a young adult beginning your career. Life offers many opportunities and risks. The decisions you make will shape your future.  
                    <i> Will you choose wisely?</i>
                </p>
                <button className={styles.gameButton} onClick={handleGameTransition}>
                    Begin your Journey
                </button>
            </div>

            {gameState != 0 ? 
                <div className={`${styles.textContainer} ${animateContainer ? styles.containerTransition : ""}`}>
                    {displayResult ? 
                        <div>
                            <p className={styles.gamePrompt}>
                                {optionOutcome}
                            </p>
                        </div>
                    : 
                    <div className={styles.containerInTransition}>
                        <p className={styles.gamePrompt}>
                            {`${data[gameState].title} - ${data[gameState].scenario}`}
                        </p>
                        <div className={styles.gameButtonContainer}>
                            <button className={styles.gameButton} onClick={() => {
                                handleGameOption(0)
                            }}>
                                {data[gameState].options[0].option}
                            </button>
                            <button className={styles.gameButton} onClick={() => {
                                handleGameOption(1)
                            }}>
                                {data[gameState].options[1].option}
                            </button>
                        </div>
                    </div>
                    }
                </div>
            : <></>}
        </div>
    )
}
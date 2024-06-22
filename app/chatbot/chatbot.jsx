"use client";

import React, { useState } from 'react';
import { IoChatbubblesOutline } from "react-icons/io5";
import styles from './chatbot.module.css';

export default function Chatbot() {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    return (
        <div className={styles.chatbotContainer} onClick={toggleChat}>
            {isChatOpen ? (
                <div className={styles.chatWindow}>
                    <div className={styles.chatHeader}>
                        <span>Chat with us</span>
                        <button className={styles.closeButton} onClick={toggleChat}>X</button>
                    </div>
                    <div className={styles.chatContent}>
                        {/* Chat Stuff?? */}
                    </div>
                </div>
            ) : (
                <>
                    <div className={styles.chatbotIcon}>
                        <IoChatbubblesOutline className={styles.icon} />
                    </div>
                </>
            )}
        </div>
    );
}



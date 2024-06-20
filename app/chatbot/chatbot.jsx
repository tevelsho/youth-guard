import React from 'react';
import { IoChatbubblesOutline } from "react-icons/io5";
import styles from './chatbot.module.css';

export default function Chatbot() {
    return (
        <div className={styles.chatbot}>
            <IoChatbubblesOutline className={styles.icon} />
        </div>
    );
}

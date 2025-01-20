"use client";
import { useState } from "react";
import styles from "./timerToastManager.module.css";
import TimerToast from "../TimerToast";

export default function TimerToastManager() {
  const [callToast, setCallToast] = useState(false);
  //   const [isFading, setIsFading] = useState(false);

  const [formTitle, setFormTitle] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [toastTitle, setToastTitle] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  function showToast() {
    if (!toastTitle.trim() && !toastMessage.trim()) {
      return;
    }
    setCallToast(true);
    setFormTitle("");
    setFormMessage("");
    setTimeout(() => setCallToast(false), 1000);
  }

  return (
    <div className={styles.formWrapper}>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          setToastTitle(formTitle);
          setToastMessage(formMessage);
          showToast();
        }}
      >
        <div>
          <label>
            Title:
            <input
              value={formTitle}
              required
              onChange={(e) => setFormTitle(e.target.value)}
              type="text"
            />
          </label>
        </div>
        <div>
          <label>
            Message:
            <input
              type="text"
              value={formMessage}
              required
              onChange={(e) => setFormMessage(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Show Toast</button>
      </form>
      {callToast && (
        <div>
          <TimerToast message={toastMessage} title={toastTitle} />
        </div>
      )}
    </div>
  );
}

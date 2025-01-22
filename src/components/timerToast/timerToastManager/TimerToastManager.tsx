"use client";
import { useRef, useState } from "react";
import styles from "./timerToastManager.module.css";
import TimerToast from "../TimerToast";

export default function TimerToastManager() {
  const [callToast, setCallToast] = useState(false);

  const [formTitle, setFormTitle] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [toastTitle, setToastTitle] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  const timeOutRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const remainingTimeRef = useRef<number>(3500);

  function showToast() {
    if (!toastTitle.trim() && !toastMessage.trim()) {
      return;
    }
    remainingTimeRef.current = 3500;
    setCallToast(true);
    setFormTitle("");
    setFormMessage("");
    startTimeRef.current = Date.now();
    timeOutRef.current = setTimeout(() => setCallToast(false), 3500);
  }

  function pauseToast() {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
      timeOutRef.current = null;
      if (startTimeRef.current) {
        const elapsedTime = Date.now() - startTimeRef.current;
        remainingTimeRef.current -= elapsedTime;
      }
    }
  }

  function resumeToast() {
    if (!callToast || timeOutRef.current) return;
    startTimeRef.current = Date.now();

    timeOutRef.current = setTimeout(
      () => setCallToast(false),
      remainingTimeRef.current
    );
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
        <div onMouseEnter={pauseToast} onMouseLeave={resumeToast}>
          <TimerToast message={toastMessage} title={toastTitle} />
        </div>
      )}
    </div>
  );
}

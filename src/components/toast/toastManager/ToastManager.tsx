"use client";
import styles from "./toastManager.module.css"
import { useRef, useState } from "react";
import Toast from "../Toast";

export default function ToastManager() {
  const [callToast, setCallToast] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const [formTitle, setFormTitle] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [toastTitle, setToastTitle] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const remainingTimeRef = useRef<number>(3500);

  function showToast() {
    setCallToast(true);
    setIsFading(false);
    setFormMessage("")
    setFormTitle("")
    startTimeRef.current = Date.now();

    timeoutRef.current = setTimeout(() => {
      setIsFading(true);
      timeoutRef.current = setTimeout(() => setCallToast(false), 500);
    }, 3500);
  }

  function pauseToast() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
      if (startTimeRef.current) {
        const elapsedTime = Date.now() - startTimeRef.current;
        remainingTimeRef.current -= elapsedTime;
      }
    }
  }

  function resumeToast() {
    if (!callToast || timeoutRef.current) return;
    startTimeRef.current = Date.now();

    timeoutRef.current = setTimeout(() => {
      setIsFading(true);
      timeoutRef.current = setTimeout(() => setCallToast(false), 500);
    }, remainingTimeRef.current);
  }

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          setToastTitle(formTitle)
          setToastMessage(formMessage)
          showToast();
        }}
      >
        <div>
          <label>
            Title:
            <input
              type="text"
              value={formTitle}
              onChange={(e) => setFormTitle(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Message:
            <input
              type="text"
              value={formMessage}
              onChange={(e) => setFormMessage(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Show Toast</button>
      </form>
      {callToast && (
        <div onMouseEnter={pauseToast} onMouseLeave={resumeToast}>
          <Toast
            title={toastTitle}
            message={toastMessage}
            isFading={isFading}
          />
        </div>
      )}
    </div>
  );
}

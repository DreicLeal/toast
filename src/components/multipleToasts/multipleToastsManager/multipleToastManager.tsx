"use client";
import { useRef, useState } from "react";
import MultipleToast from "../MultipleToast";
import styles from "./multipleToastsManager.module.css";

interface IToast {
  id: string;
  title: string;
  message: string;
  duration: number;
}

// const randomToastsEx: IToasts[] = [
//   {
//     id: "000",
//     title: "Title 1",
//     message: "message1",
//     duration: 3500,
//   },
//   {
//     id: "001",
//     title: "Title 2",
//     message: "message2",
//     duration: 3500,
//   },
//   {
//     id: "002",
//     title: "Title 3",
//     message: "message3",
//     duration: 3500,
//   },
//   {
//     id: "003",
//     title: "Title 4",
//     message: "message4",
//     duration: 3500,
//   },
//   {
//     id: "004",
//     title: "Title 5",
//     message: "message5",
//     duration: 3500,
//   },
// ];

export default function MultipleToastsManager() {
  const [toasts, setToasts] = useState<IToast[]>([]);

  const timeOutRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const remainingTimeRef = useRef<number>(3500);

  function showToast() {
    const id = Date.now().toString();
    const duration = 3500;
    remainingTimeRef.current = duration;
    const newToast: IToast = {
      id,
      title: `Title: ${toasts.length}`,
      message: `Message: ${toasts.length}`,
      duration,
    };
    setToasts((prev) => [...prev, newToast]);
    startTimeRef.current = Date.now();

    timeOutRef.current = setTimeout(() => {
      removeToast(id);
    }, duration);
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

  function resumeToast(id: string) {
    startTimeRef.current = Date.now();

    timeOutRef.current = setTimeout(
      () => removeToast(id),
      remainingTimeRef.current
    );
  }

  function removeToast(id: string) {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }

  return (
    <div className={styles.container}>
      <button onClick={showToast}>Show Toast</button>
      <ul className={styles.toastsWrapper}>
        {toasts.map((toast) => (
          <li
            key={toast.id}
            onMouseEnter={pauseToast}
            onMouseLeave={() => resumeToast(toast.id)}
          >
            <MultipleToast title={toast.title} message={toast.message} />
          </li>
        ))}
      </ul>
    </div>
  );
}

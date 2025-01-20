import styles from "./timerToast.module.css"

interface TimerToastProps {
    title: string;
    message: string;
}

export default function TimerToast({message, title}:TimerToastProps) {
    return (
        <div className={styles.toastWrapper}>
            <h3 className={styles.toastTitle}>{title}</h3>
            <p className={styles.toastMessage}>{message}</p>
        </div>
    )
}
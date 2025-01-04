import styles from "./toast.module.css"
interface ToastProps {
  title: string;
  message: string;
  isFading: boolean
}

export default function Toast({ title, message, isFading }: ToastProps) {
  return (
    <div className={`${styles.toastWrapper} ${isFading? styles.fadeOut: ""}`}>
      <h3 className={styles.toastTitle}>{title}</h3>
      <p className={styles.toastMessage}>{message}</p>
    </div>
  );
}

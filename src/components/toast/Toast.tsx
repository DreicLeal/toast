import styles from "./toast.module.css";
interface ToastProps {
  title: string;
  message: string;
}

export default function Toast({ title, message }: ToastProps) {
  return (
    <div className={styles.toastWrapper}>
      <h3 className={styles.toastTitle}>{title}</h3>
      <p className={styles.toastMessage}>{message}</p>
    </div>
  );
}

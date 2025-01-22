import styles from "./multipleToast.module.css";

interface ToastProps {
  title: string;
  message: string;
}
export default function MultipleToast({ title, message}: ToastProps) {


  return (
    <div
      className={styles.toastWrapper}

    >
      <h3 className={styles.toastTitle}>{title}</h3>
      <p className={styles.toastMessage}>{message}</p>
      <div className={styles.lifeTime}></div>
    </div>
  );
}

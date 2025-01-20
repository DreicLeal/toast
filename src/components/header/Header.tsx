import Link from "next/link";
import styles from "./header.module.css";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Link href={"/"}>Home</Link>
      <h1 className={styles.title}>{title}</h1>

      <nav className={styles.navWrapper}>
        <Link href={"/defaultToast"}>Default Toast</Link>
        <Link href={"/timerToast"}>Timer Toast</Link>
        <Link href={"/multipleToast"}>Multiple Toast</Link>
      </nav>
    </header>
  );
}

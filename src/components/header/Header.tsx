import Link from "next/link";
import styles from "./header.module.css";

import Nav from "../nav/Nav";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Link href={"/"}>Home</Link>
      <h1 className={styles.title}>{title}</h1>
      <Nav />
    </header>
  );
}

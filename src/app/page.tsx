import Link from "next/link";
import styles from "./page.module.css";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <div>
      <main>
        <Header title="Home Page" />
        <div className={styles.linksWrapper}>
          <Link href={"/defaultToast"}>Regular toast</Link>
          <Link href={"/timerToast"}>Timer toast</Link>
          <Link href={"/multipleToast"}>Multiple toast</Link>
        </div>
      </main>
    </div>
  );
}

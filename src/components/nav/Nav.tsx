"use client";
import Link from "next/link";
import styles from "./nav.module.css";
import { useEffect, useState } from "react";

export default function Nav() {
  const [innerWidth, setInnerWidth] = useState(0);
  const [hamburguer, setHamburguer] = useState(false);

  useEffect(() => {
    setInnerWidth(window.innerWidth);
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
      if(innerWidth > 570) {
        setHamburguer(false)
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [innerWidth]);

  return (
    <div className={styles.navContainer}>
      {innerWidth <= 570 ? (
        <div
          className={styles.hamburguerMenu}
          onClick={() => setHamburguer(!hamburguer)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <nav className={styles.navWrapper}>
          <Link href={"/defaultToast"}>Default Toast</Link>
          <Link href={"/timerToast"}>Timer Toast</Link>
          <Link href={"/multipleToast"}>Multiple Toast</Link>
        </nav>
      )}
      {hamburguer && (
        <nav className={styles.navFloat}>
            <button onClick={()=> setHamburguer(false)}>X</button>
          <Link href={"/defaultToast"}>Default Toast</Link>
          <Link href={"/timerToast"}>Timer Toast</Link>
          <Link href={"/multipleToast"}>Multiple Toast</Link>
        </nav>
      )}
    </div>
  );
}

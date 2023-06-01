import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <ul>
      <li className={styles.li}>
        <h5>Go to about page:</h5>
        <Link className={styles.a} href="/about">
          About
        </Link>
      </li>
      <li className={styles.li}>
        <h5>Generate an error:</h5>
        <Link className={styles.a} href="/error">
          Error
        </Link>
      </li>
      <li className={styles.li}>
        <h5>Go to admin routes:</h5>
        <Link className={styles.a} href="/account">
          Account
        </Link>
        <Link className={styles.a} href="/someinfo">
          Someinfo
        </Link>
      </li>
    </ul>
  );
}

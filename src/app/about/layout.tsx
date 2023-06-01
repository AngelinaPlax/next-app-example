import Link from "next/link";
import styles from "../page.module.css";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ul>
        <li>
          <Link className={styles.a} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.a} href="/about/contacts">
            Contacts
          </Link>
        </li>
        <li>
          <Link className={styles.a} href="/about/shops">
            Shops
          </Link>
        </li>
      </ul>
      {children}
    </>
  );
}

"use client";

import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  return (
    <>
      <h3>Oops! {error.message}</h3>
      <button className={styles.button} onClick={() => reset()}>
        Retry
      </button>
      <button className={styles.button} onClick={() => router.push("/")}>
        Go to Home
      </button>
    </>
  );
}

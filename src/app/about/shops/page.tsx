import { shops } from "@/app/constants/constants";
import Link from "next/link";
import styles from "../../page.module.css";

export default function Shops() {
  return (
    <>
      <h4>You can choose a shop from following list:</h4>
      <ul>
        {shops.map((shopInfo: IShop) => (
          <li className={styles.li} key={shopInfo.id}>
            <Link className={styles.a} href={`/about/shops/${shopInfo.id}`}>
              {shopInfo.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

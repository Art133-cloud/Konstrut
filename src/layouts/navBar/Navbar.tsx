import styles from "./Navbar.module.css";
import LogoBlack from "@/public/assets/svg/LogoBlack";
import Navigation from "../hamburger/Hamburger";

export const navMenu: string[] = [
  "HOME",
  "ABOUT",
  "SERVICES",
  "WORK",
  "CONTACT",
];

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logoNavbar}>
          <LogoBlack />
      </div>
      <Navigation />
      <ul className={styles.ul}>
        {navMenu.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </nav>
  );
}

import Link from "next/link";
import styles from "./Header.module.css";
import { List, X } from "phosphor-react";
import { useRef, useState } from "react";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className={styles.header}>
      <p className="logo">
        Food<span className="logoJp">JP</span>
      </p>
      <List
        onClick={handleDropdown}
        className={styles.hamburgerIcon}
        size={32}
        weight="bold"
      />
      <div
        className={`${styles.dropdown} ${
          showDropdown ? styles.dropActive : null
        }`}
      >
        <X
          onClick={handleDropdown}
          className={styles.hamburgerIcon}
          size={32}
          weight="bold"
        />
        <ul className={styles.menu}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/cardapio">Cárdapio</Link>
          </li>
          <li>
            <Link href="/sobre">Sobre</Link>
          </li>
        </ul>
        <button className={styles.button}>
          <Link href="/login">Entrar</Link>
        </button>
      </div>
    </header>
  );
};

export default Header;

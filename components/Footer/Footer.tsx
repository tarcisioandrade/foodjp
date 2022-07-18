import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={`logo ${styles.footerLogo}`}>
        Food<span className="logoJp">JP</span>
      </p>

      <div className={styles.footerContent}>
        <ul className={styles.footerNav}>
          <span className={styles.footerTitle}>Contato</span>
          <li>
            <Link href="/">+55 21 9999-9999</Link>
          </li>
          <li>
            <Link href="/">email@gmail.com</Link>
          </li>
        </ul>

        <ul className={styles.footerNav}>
          <span className={styles.footerTitle}>Serviços</span>
          <li>
            <Link href="/">Entrega</Link>
          </li>
          <li>
            <Link href="/">Retirada</Link>
          </li>
        </ul>

        <ul className={styles.footerNav}>
          <span className={styles.footerTitle}>Sobre nós</span>
          <li>
            <Link href="/">Menu</Link>
          </li>
          <li>
            <Link href="/">Valores</Link>
          </li>
          <li>
            <Link href="/">Pagina principal</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

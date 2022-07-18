import { ReactElement } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./Layout.module.css";

interface IProps {
  children: ReactElement;
}

const Layout = ({ children }: IProps) => {
  return (
    <div className={styles.container}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

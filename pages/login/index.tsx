import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>FoodJP | Login</title>
      </Head>
      <form className={styles.form}>
        <h1 className="logo">
          Food<span className="logoJp">JP</span>
        </h1>

        <label className={styles.label}>
          Usuário
          <input className={styles.input} type="text" />
        </label>

        <label className={styles.label}>
          Senha
          <input className={styles.input} type="password" />
        </label>

        <Link href="/" className={styles.button} type="submit">
          <a className={styles.button}>Entrar</a>
        </Link>
      </form>
    </div>
  );
};

export default Login;

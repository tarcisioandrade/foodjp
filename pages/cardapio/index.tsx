import Card from "../../components/Card/Card";
import styles from "../../styles/Cardapio.module.css";
import RamenFrango from "../../public/ramen-frango.png";
import RamenApimentado from "../../public/ramen-apimentado.png";
import RamenTradicional from "../../public/ramen-tradicional.png";
import Layout from "../../components/Layout/Layout";

const Cardapio = () => {
  return (
    <Layout>
      <>
        <section className={styles.cardapio}>
          <h1 className={styles.cardapioTitle}>Cárdapio</h1>
          <div className={styles.cardapioItems}>
            <Card
              src={RamenFrango}
              label="Ramen de Frango"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              price={"29,90"}
            />
            <Card
              src={RamenApimentado}
              label="Ramen Apimentado"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              price={"38,90"}
            />
            <Card
              src={RamenTradicional}
              label="Ramen Apimentado"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              price={"69,90"}
            />
            <Card
              src={RamenApimentado}
              label="Ramen Apimentado"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              price={"38,90"}
            />
            <Card
              src={RamenFrango}
              label="Ramen de Frango"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              price={"29,90"}
            />
            <Card
              src={RamenTradicional}
              label="Ramen Apimentado"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              price={"69,90"}
            />
          </div>
        </section>
      </>
    </Layout>
  );
};

export default Cardapio;

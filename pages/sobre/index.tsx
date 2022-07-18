import Layout from "../../components/Layout/Layout";
import styles from "../../styles/Sobre.module.css";

const Sobre = () => {
  return (
    <Layout>
      <>
        <div className={styles.sobre}>
          <h1 className={styles.sobreTitle}>Sobre Nós</h1>

          <div className={styles.sobreContent}>
            <h3 className={styles.sobreSubTitle}>História</h3>
            <p className={styles.sobreText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              voluptas facilis, assumenda quidem accusantium nemo? Molestias
              tenetur odit voluptatem nulla officiis expedita, soluta cumque,
              nam, reiciendis natus ratione. Aspernatur aperiam fugiat totam
              natus excepturi corporis tempora fugit tenetur voluptatem eaque
              aliquam officia, iure sit? Quod sint blanditiis cupiditate
              deleniti voluptatibus.
            </p>

            <h3 className={styles.sobreSubTitle}>Missão</h3>
            <p className={styles.sobreText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              aspernatur ea soluta consectetur quas deleniti.
            </p>
            <h3 className={styles.sobreSubTitle}>Visão</h3>
            <p className={styles.sobreText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              fugit.
            </p>
            <h3 className={styles.sobreSubTitle}>Valores</h3>
            <p className={styles.sobreText}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
              cupiditate hic accusamus aut quis repellendus voluptate nesciunt
              inventore in. A deleniti neque cupiditate.
            </p>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Sobre;

import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import IntroPrato from "../public/introPrato.png";
import IntroPratoMobile from "../public/introPratoMobile.png";
import RamenFrango from "../public/ramen-frango.png";
import RamenApimentado from "../public/ramen-apimentado.png";
import RamenTradicional from "../public/ramen-tradicional.png";
import Avatar1 from "../public/avatar1.png";
import Avatar2 from "../public/avatar2.png";
import Mapa from "../public/mapa.png";
import MapaMobile from "../public/mapa-mobile.png";
import Sushi from "../public/sushi.png";
import Link from "next/link";
import Card from "../components/Card/Card";
import Comment from "../components/Comment/Comment";
import { MapPin, MagnifyingGlass } from "phosphor-react";
import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";

const Home: NextPage = () => {
  const [sizeWindow, setSizeWindow] = useState<number>(0);

  useEffect(() => {
    const getWindowSize = () => {
      setSizeWindow(window.innerWidth);
    };
    getWindowSize();
    window.addEventListener("resize", getWindowSize);

    return () => window.removeEventListener("resize", getWindowSize);
  }, []);

  return (
    <Layout>
      <>
        <section className={styles.intro}>
          <div className={styles.introFirst}>
            <div className={styles.introContent}>
              <h1 className={styles.introTitle}>Comida Oriental</h1>
              <p className={styles.introText}>
                A culinária Japonesa é bastante equilibrada, sendo muito rica em
                peixes (ômega 3), vegetais, massas e ingredientes frescos.
              </p>
              <Link href="/cardapio">
                <a className={styles.introButton}>Cardápio</a>
              </Link>
            </div>
            <div className={styles.introImage}>
              <Image src={Sushi} alt="Sushi" />
            </div>
          </div>
          <div className={styles.introSecond}>
            <div className={styles.introSecondImage}>
              <div className={styles.imageDesktop}>
                <Image src={IntroPrato} alt="Prato" layout="responsive" />
              </div>
              <div className={styles.imageMobile}>
                <Image src={IntroPratoMobile} alt="Prato" layout="responsive" />
              </div>
            </div>
            <div className={styles.introSecondContent}>
              <h1 className={styles.introSTitle}>Feita de Forma Tradicional</h1>
              <p className={styles.introSText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <Link href="www.google.com">
                <a className={styles.introSLink}>
                  Ler mais sobre o modo de preparo
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section className={styles.popul}>
          <h1 className={styles.populTitle}>Mais Populares</h1>
          <div className={styles.populCards}>
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
          </div>
        </section>
        <section className={styles.comments}>
          <h1 className={styles.commentsTitle}>Comentários</h1>
          <div className={styles.commentsCards}>
            <Comment
              avatar={Avatar1}
              name="Daniele Almeida"
              body="Ótimo serviço! Encantada com a qualidade dos pratos."
              stars={5}
            />
            <Comment
              avatar={Avatar2}
              name="Ricardo França"
              body="Não é apenas a comida excelente, o serviço torna a experiência especial."
              stars={4}
            />
          </div>
        </section>
        <section className={styles.location}>
          <h1 className={styles.locationTitle}>Localização</h1>
          <div className={styles.locationMap}>
            <Image src={Mapa} alt="Mapa" layout="responsive" />
          </div>
          <div className={styles.locationMapMobile}>
            <Image
              src={MapaMobile}
              alt="MapaMobile"
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className={styles.locationInput}>
            <MapPin size={sizeWindow < 1024 ? 24 : 32} color="#da2535" />
            <input type="text" placeholder="Localização para entrega" />
            <span className={styles.locationSearch}>
              {sizeWindow < 1024 ? (
                <MagnifyingGlass size={24} color="#fbfbfb" weight="bold" />
              ) : (
                "Buscar"
              )}
            </span>
          </div>
        </section>
      </>
    </Layout>
  );
};

export default Home;

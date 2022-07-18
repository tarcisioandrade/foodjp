import Image, { StaticImageData } from "next/image";
import styles from "./Card.module.css";

interface IProps {
  src: StaticImageData;
  label: string;
  body: string;
  price: number | string;
}

const Card = ({ src, label, body, price }: IProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image src={src} alt={label} />
      </div>
      <h2 className={styles.label}>{label}</h2>
      <p className={styles.body}>{body}</p>
      <p  className={styles.price}>R$ {price}</p>
    </div>
  );
};

export default Card;

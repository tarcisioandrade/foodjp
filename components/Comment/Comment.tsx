import Image, { StaticImageData } from "next/image";
import styles from "./Comment.module.css";
import { Star } from "phosphor-react";

interface IProps {
  avatar: StaticImageData;
  name: string;
  body: string;
  stars: number;
}

const Comment = ({ avatar, name, body, stars }: IProps) => {
  let star = "".padStart(stars, ".").split("");

  return (
    <div className={styles.cardComment}>
      <Image src={avatar} alt={name} />
      <p className={styles.name}>{name}</p>
      <p className={styles.body}>{body}</p>
      <div className={styles.stars}>
        {star.map((__, index) => (
          <Star
            style={{ margin: "0 3px" }}
            key={index}
            size={18}
            weight="fill"
            color="#da2535"
          />
        ))}
      </div>
    </div>
  );
};

export default Comment;

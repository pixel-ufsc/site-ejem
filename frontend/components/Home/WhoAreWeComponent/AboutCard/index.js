import styles from "./aboutcard.module.css";
import Image from "next/image";
import missao from "../../../../public/home/cards_whoarewe/missao.png";
import valores from "../../../../public/home/cards_whoarewe/valores.png";
import visao from "../../../../public/home/cards_whoarewe/visao.png";


export default function AboutCard({title, children}) {
    const cardImage = {
        "Missão": missao,
        "Visão": visao,
        "Valores": valores 
    }
    return(
        <div className={styles.cardDiv}>
            <div className={styles.titleImageDiv}>
                <Image className={styles.image} src={cardImage[title]} width="119" height="119" alt={title}></Image>
                <p className={styles.cardTitle}>{title}</p>
            </div>
            <div className={styles.cardText}>
                {children}
            </div>
        </div>
    );
    
}
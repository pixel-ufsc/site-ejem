import Image from "next/image";
import styles from "./card.module.css";

export default function OurFeedBackComponent({nome, textoFeedback, foto}) {
    return(
        <section className={styles.section2}>
            <div className={styles.sectionContainer}>
                <div className={styles.imageContainer}>
                    <Image src={foto} width="326" height="207" alt="feedback"></Image>
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.name}>{nome}</div>
                    <div className={styles.description}>
                        {textoFeedback}
                    </div>
                </div>
            </div>
        </section>
    )
}
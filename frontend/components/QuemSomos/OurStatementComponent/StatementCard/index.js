import Image from "next/image";
import styles from "./card.module.css";

export default function StatementCard({nome, cargo, textoDepoimento, foto}) {
    // console.log(foto)
    return(
        <section className={styles.section2}>
            <div className={styles.sectionContainer}>
                <div className={styles.imageContainer}>
                    <Image className={styles.image} src={foto} width="280" height="210"  alt="depoimentos"></Image>
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.titleContainer}>
                        <div className={styles.name}>{nome}</div>
                        <div className={styles.job}>/ {cargo}</div>
                    </div>
                    <div className={styles.description}>
                        {textoDepoimento}
                    </div>
                </div>
            </div>
        </section>
    )
}
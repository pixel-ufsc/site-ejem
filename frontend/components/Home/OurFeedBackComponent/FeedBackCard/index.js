import styles from "./card.module.css";

export default function OurFeedBackComponent({nome, textoFeedback, foto}) {
    return(
        <section className={styles.section2}>
            <div className={styles.sectionContainer}>
                <div className={styles.imageContainer}>
                    <img src={foto} width="326" height="207" alt="feedback"></img>
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
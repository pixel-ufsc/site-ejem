import styles from "./card.module.css";

export default function OurFeedBackComponent() {
    return(
        <section className={styles.section}>
            <div className={styles.imageContainer}>
                <div>imagem</div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.name}>Titulo</div>
                <div className={styles.description}>
                    Diretora de comercial
                </div>
            </div>
        </section>
    )
}
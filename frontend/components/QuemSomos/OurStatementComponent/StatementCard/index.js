import styles from "./card.module.css";

export default function StatementCard() {
    return(
        <section className={styles.section2}>
            <div className={styles.imageContainer}>
                <div className={styles.image}>imagem</div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.name}>Titulo</div>
                <div className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt viverra volutpat nec turpis viverra. Neque, dolor, non aliquam egestas. Ut vulputate sagittis amet, adipiscing est in. Ornare arcu tempus nunc at aliquet adipiscing quis sed. A donec risus lorem leo scelerisque lorem eget. Pretium integer aliquam bibendum tellus viverra eget in. Iaculis tincidunt nunc, a vitae, integer et massa.
                </div>
            </div>
        </section>
    )
}
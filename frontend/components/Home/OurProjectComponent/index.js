import styles from './ourproject.module.css';

export default function OurProjectComponent() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.info}>+200</div>
                <div className={styles.description}>Projetos realizados</div>
            </div>
            <div className={styles.container}>
                <div className={styles.info}>9.5</div>
                <div className={styles.description}>NPS</div>
            </div>
            <div className={styles.container}>
                <div className={styles.info}>+100</div>
                <div className={styles.description}>Projetos de impacto</div>
            </div>
        </section>
    );
}

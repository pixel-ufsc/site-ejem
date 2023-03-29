import styles from './ourproject.module.css';

export default function OurProjectComponent({ numeroProjetosData }) {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.info}>{numeroProjetosData.Projetos_realizados}</div>
                <div className={styles.description}>Projetos realizados</div>
            </div>
            <div className={styles.container}>
                <div className={styles.info}>{numeroProjetosData.NPS}</div>
                <div className={styles.description}>NPS</div>
            </div>
            <div className={styles.container}>
                <div className={styles.info}>{numeroProjetosData.Projetos_impactos}</div>
                <div className={styles.description}>Projetos de impacto</div>
            </div>
        </section>
    );
}


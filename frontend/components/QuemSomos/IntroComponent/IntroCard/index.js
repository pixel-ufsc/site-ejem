import styles from './introCard.module.css';

export default function IntroComponent() {
    return (
        <section className={styles.cards}>
            <section className={styles.section}>
                <div className={styles.title}>Missão</div>
                <div className={styles.description}>
                    Impactar a sociedade e, a partir de conhecimentos obtidos na graduação, difundir a engenharia de
                    materiais ao formar líderes e profissionais capacitados em trazer soluções eficazes aos clientes.
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.title}>Visão</div>
                <div className={styles.description}>
                    Tornar a EJEM uma empresa referência em engenharia de materiais, mercado, meio acadêmico e movimento
                    empresa júnior.
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.title}>Valores</div>
                <div className={styles.description}>
                    União
                    <br /> Propósito
                    <br /> Excelência
                    <br /> Proatividade Transparência
                    <br /> Comprometimento
                </div>
            </section>
        </section>
    );
}

import styles from './intro.module.css';
import IntroCard from './IntroCard';

export default function IntroComponent() {
    return (
        <section className={styles.section}>
            <div className={styles.text}>
                Somos uma empresa que busca, por meio da vivência empresarial, líderes empreendedores que impactam a
                sociedade e aspiram por um mercado mais competitivos e capaz de fornecer{' '}
                <b>produtos e serviços de qualidade.</b>
                <br />
                <br />
                Para nós, que somos movidos a superação, tornamos isso realidade desenvolvendo{' '}
                <b>soluções práticas e inovadoras</b> que alavancam resultados de empresas de diversos setores.
                <br />
                <br />
                Assim, através de <b>consultorias na área de Engenharia de Materiais</b> e de acordo com a necessidade
                de cada cliente, entregamos um trabalho personalizado de excelência com impacto positivo em sua empresa.
            </div>
            <div className={styles.cards}>
                <IntroCard />
            </div>
        </section>
    );
}

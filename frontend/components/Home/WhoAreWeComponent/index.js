import AboutCard from "./AboutCard";
import styles from "./whoarewe.module.css";

export default function WhoAreWeComponent() {
    
    return (
        <section className={styles.section}>
            <div className={styles.title}>Quem somos?
            <div className={styles.titleUnderline}></div>
            </div>
            <div className={styles.whoAreWeTextDiv}>
                <p className={styles.whoAreWeText}>Somos uma empresa que busca, por meio da vivência empresarial, líderes empreendedores que impactam a sociedade e aspiram por um mercado mais competitivos e capaz de fornecer <b>produtos e serviços de qualidade.</b></p>
                <p className={styles.whoAreWeText}>Para nós, que somos movidos a superação, tornamos isso realidade desenvolvendo <b>soluções práticas e inovadoras</b> que alavancam resultados de empresas de diversos setores.</p>
                <p className={styles.whoAreWeText}>Assim, através de <b>consultorias na área de Engenharia de Materiais</b> e de acordo com a necessidade de cada cliente, entregamos um trabalho personalizado de excelência com impacto positivo em sua empresa.</p>
            </div>
            <div className={styles.cardsDiv}>
                <AboutCard title={"Missão"}>
                    <p>Impactar a sociedade e, a partir de conhecimentos obtidos na graduação, difundir a engenharia de materiais ao formar líderes e profissionais capacitados em trazer soluções eficazes aos clientes. </p>
                </AboutCard>
                <AboutCard title={"Visão"}>
                    <p>Tornar a EJEM uma empresa referência em engenharia de materiais, mercado, meio acadêmico e movimento empresa júnior.</p>
                </AboutCard>
                <AboutCard title={"Valores"}>
                    <p>União</p>
                    <p>Propósito</p> 
                    <p>Excelência</p>
                    <p>Proatividade</p>
                    <p>Transparência</p>
                    <p>Comprometimento</p>
                </AboutCard>
            </div>
        </section>
    );

}
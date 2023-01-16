import styles from "./oursolutions.module.css";
import Image from 'next/image'
import card1 from '../../../public/home/cards_solutions/card1.png'
import card2 from '../../../public/home/cards_solutions/card2.png'
import card3 from '../../../public/home/cards_solutions/card3.png'
import card4 from '../../../public/home/cards_solutions/card4.png'
import card5 from '../../../public/home/cards_solutions/card5.png'
import Link from 'next/link'

export default function OurSolutionsComponent() {
    return(
        <section className={styles.section}>
            <div className={styles.text}>Conheça nossas soluções</div>
            <div className={styles.card_container}>
                <div className={styles.card}>
                    <div className={styles.card_image}>
                        <Link href="/"><Image src={card1} alt="card1"/></Link>
                    </div>
                    <div className={styles.card_text}>Caracterização de materiais</div>
                    <div className={styles.card_description}>
                    São utilizados em materiais para determinar suas propriedades e desempenho, pois a partir das propriedades é possível determinar a melhor aplicação.
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.card_image}>
                        <Link href="/"><Image src={card2} alt="card2"/></Link>
                    </div>
                    <div className={styles.card_text}>Ensaios Mecânicos</div>
                    <div className={styles.card_description}>
                    Os ensaios mecânicos são utilizados em materiais para determinar suas propriedades e desempenho, pois a partir das propriedades é possível determinar a melhor aplicação.
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.card_image}>
                        <Link href="/"><Image src={card3} alt="card3"/></Link>
                    </div>
                    <div className={styles.card_text}>Análise de Falhas</div>
                    <div className={styles.card_description}>
                    Método utilizado para prevenir e/ou analisar não conformidades em projetos, processos ou produtos. A quebra de equipamentos e fatura em produtos, sem aviso prévio, podem ser evitados e estudados, visando a redução de custos e melhorando o desempenho da empresa.
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.card_image}>
                        <Link href="/"><Image src={card4} alt="card4"/></Link>
                    </div>
                    <div className={styles.card_text}>Gestão de Resíduos</div>
                    <div className={styles.card_description}>
                    Baseado em ações como reaproveitamento ou descarte correto de resíduos e reutilização do resíduo em processos da empresa (Logística Reversa). Também é uma consultoria que visa a redução de custos e do impacto ambiental gerado.
                    </div>
                </div>

                <div className={styles.card_last}>
                    <div className={styles.card_image}>
                        <Link href="/"><Image src={card5} alt="card5"/></Link>
                    </div>
                    <div className={styles.card_text}>Otimização de Materiais e Processos</div>
                    <div className={styles.card_description}>
                    Consultoria que visa aumento da produtividade, aumento da performance, previne o super ou o sub dimensionamento de processos e redução de custos de produção.
                    </div>
                </div>
            </div>
        </section>
    )
}

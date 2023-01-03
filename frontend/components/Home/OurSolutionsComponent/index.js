import styles from "./oursolutions.module.css";
import Image from 'next/image'
import card1 from '../../../public/home/cards_solutions/card1.png'
import card2 from '../../../public/home/cards_solutions/card2.png'
import card3 from '../../../public/home/cards_solutions/card3.png'
import card4 from '../../../public/home/cards_solutions/card4.png'
import card5 from '../../../public/home/cards_solutions/card5.png'
import wpp_icon from '../../../public/home/cards_solutions/wpp_icon.png'

export default function OurSolutionsComponent() {
    return(
        <section className={styles.section}>
            <div className={styles.text}>Conheça nossas soluções</div>
            <a className={styles.icon} href="/"><Image src={wpp_icon} alt="wpp"/></a>
            <div className={styles.card_container}>
                <div className={styles.card}>
                    <div className={styles.card_image}>
                        <a href="/"><Image src={card1} alt="card1"/></a>
                    </div>
                    <div className={styles.card_text}>Caracterização de materiais</div>
                </div>

                <div className={styles.card}>
                    <div className={styles.card_image}>
                        <a href="/"><Image src={card2} alt="card2"/></a>
                    </div>
                    <div className={styles.card_text}>Ensaios Mecânicos</div>
                </div>

                <div className={styles.card}>
                    <div className={styles.card_image}>
                        <a href="/"><Image src={card3} alt="card3"/></a>
                    </div>
                    <div className={styles.card_text}>Análise de Falhas</div>
                </div>

                <div className={styles.card}>
                    <div className={styles.card_image}>
                        <a href="/"><Image src={card4} alt="card4"/></a>
                    </div>
                    <div className={styles.card_text}>Gestão de Resíduos</div>
                </div>

                <div className={styles.card_last}>
                    <div className={styles.card_image}>
                        <a href="/"><Image src={card5} alt="card5"/></a>
                    </div>
                    <div className={styles.card_text}>Otimização de Materiais e Processos</div>
                </div>
            </div>
        </section>
    )
}
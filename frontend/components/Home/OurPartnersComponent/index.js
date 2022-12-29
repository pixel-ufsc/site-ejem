import styles from "./ourpartners.module.css";
import Image from 'next/image'
import Logo_Docol from '../../../public/home/partners/Logo_Docol.png'
import Logo_Eletrobras from '../../../public/home/partners/Logo_Eletrobras.png'
import Logo_Intelbras from '../../../public/home/partners/Logo_Intelbras.png'

export default function OurPartnersComponent() {
    return(
        <section className={styles.section}>
           <div className={styles.title}>Com quem já trabalhamos</div>
           <div className={styles.images}>
                <Image className={styles.image} src={Logo_Intelbras} alt="Logo_Intelbras"/>
                <Image className={styles.image} src={Logo_Docol} alt="Logo_Docol"/>
                <Image className={styles.image} src={Logo_Eletrobras} alt="Logo_Eletrobras"/>
           </div>
        </section>
    )
}
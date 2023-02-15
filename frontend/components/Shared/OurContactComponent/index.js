import styles from "./ourcontact.module.css";
import Image from 'next/image'
import email from '../../../public/home/contact/email.png'
import phone from '../../../public/home/contact/phone.png'
import wpp from '../../../public/home/contact/wpp.png'
import orçamento from '../../../public/home/contact/orcamento.png'
import Link from 'next/link'


export default function OurContactComponent() {
    return(
        <section className={styles.section}>
            <div className={styles.contact_txt}>
                <div className={styles.txt1}>Entre em contato conosco!</div>
                <Link href="/" className={styles.txt2_container}>
                    <Image src={orçamento} alt="orçamento"/>
                    <div className={styles.txt2}>Solicite seu orçamento gratuito</div>
                </Link>
            </div>
            <div className={styles.items}>
                <div className={styles.item_icon}>
                    <div  href="/"><Image className={styles.image} src={email} alt="email"/></div>
                    <div className={styles.item_txt}>contato@ejem.com.br</div>
                </div>
                <div className={styles.item_icon}>
                    <div href="/"><Image className={styles.image} src={phone} alt="phone"/></div>
                    <div className={styles.item_txt}>(48) 3721-4014</div>
                </div>
                <div className={styles.item_icon}>
                    <div href="/"><Image className={styles.image} src={wpp} alt="wpp"/></div>
                    <div className={styles.item_txt}>(67) 99821-2102</div>
                </div>  
            </div>
        </section>
    )
}

import styles from "./ourcontact.module.css";
import Image from 'next/image'
import email from '../../../public/home/contact/email.png'
import phone from '../../../public/home/contact/phone.png'
import wpp from '../../../public/home/contact/wpp.png'


export default function OurSolutionsComponent() {
    return(
        <section className={styles.section}>
            <div>
                <div>Entre em contato conosco!</div>
                <div>Solicite seu orçamento gratuito</div>
            </div>
            <div>
                <a href="/"><Image src={email} alt="email"/></a>
                <div>contato@ejem.com.br</div>
            </div>
            <div>
                <a href="/"><Image src={phone} alt="phone"/></a>
                <div>(48) 3721-4014</div>
            </div>
            <div>
                <a href="/"><Image src={wpp} alt="wpp"/></a>
                <div>(67) 99821-2102</div>
            </div>
        </section>
    )
}
import styles from './ourcontact.module.css';
import Image from 'next/image';
import email from '../../../public/home/contact/email.png';
import phone from '../../../public/home/contact/phone.png';
import wpp from '../../../public/home/contact/wpp.png';
import orçamento from '../../../public/home/contact/orcamento.png';
import Link from 'next/link';

export default function OurContactComponent({ contatoData }) {
    return (
        <section className={styles.container}>
            <div className={styles.contactUs}>
                <h2>Entre em contato conosco!</h2>
                <Link href="/contato" className={styles.contactUsButton}>
                    <Image src={orçamento} alt="orçamento" />
                    <h3>Entre em contato para diagnóstico</h3>
                </Link>
            </div>

            <div className={styles.contactInfo}>
                <div className={styles.contactInfoItem}>
                    <Image className={styles.image} src={email} alt="Email Icon" />
                    <h5>{contatoData.email}</h5>
                </div>
                <div className={styles.contactInfoItem}>
                    <Image className={styles.image} src={phone} alt="Phone Icon" />
                    <h5>{contatoData.telefone}</h5>
                </div>
                <div className={styles.contactInfoItem}>
                    <Image className={styles.image} src={wpp} alt="Whatsapp Icon" />
                    <h5>{contatoData.whatsapp_telefone}</h5>
                </div>
            </div>
        </section>
    );
}

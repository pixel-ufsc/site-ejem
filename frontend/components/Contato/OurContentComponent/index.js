import styles from './ourcontent.module.css';
import Image from 'next/image';
import email from '../../../public/home/contact/email.png';
import phone from '../../../public/home/contact/phone.png';
import wpp from '../../../public/home/contact/wpp.png';
import location from '../../../public/contato/content/location.png';
import OurFormComponent from './OurFormComponent';
import Link from 'next/link';

export default function OurContentComponent( { contatoData } ) {
    return (
        <section className={styles.section}>
            <div className={styles.sectionContent}>
                <div className={styles.titleContainer}>
                    <div className={styles.title}>
                        Precisa de uma solução? <br />
                        Entre em contato conosco para realizar um{' '}
                        <span className={styles.wordColor}>orçamento gratuito!</span> <br />
                    </div>
                </div>

                <div className={styles.subtitle}>
                    Preencha o formulário ao lado ou nos contate das seguintes formas:
                </div>

                <div className={styles.items}>
                    <div className={styles.item_icon}>
                        <div href="/">
                            <Image className={styles.image} src={email} alt="email" />
                        </div>
                        <div className={styles.item_txt}>{contatoData.email}</div>
                    </div>
                    <div className={styles.item_icon}>
                        <div href="/">
                            <Image className={styles.image} src={phone} alt="phone" />
                        </div>
                        <div className={styles.item_txt}>{contatoData.telefone}</div>
                    </div>
                    <div className={styles.item_icon}>
                        <div href="/">
                            <Image className={styles.image} src={wpp} alt="wpp" />
                        </div>
                        <div className={styles.item_txt}>{contatoData.whatsapp_telefone}</div>
                    </div>
                </div>
                <div className={styles.subtitle}>Ou venha nos visitar!</div>
                <div className={styles.location}>
                    <Link href="/">
                        <Image className={styles.image} src={location} alt="location" />
                    </Link>
                    <div className={styles.subtitle2}>
                        {contatoData.endereco}
                    </div>
                </div>
            </div>

            <div className={styles.sectionForm}>
                <OurFormComponent />
            </div>
        </section>
    );
}

import Link from 'next/link';
import Image from 'next/image';
import styles from './contactbutton.module.css';
import orcamento from '../../../../public/home/contact/orcamento.png';

export default function ContactButton() {
    return (
        <Link href="/contato" className={styles.contactButton}>
            <Image src={orcamento} alt="orçamento" />
            <h4>Entre em contato para diagnóstico!</h4>
        </Link>
    );
}

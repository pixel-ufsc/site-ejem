import Link from "next/link";
import Image from "next/image";
import styles from "./contactbutton.module.css"
import orcamento from "../../../../public/home/contact/orcamento.png"

export default function ContactButton () {
    return (
            <div className={styles.contactButtonDiv}>
                <Link href="/contato" className={styles.contactButton}>
                    <Image src={orcamento} alt="orçamento" />
                    <h3>Entre em contato!</h3>
                </Link>
            </div>
    );
}
import Image from 'next/image';
import styles from './card.module.css';
// import Image from 'next/image'

export default function MembersCard({ nome, cargo, foto }) {
    // console.log(foto)
    return (
        <section className={styles.sectionOutside}>
            <section className={styles.section}>
                <div className={styles.imageContainer}>
                    <Image fill src={foto} alt="Membros" className={styles.image} unoptimized />
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.name}>{nome}</div>
                    <div className={styles.description}>{cargo}</div>
                </div>
            </section>
        </section>
    );
}

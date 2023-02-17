import Image from 'next/image';
import styles from './card.module.css';

export default function StatementCard({ title, subtitle, description, imageUrl }) {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <Image src={imageUrl} alt="Imagem depoimento" width="280" height="210" className={styles.image} />

                <div className={styles.textContent}>
                    <div className={styles.titleContainer}>
                        <h3 className={styles.name}>{title}</h3>
                        {subtitle && <h4 className={styles.job}>/ {subtitle}</h4>}
                    </div>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

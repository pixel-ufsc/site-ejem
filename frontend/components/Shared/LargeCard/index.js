import Image from 'next/image';
import styles from './card.module.css';

export default function StatementCard({ title, subtitle, description, imageUrl }) {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <Image fill src={imageUrl} alt="Imagem depoimento" className={styles.image} unoptimized />
                </div>

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

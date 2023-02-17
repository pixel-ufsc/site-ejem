import styles from './mainpartner.module.css';
import Image from 'next/image';

export default function MainPartner({ title, text, imageUrl, alt }) {
    return (
        <div className={styles.container}>
            {title && <h1>{title}</h1>}
            <div className={styles.contentContainer}>
                <p>{text}</p>
                <div className={styles.imageContainer}>
                    <Image src={imageUrl} alt={alt} className={styles.image} />
                </div>
            </div>
        </div>
    );
}

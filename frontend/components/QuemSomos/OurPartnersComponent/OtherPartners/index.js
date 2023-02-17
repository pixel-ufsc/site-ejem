import styles from './otherpartners.module.css';
import P from 'prop-types';
import Image from 'next/image';

export default function OtherPartners({ title, imageUrls }) {
    return (
        <div className={styles.container}>
            <h1>{title}</h1>
            <div className={styles.imagesContainer}>
                {typeof imageUrls === 'object' &&
                    imageUrls.length > 0 &&
                    imageUrls.map((imageUrl, index) => <Image key={index} className={styles.image} src={imageUrl} />)}
            </div>
        </div>
    );
}

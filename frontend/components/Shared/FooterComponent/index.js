import styles from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function FooterComponent({ redesSociaisData }) {
    return (
        <footer className={styles.container}>
            <div className={styles.contentContainer}>
                <div className={styles.logo}>
                    <Image width={169} height={75} src="/shared/Footer/logo.png" alt="ejem" />
                </div>
                <div className={styles.socialMedia}>
                    <Link href={redesSociaisData.linkWhatsapp} target="_blank">
                        <Image width={25} height={25} src="/shared/Footer/wpp.png" alt="whatsapp" />
                    </Link>
                    <Link href={redesSociaisData.linkInstagram} target="_blank">
                        <Image width={25} height={25} src="/shared/Footer/insta.png" alt="instagram" />
                    </Link>
                    <Link href={redesSociaisData.linkLinkedin} target="_blank">
                        <Image width={25} height={25} src="/shared/Footer/linkedin.png" alt="linkedin" />
                    </Link>
                </div>
            </div>

            <p className={styles.informationText}>Desenvolvido por Pixel - Soluções Digitais</p>
        </footer>
    );
}


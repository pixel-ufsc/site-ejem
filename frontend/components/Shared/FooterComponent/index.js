import styles from "./footer.module.css";
import Image from 'next/image'
import Link from 'next/link'

export default function FooterComponent() {
  return (
    <footer className={styles.footerContainer}>
        <div className={styles.leftContainer}>
            <div className={styles.logo}>
                <Image width={169} height={75} src="/shared/Footer/logo.png" alt="logo" />
            </div>
            <div className={styles.socialMedia}>
                <Link
                href="/"
                target="_blank"
                >
                    <Image width={25} height={25} src="/shared/Footer/wpp.png" alt="wpp"/>
                </Link>
                <Link
                href="/"
                target="_blank"
                >
                    <Image width={25} height={25} src="/shared/Footer/insta.png" alt="insta"/>
                </Link>
                <Link
                href="/"
                target="_blank"
                >
                    <Image width={25} height={25} src="/shared/Footer/linkedin.png" alt="linkedin" />
                </Link>
            </div>
        </div>

        <div className={styles.info}>
            <div>Desenvolvido por Pixel - Soluções Digitais</div>
        </div>
    </footer>
  );
}


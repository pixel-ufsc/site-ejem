import styles from "./footer.module.css";
import Image from 'next/image'
import Link from 'next/link'

export default function FooterComponent() {
  return (
    <footer className={styles.footerContainer}>
        <div className={styles.leftContainer}>
            <div className={styles.logo}>
                <Image width={169} height={75} src="/shared/footer/logo.png" />
            </div>
            <div className={styles.socialMedia}>
                <Link
                href="/"
                target="_blank"
                >
                    <Image width={25} height={25} src="/shared/footer/wpp.png" />
                </Link>
                <Link
                href="/"
                target="_blank"
                >
                    <Image width={25} height={25} src="/shared/footer/insta.png" />
                </Link>
                <Link
                href="/"
                target="_blank"
                >
                    <Image width={25} height={25} src="/shared/footer/linkedin.png" />
                </Link>
            </div>
        </div>

        <div className={styles.info}>
            <div>Desenvolvido por Pixel - Soluções Digitais</div>
        </div>
    </footer>
  );
}


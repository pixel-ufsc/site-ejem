import styles from "./footer.module.css";

export default function FooterComponent() {
  return (
    <footer className={styles.footerContainer}>
        <div className={styles.leftContainer}>
            <div className={styles.logo}>
                <img src="/shared/footer/logo.png" />
            </div>
            <div className={styles.socialMedia}>
                <a
                href="/"
                target="_blank"
                >
                    <img src="/shared/footer/wpp.png" />
                </a>
                <a
                href="/"
                target="_blank"
                >
                    <img src="/shared/footer/insta.png" />
                </a>
                <a
                href="/"
                target="_blank"
                >
                    <img src="/shared/footer/linkedin.png" />
                </a>
            </div>
        </div>

        <div className={styles.info}>
            <div>Desenvolvido por Pixel - Soluções Digitais</div>
        </div>
    </footer>
  );
}


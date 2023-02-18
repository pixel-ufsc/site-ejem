import styles from './topBanner.module.css';

function TopBanner({ bgOption, children }) {
    const bgOptions = {
        home: '/shared/TopBanner/back_HOME.png',
        quemSomos: '/shared/TopBanner/back_QUEM-SOMOS.png',
        solucao: '/shared/TopBanner/back_SOLUCAO.png',
    };

    return (
        <section>
            <div
                className={styles.container}
                style={{
                    backgroundImage: `url(${bgOptions[bgOption]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {children}
            </div>
        </section>
    );
}

export default TopBanner;

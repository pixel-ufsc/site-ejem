import styles from './navbar.module.css';
import logo from '../../../public/shared/logo.png';
import Image from 'next/image';
import Link from 'next/link';

export default function NavigationBar() {
    return (
        <>
            <nav className={styles.nav}>
                <Link href="/" className="logoContainer">
                    <Image src={logo} alt="logo" className={styles.logo} />
                </Link>
                <div className={styles.navBar}>
                    <Link href="/quem-somos" className={styles.item}>
                        QUEM SOMOS
                    </Link>
                    <Link href="/blog" className={styles.item}>
                        BLOG
                    </Link>
                    <div className={styles.dropdown}>
                        <div className={styles.item}>
                            SOLUÇÕES
                            <svg className={styles.svg_triangle} width="10" height="12">
                                <polygon points="0,0 10,0 5,12" />
                            </svg>
                        </div>

                        <div className={styles.dropdown_content}>
                            <Link href="/solucoes/caracterizacao-de-materiais">Caracterização de materiais</Link>
                            <Link href="/solucoes/ensaios-mecanicos">Ensaios mecânicos</Link>
                            <Link href="/solucoes/analise-de-falhas">Análise de falhas</Link>
                            <Link href="/solucoes/gestao-de-residuos">Gestão de resíduos</Link>
                            <Link href="/Otimização de materiais e processos">Otimização de materiais e processos</Link>
                        </div>
                    </div>

                    <Link href="/contato" className={styles.item}>
                        CONTATO
                    </Link>
                </div>
            </nav>
            <nav className={styles.mobileNavBar}>
                <div className={styles.menuToggle}>
                    <input type="checkbox" className={styles.checkb} />

                    <span></span>
                    <span></span>
                    <span></span>

                    <ul className={styles.menu}>
                        <Link href="/quem-somos">
                            <li>QUEM SOMOS</li>
                        </Link>
                        <Link href="/blog">
                            <li>BLOG</li>
                        </Link>
                        <Link href="/solucoes">
                            <li>SOLUÇÕES</li>
                        </Link>
                        <Link href="/contato">
                            <li>CONTATO</li>
                        </Link>
                    </ul>
                </div>
            </nav>
        </>
    );
}

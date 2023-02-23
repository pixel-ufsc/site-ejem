import { useState } from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
// Assets
import logo from '../../../public/shared/logo.png';
import Hamburger from 'hamburger-react';
import { DropdownButton } from './DropdownButton';
// Components

export default function NavigationBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = (status) => {
        setIsMenuOpen(status);
    };

    return (
        <nav className={styles.container}>
            <div className={styles.topContent}>
                <div className={styles.logoContainer}>
                    <Link href="/">
                        <Image src={logo} alt="logo" className={styles.logo} />
                    </Link>
                </div>
                <div className={styles.hamburgerContainer}>
                    <Hamburger color={'#FFF'} onToggle={(status) => handleMenuToggle(status)} />
                </div>
            </div>
            <div className={`${styles.bottomContent} ${isMenuOpen ? styles.menuActive : ''}`}>
                <ul className={styles.itemsList}>
                    <li>
                        <Link href="/quem-somos">QUEM SOMOS?</Link>
                    </li>
                    <li>
                        <Link href="/blog">BLOG</Link>
                    </li>
                    <li>
                        <DropdownButton label="SOLUÇÕES">
                            <DropdownButton.Item>
                                <Link href="/solucao/caracterizacao-de-materiais">Caracterização de materiais</Link>
                            </DropdownButton.Item>
                            <DropdownButton.Item>
                                <Link href="/solucao/ensaios-mecanicos">Ensaios mecânicos</Link>
                            </DropdownButton.Item>
                            <DropdownButton.Item>
                                <Link href="/solucao/analise-de-falhas">Análise de falhas</Link>
                            </DropdownButton.Item>
                            <DropdownButton.Item>
                                <Link href="/solucao/gestao-de-residuos">Gestão de resíduos</Link>
                            </DropdownButton.Item>
                            <DropdownButton.Item>
                                <Link href="/solucao/otimizacao-de-materiais-e-processos">
                                    Otimização de materiais e processos
                                </Link>
                            </DropdownButton.Item>
                        </DropdownButton>
                    </li>
                    <li>
                        <Link href="/contato">CONTATO</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

/* <nav className={styles.nav}>
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
        </> */

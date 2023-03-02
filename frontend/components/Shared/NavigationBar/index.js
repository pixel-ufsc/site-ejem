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
                                <Link href="/solucao/selecao-de-materiais">Seleção de materiais</Link>
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

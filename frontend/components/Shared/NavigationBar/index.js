import styles from "./navbar.module.css";
import logo from '../../../public/shared/logo.png'
import Image from 'next/image'

export default function NavigationBar() {
  return (
    <nav className={styles.nav}>
        <a href="/" className="logoContainer"><Image src={logo} alt="logo" className={styles.logo}/></a>
        <ul className={styles.navBar}>
            <li className={styles.li}><a href="/quem-somos" className={styles.item_first}>QUEM SOMOS</a></li>
            <li className={styles.li}><a href="/blog" className={styles.item}>BLOG</a></li>
            <li className={styles.li}><a href="/solucao" className={styles.item}>SOLUÇÕES</a></li>
            <li className={styles.li}><a href="/contato" className={styles.item}>CONTATO</a></li>
        </ul>
	</nav>
  );
}


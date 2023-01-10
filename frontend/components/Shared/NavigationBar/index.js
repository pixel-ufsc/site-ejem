import styles from "./navbar.module.css";
import logo from '../../../public/shared/logo.png'
import Image from 'next/image'

export default function NavigationBar() {
  return (
    <>
    <nav className={styles.nav}>
      <a href="/" className="logoContainer"><Image src={logo} alt="logo" className={styles.logo} /></a>
      <div className={styles.navBar}>
        <a href="/quem-somos" className={styles.item}>QUEM SOMOS</a>
        <a href="/blog" className={styles.item}>BLOG</a>
        <div className={styles.dropdown}>
          <div className={styles.item}>
            SOLUÇÕES
            <svg className={styles.svg_triangle} width='10' height='12'>
              <polygon points="0,0 10,0 5,12" />
            </svg>
          </div>

          <div className={styles.dropdown_content}>
            <a href="/solucoes/caracterizacao-de-materiais">
              Caracterização de materiais
            </a>
            <a href="/solucoes/ensaios-mecanicos">
              Ensaios mecânicos
            </a>
            <a href="/solucoes/analise-de-falhas">
              Análise de falhas
            </a>
            <a href="/solucoes/gestao-de-residuos">
              Gestão de resíduos
            </a>
            <a href="/Otimização de materiais e processos">
              Otimização de materiais e processos
            </a>
          </div>
        </div>

        <a href="/contato" className={styles.item}>CONTATO</a>
      </div>
    </nav>
    <nav className={styles.mobileNavBar}>
    <div className ={styles.menuToggle}>
      <input type="checkbox" className={styles.checkb}/>
      
      <span></span>
      <span></span>
      <span></span>
      
      <ul className={styles.menu}>
        <a href="/quem-somos"><li>QUEM SOMOS</li></a>
        <a href="/blog"><li>BLOG</li></a>
        <a href="/solucoes"><li>SOLUÇÕES</li></a>
        <a href="/contato"><li>CONTATO</li></a>
      </ul>
    </div>
  </nav>
  </>
  );
}


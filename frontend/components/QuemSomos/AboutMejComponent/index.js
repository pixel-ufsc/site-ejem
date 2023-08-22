import styles from './aboutmej.module.css';
import Image from 'next/image';
import BRJunior from '../../../public/quemSomos/aboutMej/BRjunior.png';
import fejesc from '../../../public/quemSomos/aboutMej/fejesc.png';
import nuflo from '../../../public/quemSomos/aboutMej/nuflo.png';

export default function AboutMejComponent() {
    return (
        <section className={styles.container}>
            <h1>EJEM na Rede</h1>
            <div className={styles.contentContainer}>
                <p className={styles.text}>
                    O movimento Empresa Júnior (MEJ) chegou ao Brasil em meados dos anos 1990, no curso de Administração
                    da Fundação Getúlio Vargas - uma das mais renomadas universidades do país. No entanto, sua origem é
                    europeia, tendo sido criado na França em 1967. Desde o início, seu intuito é que os estudantes
                    coloquem em prática os conhecimentos aprendidos em sala de aula. Hoje, existem no Brasil cerca de
                    1500 empresas juniores, em mais de 280 instituições de ensino superior em todos os estados da
                    Federação. Além disso, vêm mostrando um crescimento acelerado nos últimos anos. Dentre elas, está a
                    EJEM, fortalecendo-se cada vez mais dentro do movimento e proporcionando uma melhor vivência
                    empresarial para seus integrantes.
                </p>
                <div className={styles.imageContainer}>
                    <Image src={BRJunior} alt="BRJunior" className={styles.image} />
                    <Image src={fejesc} alt="Fejesc" className={styles.image} />
                    <Image src={nuflo} alt="Nuflo" className={styles.image} />
                </div>
            </div>
        </section>
    );
}

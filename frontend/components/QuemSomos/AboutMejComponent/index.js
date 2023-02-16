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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor elit amet viverra nunc commodo.
                    Auctor sed dictum porta sed cursus ut. Sit elementum aliquam elit sapien quis dolor feugiat
                    placerat. Feugiat tempus blandit dictumst bibendum accumsan habitasse eu id etiam. <br />
                    Elementum, risus, justo viverra dictumst id laoreet orci. Egestas enim vel consequat risus.
                    Vestibulum eros, fermentum at id sed consectetur tellus auctor. Volutpat morbi sapien penatibus
                    pharetra mauris lectus. Risus morbi ullamcorper risus tincidunt aliquam. Donec urna tortor at
                    suspendisse malesuada nec sit mattis. Pellentesque urna faucibus vitae convallis amet aliquam nullam
                    bibendum euismod. Ac risus pretium, donec eu integer velit, ac mi Pellentesque urna faucibus vitae
                    convallis amet aliquam nullam bibendum euismod. Ac risus pretium, donec eu integer velit, ac mi
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

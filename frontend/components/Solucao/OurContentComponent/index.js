import styles from "./ourcontent.module.css";
import Image from 'next/image'
import warning from '../../../public/solution/warning.png'


function OurContentComponent() {
  return (
    <section className={styles.section}>
        <Image className={styles.image} src={warning} alt="warning"/>
        <div className={styles.text} >Consiste em um processo investigativo na qual utiliza-se técnicas para identificar a causa de uma fratura inesperada em uma peça, podendo ela ser decorrente de fatores diversos, tais como: o processo de fabricação, o mau uso da peça, uma escolha inadequada de material, entre outros, e dessa forma, nos permite determinar ações corretivas ao problema.</div>
    </section>
  );
}

export default OurContentComponent;


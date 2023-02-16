import styles from "./ourpartners.module.css";
import Image from 'next/image'
import Ampera from '../../../public/quemSomos/partners/ampera.png'
import Empower from '../../../public/quemSomos/partners/empower.png'
import LabSolda from '../../../public/quemSomos/partners/labsolda.png'
import LabMat from '../../../public/quemSomos/partners/labmat.png'

export default function OurPartnersComponent() {
    return(
        <section>
            <section className={styles.firstPartner}>
                <div className={styles.title}>Parceria com o Labmat</div>
                <div className={styles.textContainer}>
                    <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor elit amet viverra nunc commodo. Auctor sed dictum porta sed cursus ut. Sit elementum aliquam elit sapien quis dolor feugiat placerat. Feugiat tempus blandit dictumst bibendum accumsan habitasse eu id etiam. </div>
                    <Image className={styles.image1} src={LabMat} alt="Labmat"/>
                </div>
            </section>
            <section className={styles.otherPartners}>
                <div className={styles.title}>Parcerias</div>
                <div className={styles.images}>
                    <Image className={styles.image} src={Ampera} alt="Ampera"/>
                    <Image className={styles.image} src={LabSolda} alt="LabSolda"/>
                    <Image className={styles.image} src={Empower} alt="Empower"/>
                </div>
            </section>
        </section>
    )
}
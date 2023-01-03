import styles from "./wpp.module.css";
import Image from 'next/image'

import wpp_icon from '../../../public/home/cards_solutions/wpp_icon.png'

export default function OurSolutionsComponent() {
    return(
        <>
            <a className={styles.icon} href="/"><Image src={wpp_icon} alt="wpp"/></a>
        </>
    )
}
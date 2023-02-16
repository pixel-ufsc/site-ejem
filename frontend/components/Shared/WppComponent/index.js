import styles from './wpp.module.css';
import Image from 'next/image';
import Link from 'next/link';

import wpp_icon from '../../../public/home/cards_solutions/wpp_icon.png';

export default function WppComponent() {
    return (
        <>
            <Link className={styles.icon} href="/">
                <Image src={wpp_icon} alt="wpp" />
            </Link>
        </>
    );
}

import styles from './wpp.module.css';
import Image from 'next/image';
import Link from 'next/link';

import { WhatsappIcon } from '../../../public/icons/icons';

export default function WppComponent() {
    return (
        <Link className={styles.icon} href="/">
            <WhatsappIcon />
        </Link>
    );
}

import styles from './whatsappicon.module.css';
import Link from 'next/link';

import { WhatsappIcon } from '../../../public/icons/icons';

export default function WhatsappIconComponent({ url }) {
    return (
        <Link className={styles.icon} href={url ? url : '/'} target="_blank">
            <WhatsappIcon />
        </Link>
    );
}

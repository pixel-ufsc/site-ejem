import Link from 'next/link';
import styles from './bigbutton.module.css';

export default function BigButton({ children, href, ...props }) {
    return (
        <Link className={styles.button} href={href} {...props}>
            <h3>{children}</h3>
        </Link>
    );
}

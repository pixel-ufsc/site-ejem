import styles from './posttag.module.css';

export default function PostTagComponent({ text = 'Teste' }) {
    return <p className={styles.tag}>{text}</p>;
}

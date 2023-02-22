import styles from './title.module.css';

export default function TitleComponent({ title }) {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
        </div>
    );
}

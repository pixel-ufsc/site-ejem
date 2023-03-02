import styles from './description.module.css';

export default function DescriptionComponent({ icon, children: description }) {
    return (
        <section className={styles.section}>
            <div className={styles.iconContainer}>{icon}</div>
            <p className={styles.text}>{description}</p>
        </section>
    );
}

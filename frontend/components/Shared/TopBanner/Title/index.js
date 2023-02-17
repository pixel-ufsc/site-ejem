import styles from './title.module.css';

function Title({ children }) {
    return <div className={styles.title}>{children}</div>;
}

export default Title;

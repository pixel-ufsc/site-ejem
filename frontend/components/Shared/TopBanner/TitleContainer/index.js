import styles from './titleContainer.module.css';

function TitleContainer({ children }) {
    return <div className={styles.container}>{children}</div>;
}

export default TitleContainer;

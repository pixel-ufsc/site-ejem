import styles from './postinfo.module.css';
import PostTagComponent from '../../PostTagComponent';

export default function PostInfo({ autor, date, tags }) {
    const convertDate = (dateString) => {
        if (!dateString) return '';
        // Convert 2022-12-29 to 29/12/2022
        const dateArray = dateString.split('-');
        const year = dateArray[0];
        const month = dateArray[1];
        const day = dateArray[2];
        return `${day}/${month}/${year}`;
    };

    return (
        <div className={styles.container}>
            <h5 className={styles.autor}>{autor}</h5>
            <h5 className={styles.date}>{convertDate(date)}</h5>
            <div className={styles.tags}>
                {tags && tags.map((tag) => <PostTagComponent text={tag?.attributes?.tag} key={tag?.id} />)}
            </div>
        </div>
    );
}

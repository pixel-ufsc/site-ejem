import styles from './postgrid.module.css';
import P from 'prop-types';
// Components
import OurPostComponent from '../OurPostComponent';

export default function PostGridComponent({ postsData }) {
    const posts = postsData ? postsData : [];

    return (
        <div className={styles.container}>
            {posts.map((post) => (
                <OurPostComponent key={post?.id} attributes={post?.attributes} />
            ))}
        </div>
    );
}

PostGridComponent.propTypes = {
    posts: P.array,
};

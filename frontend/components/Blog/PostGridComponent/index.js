import styles from './postgrid.module.css';
import P from 'prop-types';
// Components
import OurPostComponent from '../OurPostComponent';

export default function PostGridComponent({ posts }) {
    console.log(posts);

    return (
        <div className={styles.container}>
            {posts.map((post) => (
                <OurPostComponent key={post?.id} atributes={post?.attributes} />
            ))}
        </div>
    );
}

PostGridComponent.propTypes = {
    posts: P.array,
};

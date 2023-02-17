import styles from './ourmainpost.module.css';
import Image from 'next/image';
import PostTagComponent from '../PostTagComponent';

export default function OurMainPostComponent({ mainPost }) {
    const post = mainPost?.data?.attributes?.publicacao?.data?.attributes;
    const postImageFormats = post?.foto?.data?.attributes?.formats;
    const postTags = post?.categorias?.data;

    const convertDate = (date) => {
        // Converter 2022-12-29 para 29/12/2022
        const dateArray = date.split('-');
        const year = dateArray[0];
        const month = dateArray[1];
        const day = dateArray[2];
        return `${day}/${month}/${year}`;
    };

    return (
        <section className={styles.container}>
            <div className={styles.contentWrapper}>
                <div className={styles.textContainer}>
                    <h2>{post.titulo}</h2>
                    <h4>{post.subtitulo}</h4>
                    <p>{post.resumo}</p>
                    <p>{convertDate(post.data_publicacao)}</p>
                    <div className={styles.tagsContainer}>
                        {postTags.map((tag) => (
                            <PostTagComponent text={tag?.attributes?.tag} key={tag?.id} />
                        ))}
                    </div>
                </div>

                <img
                    className={styles.image}
                    src={postImageFormats?.large?.url ? postImageFormats?.large?.url : postImageFormats?.medium?.url}
                    alt="imagem"
                />
            </div>
        </section>
    );
}

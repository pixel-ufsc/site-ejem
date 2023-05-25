import styles from './ourmainpost.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import PostTagComponent from '../PostTagComponent';

export default function OurMainPostComponent({ mainPost }) {
    const post = mainPost?.publicacao?.data?.attributes;
    const postImageFormats = post?.foto?.data?.attributes?.formats;
    const postTags = post?.categorias?.data;
    const slug = post?.slug ? 'blog/' + post?.slug : '';

    const convertDate = (date) => {
        // Convert 2022-12-29 to 29/12/2022
        const dateArray = date.split('-');
        const year = dateArray[0];
        const month = dateArray[1];
        const day = dateArray[2];
        return `${day}/${month}/${year}`;
    };

    const router = useRouter();

    const handleClick = () => {
        router.push(slug);
    };

    return (
        <section className={styles.container} onClick={handleClick}>
            <div className={styles.contentWrapper}>
                <div className={styles.textContainer}>
                    <div className={styles.text}>
                        <h2>{post.titulo}</h2>
                        <h4>{post.subtitulo}</h4>
                        <p>{post.resumo}</p>
                    </div>
                    <div className={styles.textInfo}>
                        <p className={styles.date}>{convertDate(post.data_publicacao)}</p>
                        <div className={styles.tagsContainer}>
                            {postTags.map((tag) => (
                                <PostTagComponent text={tag?.attributes?.tag} key={tag?.id} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.imageContainer}>
                    <img
                        fill
                        src={
                            postImageFormats?.large?.url ? postImageFormats?.large?.url : postImageFormats?.medium?.url
                        }
                        alt="Imagem do post em destaque"
                    />
                </div>

                {/*                 <div className={styles.imageContainer}>
                    <img
                        className={styles.image}
                        src={
                            postImageFormats?.large?.url ? postImageFormats?.large?.url : postImageFormats?.medium?.url
                        }
                        alt="Imagem do post em destaque"
                    />
                </div> */}
            </div>
        </section>
    );
}

import styles from './postpage.module.css';
import Image from 'next/image';
import Link from 'next/link';
// Components
import PostInfo from './PostInfo';

export default function PostPageComponent({ image, htmlString, data }) {
    const convertDate = (date) => {
        // Convert 2022-12-29 to 29/12/2022
        const dateArray = date.split('-');
        const year = dateArray[0];
        const month = dateArray[1];
        const day = dateArray[2];
        return `${day}/${month}/${year}`;
    };

    return (
        <section className={styles.container}>
            <div className={styles.topContainer}>
                {image?.url && <Image fill src={image.url} alt={image?.name}></Image>}
                <div className={styles.title}>
                    <h1>{data?.titulo}</h1>
                    <h2>{data?.subtitulo}</h2>
                </div>
            </div>

            <div className={styles.postWrapper}>
                <div className={styles.info}>
                    <PostInfo
                        autor={data?.autor?.data?.attributes?.nome}
                        date={data?.data_publicacao}
                        tags={data?.categorias?.data}
                    />
                </div>

                <div className={styles.content} dangerouslySetInnerHTML={{ __html: htmlString }} />
            </div>
        </section>
    );
}

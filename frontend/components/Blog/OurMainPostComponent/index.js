import styles from "./ourmainpost.module.css";
import Image from 'next/image'
import PostTagComponent from "../PostTagComponent";


export default function OurMainPostComponent({ mainPost }) {

    const post = mainPost.attributes.publicacao.data.attributes
    const image = post.imagem.data.attributes.formats.thumbnail.url
    const postTags = post.categorias.data
    // const tag = mainPost.attributes.publicacao.data.attributes.categorias.data[0].attributes.tag

    const convertDate = (date) => {
        // Converter 2022-12-29 para 29/12/2022
        const dateArray = date.split('-');
        const year = dateArray[0];
        const month = dateArray[1];
        const day = dateArray[2];
        return `${day}/${month}/${year}`;
    }
    

    return(
        <section className={styles.sectionOutside}>
            <section className={styles.section}>
                <div className={styles.text}>
                    <div className={styles.title}>{post.titulo}</div>
                    <div className={styles.subTitle}>{post.subtitulo}</div>
                    <div className={styles.summary}>{post.resumo}</div>
                    <div className={styles.data}>{convertDate(post.data_publicacao)}</div>
                    <div className={styles.tagsContainer}>
                        {postTags.map((tag) => (
                            <PostTagComponent text={tag?.attributes?.tag} key={tag?.id} />
                        ))}
                    </div> 
                </div>
                <div className={styles.image}>
                    <img src={image} alt="imagem" width={550} height={356}/>
                </div>            
            </section>
        </section>
    )
}

{/* <div className={styles.tag}>{categoria.data[0].attributes.tag}</div> */}
{/* <div className={styles.image}>
   <Image src={imagem} alt="imagem" width={550} height={356}/>
</div>  */}
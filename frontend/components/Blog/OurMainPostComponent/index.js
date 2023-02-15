import styles from "./ourmainpost.module.css";
import Image from 'next/image'
import { useState } from 'react';


export default function OurMainPostComponent({ post }) {

    const mainPost = post.data.attributes.publicacao.data.attributes
    console.log(mainPost)
    console.log(post)


    return(
        <section className={styles.section}>
            <div className={styles.text}>
                <div className={styles.title}>{mainPost.titulo}</div>
                <div className={styles.subTitle}>{mainPost.subtitulo}</div>
                <div className={styles.summary}>{mainPost.resumo}</div>
                <div className={styles.data}>{mainPost.data_publicacao}</div>
            </div> 
             {/* <div className={styles.image}>
                <Image src={imagem} alt="imagem" width={550} height={356}/>
            </div>  */}
        </section>
    )
}

{/* <div className={styles.tag}>{categoria.data[0].attributes.tag}</div> */}
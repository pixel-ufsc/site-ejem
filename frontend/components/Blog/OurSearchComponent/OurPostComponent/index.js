import styles from "./ourpost.module.css";
import Image from 'next/image'
import { useState } from 'react';


export default function OurPostComponent({ titulo, subtitulo, resumo, data_publicacao, imagem, categoria}) {
    return(
        <section className={styles.section}>
            <div className={styles.text}>
                <div className={styles.title}>{titulo}</div>
                <div className={styles.subTitle}>{subtitulo}</div>
                <div className={styles.summary}>{resumo}</div>
                <div className={styles.data}>{data_publicacao}</div>
                {/* <div className={styles.tag}>{categoria.data[0].attributes.tag}</div> */}
            </div>
            <div className={styles.image}>
                <Image src={imagem} alt="imagem" width={550} height={356}/>
            </div>
        </section>
    )
}

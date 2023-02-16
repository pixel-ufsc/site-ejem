import styles from './post.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function PostComponent({ image, htmlString, data }) {
    // console.log(htmlString)
    // console.log(data)
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <Image src={image} alt="imagem" width={1000} height={500} />
                <div className={styles.titulo}> {data.titulo}</div>
                <div className={styles.subtitulo}> {data.subtitulo} </div>
                <div className={styles.autor}> {data.autor.data.attributes.nome} </div>
                <div className={styles.data}> {data.data_publicacao} </div>

                {data.categorias.data.map((categoria) => {
                    return (
                        <div className={styles.categoria} key={categoria.id}>
                            {categoria.attributes.tag}
                        </div>
                    );
                })}
                <div className={styles.conteudo} dangerouslySetInnerHTML={{ __html: htmlString }} />
            </div>
        </section>
    );
}

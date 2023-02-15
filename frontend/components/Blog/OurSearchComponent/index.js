import styles from "./oursearch.module.css";
import { useState } from 'react';
import OurPostComponent from "./OurPostComponent";

import { AiOutlineSearch } from "react-icons/ai";



export default function OurSearchComponent({ posts }) {

    const [query, setQuery] = useState("");
    const [filterPosts, setFilterPosts] = useState("")

    console.log(posts.data.filter((post)=> post.attributes.titulo.toLowerCase().includes(query)));

    const search = (posts) => {
        return posts.data.filter((post)=> post.attributes.titulo.toLowerCase().includes(query));
    }

    return(
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.title}>Blog</div>
                <div className={styles.search}>
                    <button className={styles.button} type="submit"><AiOutlineSearch size={30} color={"#2E4494"}></AiOutlineSearch></button>
                    <input className={styles.input} placeholder="O que você procura?" type="search" onChange={(e)=>setQuery(e.target.value)}></input>
                </div>
            </div>

            {posts.data.filter((post)=> post.attributes.titulo.toLowerCase().includes(query.toLowerCase())).map((post)=> {
                console.log(post)
                  return (
                    <div key={post.id}>
                        <OurPostComponent
                            id={post.id}
                            titulo={post.attributes.titulo}
                            subtitulo={post.attributes.subtitulo}
                            resumo={post.attributes.resumo}
                            data_publicacao={post.attributes.data_publicacao}
                            imagem={post.attributes.imagem.data.attributes.formats.thumbnail.url}
                            categoria={post.attributes.categorias}
                        />
                    </div>
                  )
              })} 
            



        </section>
    )
}

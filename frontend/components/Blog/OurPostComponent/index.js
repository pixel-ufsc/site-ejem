import styles from './ourpost.module.css';
import { useState } from 'react';
import Image from 'next/image';
import PostTagComponent from '../PostTagComponent';

export default function OurPostComponent({ attributes }) {
    const titulo = attributes?.titulo ? attributes.titulo : '';
    const data_publicacao = attributes?.data_publicacao ? attributes.data_publicacao : '';
    const resumo = attributes?.resumo ? attributes.resumo : '';
    const postTags = attributes?.categorias?.data;
    const imageFormats = attributes?.foto?.data?.attributes?.formats;
    const alternativeText = attributes?.foto?.data?.attributes?.alternativeText;

    const convertDate = (date) => {
        // Converter 2022-12-29 para 29/12/2022
        const dateArray = date.split('-');
        const year = dateArray[0];
        const month = dateArray[1];
        const day = dateArray[2];
        return `${day}/${month}/${year}`;
    };

    const handleClick = () => {
        // TODO - fazer redirecionamento para a página do post
    };

    return (
        <div className={styles.container} onClick={handleClick}>
            <img
                src={imageFormats.large.url ? imageFormats.large.url : imageFormats.medium.url}
                alt={alternativeText}
                className={styles.cardImage}
            />

            <div className={styles.textContent}>
                <h2>{titulo}</h2>
                <p className={styles.date}>{convertDate(data_publicacao)}</p>
                <p className={styles.description}>{resumo}</p>
            </div>

            <div className={styles.tagsContainer}>
                {postTags.map((tag) => (
                    <PostTagComponent text={tag?.attributes?.tag} key={tag?.id} />
                ))}
            </div>
        </div>
    );
}

import React from 'react';
import fm from 'front-matter';
import Head from 'next/head';
import { marked } from 'marked';
import NavigationBar from '../../components/Shared/NavigationBar';
import PostComponent from '../../components/Blog/PostComponent';
import OurContactComponent from '../../components/Shared/OurContactComponent';
import FooterComponent from '../../components/Shared/FooterComponent';

export default function Post({ image, htmlString, data, redesSociaisData }) {
    return (
        <>
            <Head>
                <title>{data.titulo}</title>
                <meta name="description" content={data.titulo} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <NavigationBar />
                <PostComponent image={image} htmlString={htmlString} data={data} />
                <OurContactComponent />
                <FooterComponent redesSociaisData={redesSociaisData}/>
            </main>
        </>
    );
}

export const getStaticPaths = async () => {
    //let result = await fetch(`http://134.209.68.173:1337/api/posts`);
    let result = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/posts`);
    result = await result.json();
    return {
        paths: result.data.map((result) => ({
            params: { slug: result.attributes.slug },
        })),
        fallback: false,
    };
};

export const getStaticProps = async ({ params }) => {
    const res = await fetch(
         `${process.env.NEXT_PUBLIC_STRAPI_URL}/posts?filters[slug][$eq]=${params.slug}&populate=%2A`
    );
    //console.log(params);
    //console.log(`${process.env.NEXT_PUBLIC_STRAPI_URL}/posts?filters[slug][$eq]=${params.slug}&populate=imagem&populate=autor`)
    const markdownWithMeta = await res.json();
    const parsedMarkdown = fm(markdownWithMeta.data[0].attributes.conteudo);
    const htmlString = marked(parsedMarkdown.body);
    // console.log(markdownWithMeta.data[0].attributes.imagem.data.attributes.formats.medium.url)
    const image = markdownWithMeta.data[0].attributes.foto.data.attributes.formats.medium.url;
    
    const redesSociaisFetch = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/rede-social?populate=%2A`
    );
    const redesSociais = await redesSociaisFetch.json();

    return {
        props: {
            image,
            htmlString,
            data: markdownWithMeta.data[0].attributes,
            redesSociaisData: redesSociais.data.attributes
        },
    };
};

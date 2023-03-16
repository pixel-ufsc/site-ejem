import React from 'react';
import fm from 'front-matter';
import Head from 'next/head';
import { marked } from 'marked';
// Utils
import { loadRedesSociais } from '../../utils/loadRedesSociais';
import { loadPosts } from '../../utils/loadPosts';
import { loadPostsFiltered } from '../../utils/loadPostsFiltered';
import { loadContato } from '../../utils/loadContato';
// Components
import NavigationBar from '../../components/Shared/NavigationBar';
import PostPageComponent from '../../components/Blog/PostPageComponent';
import OurContactComponent from '../../components/Shared/OurContactComponent';
import FooterComponent from '../../components/Shared/FooterComponent';

export default function Post({ image, htmlString, data, contatoData, redesSociaisData }) {
    return (
        <>
            <Head>
                <title>{data.titulo} | EJEM</title>
                <meta name="description" content={data.titulo} />
            </Head>
            <main>
                <NavigationBar />
                <PostPageComponent image={image} htmlString={htmlString} data={data} />
                <OurContactComponent contatoData={contatoData} />
                <FooterComponent redesSociaisData={redesSociaisData} />
            </main>
        </>
    );
}

export const getStaticPaths = async () => {
    //let result = await fetch(`http://134.209.68.173:1337/api/posts`);
    let result = await loadPosts();
    return {
        paths: result.map((result) => ({
            params: { slug: result.attributes.slug },
        })),
        fallback: false,
    };
};

export const getStaticProps = async ({ params }) => {
    const markdownWithMeta = await loadPostsFiltered({ slug: params.slug });
    const parsedMarkdown = fm(markdownWithMeta.data[0].attributes.conteudo);
    const htmlString = marked(parsedMarkdown.body);
    const imageFormats = markdownWithMeta.data[0].attributes.foto.data.attributes.formats
    const image = imageFormats?.large ? imageFormats?.large : imageFormats?.medium;

    const redesSociaisData = await loadRedesSociais();
    const contatoData = await loadContato();

    return {
        props: {
            image,
            htmlString,
            data: markdownWithMeta.data[0].attributes,
            contatoData,
            redesSociaisData,
        },
    };
};

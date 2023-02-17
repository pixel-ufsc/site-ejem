import { useEffect, useState } from 'react';
import Head from 'next/head';
// Hooks
import fetchData from '../../utils/fetchData';
// Components
import NavigationBar from '../../components/Shared/NavigationBar';
import FooterComponent from '../../components/Shared/FooterComponent';
import OurSearchComponent from '../../components/Blog/OurSearchComponent';
import OurMainPostComponent from '../../components/Blog/OurMainPostComponent';
import PostGridComponent from '../../components/Blog/PostGridComponent';
import OurContactComponent from '../../components/Shared/OurContactComponent';

export default function Blog({ postsData, mainPost, redesSociaisData }) {
    const [filteredPosts, setFilteredPosts] = useState([]);

    useEffect(() => {
        if (postsData) {
            setFilteredPosts(postsData?.data);
        }
    }, [postsData]);

    const handleSearch = (search) => {
        if (search) {
            // If search is not '' (empty)
            const filtered = postsData?.data.filter((post) => {
                return post.attributes.titulo.toLowerCase().includes(search.toLowerCase());
            });
            setFilteredPosts(filtered);
        } else {
            // Else, return all posts
            setFilteredPosts(postsData?.data);
        }
    };

    return (
        <div>
            <Head>
                <title>Solução</title>
                <meta name="description" content="Página sobre a empresa" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <NavigationBar />
                <OurSearchComponent onSearch={(search) => handleSearch(search)} />
                <OurMainPostComponent mainPost={mainPost} />
                <PostGridComponent postsData={filteredPosts} />
                <OurContactComponent />
                <FooterComponent redesSociaisData={redesSociaisData} />
            </main>
        </div>
    );
}

export async function getStaticProps() {
    const postsData = await fetchData('/posts?populate=%2A');
    const mainPost = await fetchData(
        '/publicacao-destaque?populate[publicacao][populate][0]=foto&populate[publicacao][populate][1]=categorias',
    );
    const redesSociaisFetch = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/rede-social?populate=%2A`
    );
    const redesSociais = await redesSociaisFetch.json();

    return {
        props: { 
            postsData, 
            mainPost,
            redesSociaisData: redesSociais.data.attributes
        },
    };
}

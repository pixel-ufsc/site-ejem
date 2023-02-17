import { useEffect, useState } from 'react';
import Head from 'next/head';
// Hooks
import fetchData from '../../utils/fetchData';
// Components
import NavigationBar from '../../components/Shared/NavigationBar';
import SolucaoBanner from '../../components/Solucao/SolucaoBanner';
import OurContentComponent from '../../components/Solucao/OurContentComponent';
import FooterComponent from '../../components/Shared/FooterComponent';
import OurSearchComponent from '../../components/Blog/OurSearchComponent';
import OurMainPostComponent from '../../components/Blog/OurMainPostComponent';
import PostGridComponent from '../../components/Blog/PostGridComponent';

export default function Blog({ postsData, mainPost }) {
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
            </main>
        </div>
    );
}

export async function getStaticProps() {
    const postsData = await fetchData('/posts?populate=%2A');
    const mainPost = await fetchData(
        '/publicacao-destaque?populate[publicacao][populate][0]=imagem&populate[publicacao][populate][1]=categorias',
    );

    return {
        props: { postsData, mainPost },
    };
}

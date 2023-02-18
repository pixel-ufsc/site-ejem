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
import { loadRedesSociais } from '../../utils/loadRedesSociais';
import { loadPosts } from '../../utils/loadPosts';
import { loadMainPosts } from '../../utils/loadMainPost';

export default function Blog({ postsData, mainPost, redesSociaisData }) {
    const [filteredPosts, setFilteredPosts] = useState([]);

    useEffect(() => {
        if (postsData) {
            setFilteredPosts(postsData);
        }
    }, [postsData]);

    const handleSearch = (search) => {
        if (search) {
            // If search is not '' (empty)
            const filtered = postsData?.filter((post) => {
                return post.attributes.titulo.toLowerCase().includes(search.toLowerCase());
            });
            setFilteredPosts(filtered);
        } else {
            // Else, return all posts
            // Talvez adicionar um numero maximo de posts...
            setFilteredPosts(postsData);
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
    const postsData = await loadPosts();
    const mainPost = await loadMainPosts();
    const redesSociaisData = await loadRedesSociais();
    return {
        props: { 
            postsData, 
            mainPost,
            redesSociaisData,
        },
    };
}

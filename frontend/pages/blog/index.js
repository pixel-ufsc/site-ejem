import { useEffect, useState } from 'react';
import Head from 'next/head';
// Utils
import { loadRedesSociais } from '../../utils/loadRedesSociais';
import { loadPosts } from '../../utils/loadPosts';
import { loadContato } from '../../utils/loadContato';
import { loadMainPosts } from '../../utils/loadMainPost';
// Components
import NavigationBar from '../../components/Shared/NavigationBar';
import FooterComponent from '../../components/Shared/FooterComponent';
import OurSearchComponent from '../../components/Blog/OurSearchComponent';
import OurMainPostComponent from '../../components/Blog/OurMainPostComponent';
import PostGridComponent from '../../components/Blog/PostGridComponent';
import OurContactComponent from '../../components/Shared/OurContactComponent';


export default function Blog({ postsData, mainPost, contatoData, redesSociaisData }) {
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
                <OurMainPostComponent mainPost={mainPost} />
                <OurSearchComponent onSearch={(search) => handleSearch(search)} />
                <PostGridComponent postsData={filteredPosts} />
                <OurContactComponent contatoData={contatoData} />
                <FooterComponent redesSociaisData={redesSociaisData} />
            </main>
        </div>
    );
}

export async function getStaticProps() {
    const postsData = await loadPosts();
    const mainPost = await loadMainPosts();
    const contatoData = await loadContato();
    const redesSociaisData = await loadRedesSociais();
    return {
        props: { 
            postsData, 
            mainPost,
            contatoData,
            redesSociaisData,
        },
    };
}

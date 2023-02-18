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
    const [searchText, setSearchText] = useState('');
    const [activeTag, setActiveTag] = useState('');

    useEffect(() => {
        if (postsData) {
            setFilteredPosts(postsData);
        }
    }, [postsData]);

    useEffect(() => {
        let x = filterByTitle(postsData, searchText);
        x = filterByTag(x, activeTag);
        setFilteredPosts(x);
    }, [activeTag]);

    const filterByTag = (posts, tag) => {
        // returns a filtered array of posts
        return posts?.filter((post) => {
            return post.attributes.categorias.data.some((categoria) => {
                return categoria.attributes.tag.toLowerCase().includes(tag.toLowerCase());
            });
        });
    };

    const filterByTitle = (posts, search) => {
        // returns a filtered array of posts
        return posts?.filter((post) => {
            return post.attributes.titulo.toLowerCase().includes(search.toLowerCase());
        });
    };

    const handleSearch = (search) => {
        setSearchText(search);
        let x = filterByTitle(postsData, search);
        x = filterByTag(x, activeTag);
        setFilteredPosts(x);
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
                <div onChange={(e) => setActiveTag(e.target.value)}>
                    <input type="radio" value='' name='tag' /> tag1
                    <input type="radio" value='Análise de falhas' name='tag' /> tag2
                    <input type="radio" value='Carac' name='tag' /> tag3
                </div>
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

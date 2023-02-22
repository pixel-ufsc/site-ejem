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
import TagsFilter from '../../components/Blog/TagsFilterComponent';
import TitleComponent from '../../components/Shared/TitleComponent';

export default function Blog({ postsData, mainPost, contatoData, redesSociaisData }) {
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [activeTag, setActiveTag] = useState('');

    // seta filtered posts para todos os posts quando postsData é carregado
    useEffect(() => {
        if (postsData) {
            setFilteredPosts(postsData);
        }
    }, [postsData]);

    // detecta mudanças em activeTag e filtra posts por tag e titulo para setar filteredPosts
    useEffect(() => {
        let x = filterByTitle(postsData, searchText);
        x = filterByTag(x, activeTag);
        setFilteredPosts(x);
    }, [activeTag]);

    // retorna um array de posts filtrados por tag
    const filterByTag = (posts, tag) => {
        // returns a filtered array of posts
        return posts?.filter((post) => {
            return post.attributes.categorias.data.some((categoria) => {
                return categoria.attributes.tag.toLowerCase().includes(tag.toLowerCase());
            });
        });
    };

    // retorna um array de posts filtrados por titulo
    const filterByTitle = (posts, search) => {
        // returns a filtered array of posts
        return posts?.filter((post) => {
            return post.attributes.titulo.toLowerCase().includes(search.toLowerCase());
        });
    };

    // filtra posts por titulo e tag e atualiza filteredPosts
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
                <TitleComponent title={'Blog'} />
                <OurMainPostComponent mainPost={mainPost} />
                <OurSearchComponent onSearch={(search) => handleSearch(search)} />
                {/* Não necessariamente precisa ser feito assim, qualquer vez que for chamado o
                    setActiveTags ele vai filtrar tudo corretamente de acordo com o argumento da tag
                    e o texto do input de pesquisa
                */}
                <TagsFilter onChangeSelected={(tag) => setActiveTag(tag)} postsData={postsData} />
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

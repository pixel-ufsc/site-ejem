import { useEffect, useState } from 'react';
import Head from 'next/head';
import Fuse from 'fuse.js';
// Utils
import { loadRedesSociais } from '../../utils/loadRedesSociais';
import { loadPosts } from '../../utils/loadPosts';
import { loadContato } from '../../utils/loadContato';
import { loadMainPosts } from '../../utils/loadMainPost';
// Components
import NavigationBar from '../../components/Shared/NavigationBar';
import WhatsappIconComponent from '../../components/Shared/WhatsappIconComponent';
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

    const fuse = new Fuse(postsData, {
        keys: ['attributes.titulo', 'attributes.categorias.data.attributes.tag'],
        includeScore: true,
    });
    const results = fuse.search(searchText);
    const fuseResults = searchText ? results.map((result) => result.item) : postsData;
    // console.log('fuse', fuse)
    // console.log('results', results)

    // seta filtered posts para todos os posts quando postsData é carregado
    useEffect(() => {
        if (postsData) {
            setFilteredPosts(postsData);
        }
    }, [postsData]);

    // detecta mudanças em activeTag e filtra posts por tag e titulo para setar filteredPosts
    useEffect(() => {
        let x = filterByTitle();
        x = filterByTag(x, activeTag);
        setFilteredPosts(x);
        // setFilteredPosts(fuseResults);
    }, [searchText, activeTag]);

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
        // return posts?.filter((post) => {
        //     return post.attributes.titulo.toLowerCase().includes(search.toLowerCase());
        // });
        return fuseResults;
    };

    // filtra posts por titulo e tag e atualiza filteredPosts
    const handleSearch = (search) => {
        setSearchText(search);
        let x = filterByTitle();
        x = filterByTag(x, activeTag);
        setFilteredPosts(x);
        // setFilteredPosts(fuseResults);
    };

    return (
        <div>
            <Head>
                <title>Solução | EJEM</title>
                <meta name="description" content="Página sobre a empresa" />
            </Head>
            <main>
                <NavigationBar />
                <WhatsappIconComponent url={redesSociaisData?.linkWhatsapp ? redesSociaisData.linkWhatsapp : '/'} />
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

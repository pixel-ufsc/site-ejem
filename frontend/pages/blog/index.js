import Head from "next/head";
import NavigationBar from "../../components/Shared/NavigationBar";
import SolucaoBanner from "../../components/Solucao/SolucaoBanner";
import OurContentComponent from "../../components/Solucao/OurContentComponent";
import FooterComponent from "../../components/Shared/FooterComponent";
import OurSearchComponent from "../../components/Blog/OurSearchComponent";
import OurMainPostComponent from "../../components/Blog/OurMainPostComponent";
import { useState } from "react";
import PostGridComponent from "../../components/Blog/PostGridComponent";


export const getStaticProps = async () => {
  const res_posts = await fetch(
  // `${process.env.NEXT_PUBLIC_STRAPI_URL}/membros`
     'http://134.209.68.173:1337/api/posts?populate=%2A'
  );
  const res_post = await fetch('http://134.209.68.173:1337/api/publicacao-destaque?populate[publicacao][populate][0]=imagem&populate[publicacao][populate][1]=categorias');
  const data_json = await res_posts.json();
  const data_json_post = await res_post.json();
  return {
    props: {
      posts: data_json.data,
      mainPost: data_json_post.data
    },
  };
};

export default function Blog({ posts , mainPost }) {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleSearch = (search) => {
    if (search) { // If search is not '' (empty)
      const filtered = posts.filter((post) => {
        return post.attributes.titulo.toLowerCase().includes(search.toLowerCase());
      });
      setFilteredPosts(filtered);
    } else { // Else, return all posts
      setFilteredPosts(posts);
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
        <PostGridComponent posts={filteredPosts} />
        
        {/* <NavigationBar />
        <OurSearchComponent posts={data}/>
        <OurMainPostComponent post={data1}/> */}
      </main>
    </div>
  );
}

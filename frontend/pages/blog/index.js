import Head from "next/head";
import NavigationBar from "../../components/Shared/NavigationBar";
import SolucaoBanner from "../../components/Solucao/SolucaoBanner";
import OurContentComponent from "../../components/Solucao/OurContentComponent";
import FooterComponent from "../../components/Shared/FooterComponent";
import OurSearchComponent from "../../components/Blog/OurSearchComponent";


export const getStaticProps = async () => {
  const res_posts = await fetch(
  // `${process.env.NEXT_PUBLIC_STRAPI_URL}/membros`
     'http://134.209.68.173:1337/api/posts?populate=%2A'
  );
  const data_json = await res_posts.json();
  return {
  props: {
      data: data_json,
  },
  };
};

export default function Blog({ data }) {
  // console.log(data)
  return (
    <div>
      <Head>
        <title>Solução</title>
        <meta name="description" content="Página sobre a empresa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavigationBar />
        <OurSearchComponent posts={data}/>
        {/* <SolucaoBanner /> */}
        {/* <OurContentComponent /> */}
        {/* <FooterComponent /> */}
      </main>
    </div>
  );
}


import Head from "next/head";
import NavigationBar from "../../components/Shared/NavigationBar";
import SolucaoBanner from "../../components/Solucao/SolucaoBanner";
import OurContentComponent from "../../components/Solucao/OurContentComponent";
import FooterComponent from "../../components/Shared/FooterComponent";

export default function Solucao() {
  return (
    <div>
      <Head>
        <title>Solução</title>
        <meta name="description" content="Página sobre a empresa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavigationBar />
        <SolucaoBanner />
        <OurContentComponent />
        <FooterComponent />
      </main>
    </div>
  );
}


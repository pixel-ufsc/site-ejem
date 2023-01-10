import Head from "next/head";
import TitleContactComponent from "../../components/Contato/TitleContactComponent";
import OurContentComponent from "../../components/Contato/OurContentComponent";
// import OurFormComponent from "../../components/Contato/OurFormComponent";
import FooterComponent from "../../components/Shared/FooterComponent";
import NavigationBar from "../../components/Shared/NavigationBar";

export default function QuemSomos() {
  return (
    <div>
      <Head>
        <title>Contato</title>
        <meta name="description" content="Página sobre a empresa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavigationBar></NavigationBar>
        <TitleContactComponent />
        <OurContentComponent />
        <FooterComponent />
      </main>
    </div>
  );
}


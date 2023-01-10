import Head from "next/head";
import TitleContactComponent from "../../components/Contato/TitleContactComponent";
import OurContentComponent from "../../components/Contato/OurContentComponent";
// import OurFormComponent from "../../components/Contato/OurFormComponent";
import FooterComponent from "../../components/Shared/FooterComponent";


export default function QuemSomos() {
  return (
    <div>
      <Head>
        <title>Contato</title>
        <meta name="description" content="Página sobre a empresa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <TitleContactComponent />
        <OurContentComponent />
        {/* <OurFormComponent /> */}
        {/* <FooterComponent /> */}
      </main>
    </div>
  );
}


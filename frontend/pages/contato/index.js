import Head from 'next/head';
import TitleContactComponent from '../../components/Contato/TitleContactComponent';
import OurContentComponent from '../../components/Contato/OurContentComponent';
import WppComponent from '../../components/Shared/WppComponent';
import FooterComponent from '../../components/Shared/FooterComponent';
import NavigationBar from '../../components/Shared/NavigationBar';
import { loadRedesSociais } from '../../utils/loadRedesSociais';

export default function Contato({ redesSociaisData }) {
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
                <WppComponent />
                <FooterComponent redesSociaisData={redesSociaisData}/>
            </main>
        </div>
    );
}

export async function getStaticProps() {
    const redesSociaisData = await loadRedesSociais();

    return {
        props: { 
            redesSociaisData,
        },
    };
}


import Head from 'next/head';
// Utils
import { loadRedesSociais } from '../../utils/loadRedesSociais';
import { loadContato } from '../../utils/loadContato';
// Components
import TitleContactComponent from '../../components/Contato/TitleContactComponent';
import OurContentComponent from '../../components/Contato/OurContentComponent';
import WppComponent from '../../components/Shared/WppComponent';
import FooterComponent from '../../components/Shared/FooterComponent';
import NavigationBar from '../../components/Shared/NavigationBar';

export default function Contato({ redesSociaisData, contatoData }) {
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
                <OurContentComponent contatoData={contatoData} />
                <WppComponent />
                <FooterComponent redesSociaisData={redesSociaisData}/>
            </main>
        </div>
    );
}

export async function getStaticProps() {
    const redesSociaisData = await loadRedesSociais();
    const contatoData = await loadContato();

    return {
        props: { 
            redesSociaisData,
            contatoData,
        },
    };
}


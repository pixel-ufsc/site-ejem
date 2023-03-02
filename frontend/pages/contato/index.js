import Head from 'next/head';
// Utils
import { loadRedesSociais } from '../../utils/loadRedesSociais';
import { loadContato } from '../../utils/loadContato';
// Components
import TitleContactComponent from '../../components/Contato/TitleContactComponent';
import OurContentComponent from '../../components/Contato/OurContentComponent';
import FooterComponent from '../../components/Shared/FooterComponent';
import NavigationBar from '../../components/Shared/NavigationBar';
import WhatsappIconComponent from '../../components/Shared/WhatsappIconComponent';

export default function Contato({ redesSociaisData, contatoData }) {
    return (
        <div>
            <Head>
                <title>Contato | EJEM</title>
                <meta name="description" content="Página sobre a empresa" />
            </Head>
            <main>
                <NavigationBar />
                <WhatsappIconComponent url={redesSociaisData?.linkWhatsapp ? redesSociaisData.linkWhatsapp : '/'} />
                <TitleContactComponent />
                <OurContentComponent contatoData={contatoData} />
                <FooterComponent redesSociaisData={redesSociaisData} />
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

import Head from 'next/head';
// Hooks
import { loadRedesSociais } from '../../utils/loadRedesSociais';
// Components
import QuemSomosBanner from '../../components/QuemSomos/QuemSomosBanner';
import IntroComponent from '../../components/QuemSomos/IntroComponent';
import OurPartnersComponent from '../../components/QuemSomos/OurPartnersComponent';
import AboutMejComponent from '../../components/QuemSomos/AboutMejComponent';
import OurStatementComponent from '../../components/QuemSomos/OurStatementComponent';
import WppComponent from '../../components/Shared/WppComponent';
import OurMembersComponent from '../../components/QuemSomos/OurMembersComponent';
import OurContactComponent from '../../components/Shared/OurContactComponent';
import FooterComponent from '../../components/Shared/FooterComponent';
import NavigationBar from '../../components/Shared/NavigationBar';
import { loadDepoimentos } from '../../utils/loadDepoimentos';
import { loadMembros } from '../../utils/loadMembros';
import { loadContato } from '../../utils/loadContato';

export default function QuemSomos({ statementsData,contatoData, membersData, redesSociaisData }) {
    return (
        <div>
            <Head>
                <title>Quem somos</title>
                <meta name="description" content="Página sobre a empresa" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <NavigationBar />
                <QuemSomosBanner />
                <WppComponent />
                <IntroComponent />
                <OurStatementComponent statementsData={statementsData} />
                <AboutMejComponent />
                <OurPartnersComponent />
                <OurMembersComponent membersData={membersData} />
                <OurContactComponent contatoData={contatoData} />
                <FooterComponent redesSociaisData={redesSociaisData}/>
            </main>
        </div>
    );
}

export async function getStaticProps() {
    const statementsData = await loadDepoimentos();
    const contatoData = await loadContato();
    const membersData = await loadMembros();
    const redesSociaisData = await loadRedesSociais();

    return {
        props: { 
            statementsData,
            contatoData,
            membersData,
            redesSociaisData,
        },
    };
}

import Head from 'next/head';
// Hooks
import fetchData from '../../utils/fetchData';
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

export default function QuemSomos({ statementsData, membersData }) {
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
                <OurContactComponent />
                <FooterComponent />
            </main>
        </div>
    );
}

export async function getStaticProps() {
    const statementsData = await fetchData('/depoimentos?populate=*');
    const membersData = await fetchData('/membros?populate=foto');

    return {
        props: { statementsData, membersData },
    };
}

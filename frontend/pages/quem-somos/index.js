import Head from 'next/head';
// Hooks
import useEndpoint from '../../hooks/useEndpoint';
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

export default function QuemSomos() {
    const { data: statementsData, statementsLoading, statementsError } = useEndpoint('/depoimentos?populate=*');
    const { data: membersData, membersloading, memberserror } = useEndpoint('/membros?populate=foto');

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

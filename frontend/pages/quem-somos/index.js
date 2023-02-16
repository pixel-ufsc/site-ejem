import Head from 'next/head';
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

export const getStaticProps = async () => {
    const res_members = await fetch(
        // `${process.env.NEXT_PUBLIC_STRAPI_URL}/membros`
        'http://134.209.68.173:1337/api/membros?populate=foto',
    );
    const res_statements = await fetch(
        // `${process.env.NEXT_PUBLIC_STRAPI_URL}/membros`
        'http://134.209.68.173:1337/api/depoimentos?populate=*',
    );
    const data_json = await res_members.json();
    const data_json1 = await res_statements.json();
    return {
        props: {
            data: data_json,
            data1: data_json1,
        },
    };
};

export default function QuemSomos({ data, data1 }) {
    // console.log(data);

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
                <OurStatementComponent statements={data1} />
                <AboutMejComponent />
                <OurPartnersComponent />
                <OurMembersComponent members={data} />
                <OurContactComponent />
                <FooterComponent />
            </main>
        </div>
    );
}

import Head from 'next/head';
// Utils
import fetchData from '../utils/fetchData';
// Components
import NavigationBar from '../components/Shared/NavigationBar';
import HomeBanner from '../components/Home/HomeBanner';
import OurSolutionsComponent from '../components/Home/OurSolutionsComponent';
import WppComponent from '../components/Shared/WppComponent';
import OurContactComponent from '../components/Shared/OurContactComponent';
import OurProjectComponent from '../components/Home/OurProjectComponent';
import OurPartnersComponent from '../components/Home/OurPartnersComponent';
import OurFeedBackComponent from '../components/Home/OurFeedBackComponent';
import FooterComponent from '../components/Shared/FooterComponent';

export default function Home({ feedbackData, redesSociaisData }) {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <NavigationBar />
                <HomeBanner />
                <WppComponent />
                <OurSolutionsComponent />
                <OurContactComponent />
                <OurProjectComponent />
                <OurPartnersComponent />
                <OurFeedBackComponent feedbackData={feedbackData} />
                <FooterComponent redesSociaisData={redesSociaisData} />
            </main>
        </>
    );
}

// Next.js uses the getStaticProps function to fetch data at build time.
// That is why we should place this function in the page component instead of using a hook like useFetch.
export async function getStaticProps() {
    const feedbackData = await fetchData('/feedbacks?populate=foto');
    const redesSociaisFetch = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/rede-social?populate=%2A`
    );
    const redesSociais = await redesSociaisFetch.json();

    return {
        props: { 
            feedbackData,
            redesSociaisData: redesSociais.data.attributes 
        },
    };
}

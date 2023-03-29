import Head from 'next/head';
// Utils
import { loadRedesSociais } from '../utils/loadRedesSociais';
import { loadFeedback } from '../utils/loadFeedback';
import { loadContato } from '../utils/loadContato';
import { loadProjetos } from '../utils/loadProjetos';
// Components
import NavigationBar from '../components/Shared/NavigationBar';
import WhatsappIconComponent from '../components/Shared/WhatsappIconComponent';
import HomeBanner from '../components/Home/HomeBanner';
import OurSolutionsComponent from '../components/Home/OurSolutionsComponent';
import OurContactComponent from '../components/Shared/OurContactComponent';
import OurProjectComponent from '../components/Home/OurProjectComponent';
import OurPartnersComponent from '../components/Home/OurPartnersComponent';
import OurFeedBackComponent from '../components/Home/OurFeedBackComponent';
import FooterComponent from '../components/Shared/FooterComponent';

export default function Home({ contatoData, feedbackData, redesSociaisData, numeroProjetosData }) {
    return (
        <>
            <Head>
                <title>EJEM - Engenharia de Materiais</title>
                <meta
                    name="description"
                    content='Empresa Júnior do curso de Engenharia de Materiais da Universidade Federal de Santa Catarina (UFSC). A empresa tem como missão: "Difundir a Engenharia de Materiais: promovendo soluções aos clientes, gerando conhecimento aos alunos e impactando a sociedade."'
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#042660" />
            </Head>
            <main>
                <NavigationBar />
                <WhatsappIconComponent url={redesSociaisData?.linkWhatsapp ? redesSociaisData.linkWhatsapp : '/'} />
                <HomeBanner />
                <OurSolutionsComponent />
                <OurContactComponent contatoData={contatoData} />
                <OurProjectComponent numeroProjetosData={numeroProjetosData} />
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
    const contatoData = await loadContato();
    const feedbackData = await loadFeedback();
    const redesSociaisData = await loadRedesSociais();
    const numeroProjetosData = await loadProjetos();
    return {
        props: {
            contatoData,
            feedbackData,
            redesSociaisData,
            numeroProjetosData,
        },
    };
}


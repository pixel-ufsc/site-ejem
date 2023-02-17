import Head from 'next/head';
import NavigationBar from '../../components/Shared/NavigationBar';
import SolucaoBanner from '../../components/Solucao/SolucaoBanner';
import OurContentComponent from '../../components/Solucao/OurContentComponent';
import FooterComponent from '../../components/Shared/FooterComponent';
import WppComponent from '../../components/Shared/WppComponent';
import OurFormComponent from '../../components/Solucao/OurFormComponent';
import styles from './styles.module.css';

export default function Solucao({ redesSociaisData }) {
    return (
        <div>
            <Head>
                <title>Solução</title>
                <meta name="description" content="Página sobre a empresa" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <NavigationBar />
                <WppComponent />
                <SolucaoBanner />
                <OurContentComponent className={styles.containerForm} />
                <OurFormComponent />
                <FooterComponent redesSociaisData={redesSociaisData}/>
            </main>
        </div>
    );
}

export async function getStaticProps() {
    const redesSociaisFetch = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/rede-social?populate=%2A`
    );
    const redesSociais = await redesSociaisFetch.json();

    return {
        props: { 
            redesSociaisData: redesSociais.data.attributes 
        },
    };
}

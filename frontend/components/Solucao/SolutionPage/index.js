import Head from 'next/head';
// Components
import NavigationBar from '../../Shared/NavigationBar';
import FooterComponent from '../../Shared/FooterComponent';
import BannerComponent from './BannerComponent';
import DescriptionComponent from './DescriptionComponent';
import FormContainerComponent from './FormContainerComponent';

export default function SolutionPage({ title, children: description, icon, redesSociaisData }) {
    return (
        <>
            <Head>
                <title>Solução - {title}</title>
                <meta name="description" content={`Entenda sobre a solução "${title}".`} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <NavigationBar />
                <BannerComponent title={title} />
                <DescriptionComponent icon={icon}>{description}</DescriptionComponent>
                <FormContainerComponent />
                <FooterComponent redesSociaisData={redesSociaisData} />
            </main>
        </>
    );
}

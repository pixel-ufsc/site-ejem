import Head from 'next/head';
// Components
import NavigationBar from '../../Shared/NavigationBar';
import FooterComponent from '../../Shared/FooterComponent';
import WhatsappIconComponent from '../../Shared/WhatsappIconComponent';
import BannerComponent from './BannerComponent';
import DescriptionComponent from './DescriptionComponent';
import FormContainerComponent from './FormContainerComponent';
import InfoButtonComponent from './InfoButtonComponent';

export default function SolutionPage({ title, children: description, icon, redesSociaisData }) {
    return (
        <>
            <Head>
                <title>Solução - {title}</title>
                <meta name="description" content={`Entenda sobre a solução "${title}".`} />
            </Head>
            <main>
                <NavigationBar />
                <WhatsappIconComponent url={redesSociaisData?.linkWhatsapp ? redesSociaisData.linkWhatsapp : '/'} />
                <BannerComponent title={title} />
                <DescriptionComponent icon={icon}>{description}</DescriptionComponent>
                {/* <FormContainerComponent /> */}
                <InfoButtonComponent redesSociaisData={redesSociaisData} />
                <FooterComponent redesSociaisData={redesSociaisData} />
            </main>
        </>
    );
}

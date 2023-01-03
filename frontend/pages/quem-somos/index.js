import Head from "next/head";
import QuemSomosBanner from "../../components/QuemSomos/QuemSomosBanner";
// import IntroCardsComponent from "../../components/AboutUs/IntroCardsComponent";
import OurPartnersComponent from "../../components/QuemSomos/OurPartnersComponent";
import AboutMejComponent from "../../components/QuemSomos/AboutMejComponent";
// import OurResultsComponent from "../../components/Home/OurResultsComponents";
// import RespSocialComponent from "../../components/Home/RespSocialComponent";
import OurMembersComponent from "../../components/QuemSomos/OurMembersComponent";
import OurContactComponent from "../../components/Shared/OurContactComponent";
import FooterComponent from "../../components/Shared/FooterComponent";
// import NavigationBar from "../../components/Shared/NavigationBar";

export default function QuemSomos() {
  return (
    <div>
      <Head>
        <title>Quem somos</title>
        <meta name="description" content="Página sobre a empresa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

        <QuemSomosBanner />
        {/* <NavigationBar /> */}
        {/* <IntroCardsComponent />
        <OurValuesComponent />
        <AboutMejComponent />
        <OurResultsComponent />
        <RespSocialComponent showTimeline={true} />
        <MembersComponent />
      <VamosConversarComponent bgOption="aboutUs" /> */}
        <AboutMejComponent />
        <OurPartnersComponent />
        <OurMembersComponent />
        <OurContactComponent />
        <FooterComponent />
      </main>
    </div>
  );
}


import Head from 'next/head'
import NavigationBar from "../components/Shared/NavigationBar";
import HomeBanner from "../components/Home/HomeBanner";
import OurSolutionsComponent from "../components/Home/OurSolutionsComponent";
import OurContactComponent from "../components/Home/OurContactComponent";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavigationBar></NavigationBar>
        <HomeBanner></HomeBanner>
        {/* <OurSolutionsComponent /> */}
        <OurContactComponent />

      </main>
    </>
  )
}

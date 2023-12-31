import Head from "next/head";
import MapPageLazy from './MapPage';


export default function Home() {


  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {/* Other page content */}
        <MapPageLazy />
      </div>
    </>
  );
} 
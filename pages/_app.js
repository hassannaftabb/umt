import '../styles/globals.css';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <>
      <Head>
        <title>United Manarat</title>
        <meta
          name="description"
          content="United Manarat is part of UMT Group which has an affiliated offices in Australia and Sudan. Companies within UMT group work collaboratively with each other to provide a high quality services to our valuable customers. 
United Manarat is a Saudi owned and run Company with a head office based in Riyadh which was established in 2008. It is fully registered in Saudi Food & Drug Authority (SFDA), Registration No. MDEL IDL-2020-MD-1448. Commercial Registration certificate No. 1010292230.
We at UMT strive to provide premium healthcare solutions and technologies to its valued customers. We specialise in selling and distributing diagnostics medical and scientific devices to customers in Saudi Arabia and other neighboring countries. Our customers vary from across the health care profession and research scientists working in Laboratories, Medical centres, and Hospitals, Universities and Governmental organizations.
Our products portfolio consists of high-quality, globally recognised devices as we import them from leading manufacturers in different parts of the world.
We have passionate and highly trained staff who have extensive experience globally in the Sales and Medical industry. We are committed in providing a professional service throughout our entire company.
At UMT our clients are our main priority, we pride ourselves on our client focused customised after-sales support. Our experience service team is dedicated to providing exceptional maintenance programs that ensure your devices are well maintained at all times.
United Manarat looks forward to bringing you access to the latest and most innovative international technologies as they are produced.
"
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar />

      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

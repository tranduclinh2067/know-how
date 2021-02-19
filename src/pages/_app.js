import Head from 'next/head';
import Footer from '../components/Footer';
import Menu from '../components/Header';

function MyApp({ Component, pageProps}) {

  return (
	<div className='root'>
		<Head>
			<title>&#x02225; KNOW-HOW &#x02225;</title>
			<link rel="icon" href="/favicon.ico" />
			<link rel='stylesheet' href='/styles/resert.css' />
		</Head>
		<Menu />
		<Component {...pageProps} />
		<Footer />
	</div>
  )

}

export default MyApp;

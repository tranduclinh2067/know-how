import Head from 'next/head';
import Footer from '../components/Footer';
import Menu from '../components/Header';

function MyApp({ Component, pageProps}) {
	// const {Title} = props;
  return (
	<div className='root'>
		<Head>
			<title>DEV-NOTE &#x02225;</title>
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

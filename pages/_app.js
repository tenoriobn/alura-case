import Head from 'next/head';
import GlobalStyle from '../src/theme/GlobalStyle';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"></link>
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp;

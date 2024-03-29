import '../styles/globals.css';
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }) {
    return (
        <>
            <NextNProgress color={'#79ABDE'} height={2} stopDelayMs={150} options={{ showSpinner: false }} />
            <Component {...pageProps} />
        </>
    );
}

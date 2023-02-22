import '../styles/globals.css';
import NextNProgress from 'nextjs-progressbar';
import WhatsappIconComponent from '../components/Shared/WhatsappIconComponent';

export default function App({ Component, pageProps }) {
    return (
        <>
            <NextNProgress color={'#79ABDE'} height={2} stopDelayMs={150} />
            <WhatsappIconComponent url={'/'} />
            <Component {...pageProps} />
        </>
    );
}

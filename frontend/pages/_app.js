import WhatsappIconComponent from '../components/Shared/WhatsappIconComponent';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
    return (
        <>
            <WhatsappIconComponent url={'/'} />
            <Component {...pageProps} />
        </>
    );
}

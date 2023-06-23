import styles from './infobutton.module.css';
// Components
import BigButton from '../../../Shared/BigButton';

export default function InfoButtonComponent({ redesSociaisData }) {
    return (
        <div className={styles.container}>
            <BigButton
                href={redesSociaisData?.linkWhatsapp ? redesSociaisData.linkWhatsapp : '/contato'}
                target={redesSociaisData?.linkWhatsapp ? '_blank' : '_self'}
            >
                Clique para mais informações
            </BigButton>
        </div>
    );
}

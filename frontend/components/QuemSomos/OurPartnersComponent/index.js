import Ampera from '../../../public/quemSomos/partners/ampera.png';
import Empower from '../../../public/quemSomos/partners/empower.png';
import LabSolda from '../../../public/quemSomos/partners/labsolda.png';
import LabMat from '../../../public/quemSomos/partners/labmat.png';
import MainPartner from './MainPartner';
import OtherPartners from './OtherPartners';

export default function OurPartnersComponent() {
    return (
        <section>
            <MainPartner
                title={'Parceria com o Labmat'}
                text={`Avaliado como um dos maiores laboratórios de materiais da América Latina por seus serviços de excelência, desenvolvimento de materiais e processos inovadores,      o LABMAT é parceiro da EJEM, desde a criação de nossa EJ, fornecendo serviços como caracterização de materiais, analise de falhas, ensaios mecânicos entre outros serviços   Além disso, contamos com o suporte fornecido por professores e doutores em engenharia que atuam no laboratório trazendo soluções praticas e inovadoras para nossos serviços.`}
                imageUrl={LabMat}
                alt={'Labmat'}
            />
            <OtherPartners title={'Parcerias'} imageUrls={[Ampera, LabSolda, Empower]} />
        </section>
    );
}

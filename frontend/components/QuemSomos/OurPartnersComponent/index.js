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
                text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor elit amet viverra nunc commodo. Auctor sed dictum porta sed cursus ut. Sit elementum aliquam elit sapien quis dolor feugiat placerat. Feugiat tempus blandit dictumst bibendum accumsan habitasse eu id etiam.`}
                imageUrl={LabMat}
                alt={'Labmat'}
            />
            <OtherPartners title={'Parcerias'} imageUrls={[Ampera, LabSolda, Empower]} />
        </section>
    );
}

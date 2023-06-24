import TopBanner from '../../Shared/TopBanner';
import TitleContainer from '../../Shared/TopBanner/TitleContainer';
import Title from '../../Shared/TopBanner/Title';
import ContactButton from './ContactButton';

function HomeBanner() {
    return (
        <TopBanner bgOption="home">
            <TitleContainer>
                <Title>Empresa Júnior de Engenharia de Materiais</Title>
                <ContactButton />
            </TitleContainer>
        </TopBanner>
    );
}

export default HomeBanner;

import TopBanner from '../../../Shared/TopBanner';
import TitleContainer from '../../../Shared/TopBanner/TitleContainer';
import Title from '../../../Shared/TopBanner/Title';

function BannerComponent({ title }) {
    return (
        <TopBanner bgOption="solucao">
            <TitleContainer>
                <Title>{title}</Title>
            </TitleContainer>
        </TopBanner>
    );
}

export default BannerComponent;

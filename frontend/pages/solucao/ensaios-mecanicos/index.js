// Utils
import { loadRedesSociais } from '../../../utils/loadRedesSociais';
// Components
import SolutionPage from '../../../components/Solucao/SolutionPage';
// Assets
import { GearIcon } from '../../../public/icons/icons';

export default function EnsaiosMecanicos({ redesSociaisData }) {
    return (
        <SolutionPage
            redesSociaisData={redesSociaisData}
            title="Ensaios Mecânicos"
            icon={<GearIcon color={'#79ABDE'} />}
        >
            Os ensaios mecânicos são técnicas normatizadas utilizados em materiais para determinar suas propriedades e
            desempenho, garantindo que essas sejam adequadas a sua aplicação.
        </SolutionPage>
    );
}

export async function getStaticProps() {
    const redesSociaisData = await loadRedesSociais();

    return {
        props: {
            redesSociaisData,
        },
    };
}

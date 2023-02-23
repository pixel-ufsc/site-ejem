// Utils
import { loadRedesSociais } from '../../../utils/loadRedesSociais';
// Components
import SolutionPage from '../../../components/Solucao/SolutionPage';
// Assets
import { MicroscopeIcon } from '../../../public/icons/icons';

export default function CaracterizacaoDeMateriais({ redesSociaisData }) {
    return (
        <SolutionPage
            redesSociaisData={redesSociaisData}
            title="Caracterização de Materiais"
            icon={<MicroscopeIcon color={'#79ABDE'} />}
        >
            ...
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

// Utils
import { loadRedesSociais } from '../../../utils/loadRedesSociais';
// Components
import SolutionPage from '../../../components/Solucao/SolutionPage';
// Assets
import { RecycleIcon } from '../../../public/icons/icons';

export default function EnsaiosMecanicos({ redesSociaisData }) {
    return (
        <SolutionPage redesSociaisData={redesSociaisData} title="Reciclagem" icon={<RecycleIcon color={'#79ABDE'} />}>
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

// Utils
import { loadRedesSociais } from '../../../utils/loadRedesSociais';
// Components
import SolutionPage from '../../../components/Solucao/SolutionPage';
// Assets
import { ExclamationIcon } from '../../../public/icons/icons';

export default function AnaliseDeFalhas({ redesSociaisData }) {
    return (
        <SolutionPage
            redesSociaisData={redesSociaisData}
            title="Análise de Falhas"
            icon={<ExclamationIcon color={'#79ABDE'} />}
        >
            Consiste em um processo investigativo na qual utiliza-se técnicas para identificar a causa de uma fratura
            inesperada em uma peça, podendo ela ser decorrente de fatores diversos, tais como: o processo de fabricação,
            o mau uso da peça, uma escolha inadequada de material, entre outros, e dessa forma, nos permite determinar
            ações corretivas ao problema.
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

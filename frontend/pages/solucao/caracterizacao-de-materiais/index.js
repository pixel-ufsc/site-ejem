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
            Na caracterização dos materiais, obtém-se dados sobre análise química do material, granulometria e
            porosidade, a fim de classificar o tipo de material, identificar como o material foi processado e prever um
            comportamento mecânico do mesmo. <br />
            <br />
            Alguns dos ensaios envolvidos: <br />
            Microscopia Óptica; <br />
            Microscopia Eletrônica de Varredura; <br />
            Espectrometria de Emissão Óptic; <br />
            Difração de Raio-X.
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

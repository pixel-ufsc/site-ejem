// Utils
import { loadRedesSociais } from '../../../utils/loadRedesSociais';
// Components
import SolutionPage from '../../../components/Solucao/SolutionPage';
// Assets
import { LightbulbIcon } from '../../../public/icons/icons';

export default function Consultoria({ redesSociaisData }) {
    return (
        <SolutionPage
            redesSociaisData={redesSociaisData}
            title="Otimização de Materiais e Processos"
            icon={<LightbulbIcon color={'#79ABDE'} />}
        >
            A Otimização de Materiais e Processos traz, por meio de uma consultoria e estudo da realidade do cliente, o
            aprimoramento de composição química e propriedades mecânicas, avaliação dos materiais para a fabricação.
            Visa também evitar o super/sub dimensionamento de processos, proporcionando uma redução de custos de
            produção e/ou compra de matéria prima. <br />
            <br />
            Benefícios: <br />
            Aumento de produtividade; <br />
            Aumento de desempenho; <br />
            Controle de Qualidade de materiais e processos.
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

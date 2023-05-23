// Utils
import { loadRedesSociais } from '../../../utils/loadRedesSociais';
// Components
import SolutionPage from '../../../components/Solucao/SolutionPage';
// Assets
import { RecycleIcon } from '../../../public/icons/icons';

export default function Reciclagem({ redesSociaisData }) {
    return (
        <SolutionPage
            redesSociaisData={redesSociaisData}
            title="Seleção de Materiais"
            icon={<RecycleIcon color={'#79ABDE'} />}
        >
            A seleção de materiais traz, por meio de softwares, estudos e contato com o cliente, a adequação de material
            para a realidade do cliente. Com base no entendimento das vontades do cliente, das propriedades necessárias
            à aplicação e dos custos de produção, a EJEM seleciona o melhor material para o caso. <br />
            <br />
            Benefícios: <br />
            Seleção adequada do material; <br />
            Desenvolvimento de produto.
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

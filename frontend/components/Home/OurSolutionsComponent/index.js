import styles from './oursolutions.module.css';
import Link from 'next/link';
// Components
import SolutionCard from './SolutionCard';
// Icons
import {
    MicroscopeIcon,
    MicroscopeSmallIcon,
    GearIcon,
    GearSmallIcon,
    ExclamationIcon,
    ExclamationSmallIcon,
    RecycleIcon,
    RecycleSmallIcon,
    LightbulbIcon,
    LightbulbSmallIcon,
} from '../../../public/icons/icons';

export default function OurSolutionsComponent() {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Conheça nossas soluções</h2>
            <div className={styles.cards}>
                <SolutionCard
                    title={'Caracterização de materiais'}
                    description={
                        'São utilizados em materiais para determinar suas propriedades e desempenho, pois a partir das propriedades é possível determinar a melhor aplicação.'
                    }
                    icon={<MicroscopeIcon />}
                    iconSmall={<MicroscopeSmallIcon />}
                />
                <SolutionCard
                    title={'Ensaios Mecânicos'}
                    description={
                        'Os ensaios mecânicos são utilizados em materiais para determinar suas propriedades e desempenho, pois a partir das propriedades é possível determinar a melhor aplicação.'
                    }
                    icon={<GearIcon />}
                    iconSmall={<GearSmallIcon />}
                />
                <SolutionCard
                    title={'Análise de Falhas'}
                    description={
                        'Método utilizado para prevenir e/ou analisar não conformidades em materiais, produtos e processos.'
                    }
                    icon={<ExclamationIcon />}
                    iconSmall={<ExclamationSmallIcon />}
                />
                <SolutionCard
                    title={'Seleção de materiais'}
                    description={
                        'Selecionar materiais é essencial para garantir qualidade e durabilidade do produto, equilibrando desempenho, viabilidade econômica e sustentabilidade.'
                    }
                    icon={<RecycleIcon />}
                    iconSmall={<RecycleSmallIcon />}
                />
                <SolutionCard
                    title={'Otimização de materiais'}
                    description={
                        'Otimização de materiais e processos busca melhorar a eficiência, qualidade e sustentabilidade de produtos e processos industriais.'
                    }
                    icon={<LightbulbIcon />}
                    iconSmall={<LightbulbSmallIcon />}
                />
            </div>
        </section>
    );
}

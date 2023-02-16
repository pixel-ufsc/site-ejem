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
                    title={'Reciclagem'}
                    description={
                        'A reciclagem é um processo que transforma materiais usados em novos produtos, reduzindo o consumo de recursos naturais.'
                    }
                    icon={<RecycleIcon />}
                    iconSmall={<RecycleSmallIcon />}
                />
                <SolutionCard
                    title={'Consultoria'}
                    description={
                        'A consultoria é um processo de apoio a uma organização, com o objetivo de melhorar a sua performance.'
                    }
                    icon={<LightbulbIcon />}
                    iconSmall={<LightbulbSmallIcon />}
                />
            </div>
        </section>
    );
}

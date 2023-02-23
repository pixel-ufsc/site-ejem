import styles from './formcontainer.module.css';
import OurFormComponent from '../../../Shared/OurFormComponent';

export default function FormContainerComponent() {
    return (
        <div className={styles.container}>
            <OurFormComponent />
        </div>
    );
}

import { useState } from 'react';
import styles from './dropdownbutton.module.css';

export const DropdownButton = ({ label, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.container}>
            <button className={styles.buttonLabel} type="button" onClick={() => setIsOpen(!isOpen)}>
                {label}
            </button>
            {isOpen && <ul>{children}</ul>}
        </div>
    );
};

DropdownButton.Item = ({ children, ...props }) => {
    return <li {...props}>{children}</li>;
};

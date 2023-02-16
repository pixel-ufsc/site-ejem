import { useRef } from 'react';
import styles from './solutioncard.module.css';
import P from 'prop-types';
import Image from 'next/image'

export default function SolutionCard({icon, iconSmall, title, description}) {
	return (
		<div className={styles.container}>
			<div className={styles.cardDefault}>
				{icon}
				<h4>{title}</h4>
			</div>
			
			<div className={styles.cardHovering}>
				{iconSmall}
				<h5>{title}</h5>
				<p>{description}</p>
			</div>
		</div>
	);
}

SolutionCard.propTypes = {
	title: P.string.isRequired,
	description: P.string.isRequired,
	icon: P.element.isRequired,
	iconSmall: P.element,
};
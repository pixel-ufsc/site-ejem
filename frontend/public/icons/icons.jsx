export const BackwardArrowIcon = ({color = '#042660'}) => {
	return (
		<svg width="22" height="38" viewBox="0 0 22 38" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M21.2 5.3L7.95 18.55L21.2 31.8L18.55 37.1L0 18.55L18.55 0L21.2 5.3Z" fill={color}/>
		</svg>
	);
}

export const ForwardArrowIcon = ({color = '#042660'}) => {
	return (
		<svg width="22" height="38" viewBox="0 0 22 38" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M0 31.8L13.25 18.55L0 5.3L2.65 0L21.2 18.55L2.65 37.1L0 31.8Z" fill={color}/>
		</svg>
	);
}
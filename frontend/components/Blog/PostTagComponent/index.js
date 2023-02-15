import styles from "./posttag.module.css";

export default function PostTagComponent({ text = 'Teste' }) {
	return (
		<h4 className={styles.tag}>{text}</h4>
	);
}
import styles from "./Alert.module.css";

export default function Alert({ children }) {
	return (
		<>
			<span className={styles.alert}>{children}</span>
		</>
	);
}

import styles from "./FirstScreen.module.css";
import { Link } from "react-router-dom";
import Layout from "../../Layout";

export default function FirstScreen() {
	return (
		<div className={styles.firstscreen__wrapper}>
			<h4 className={styles.firstscreen__title}>GAME SUWIT JEPANG</h4>
			<Link className={styles.firstscreen__button} to="/input-user">
				KLINK UNTUK MEMULAI
			</Link>
		</div>
	);
}

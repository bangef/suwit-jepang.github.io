import Container from "../../Components/Container";
import styles from "./FirstScreen.module.css";
import { Link } from "react-router-dom";

export default function FirstScreen() {
	return (
		<section className={styles.firstscreen}>
			{/* image__emoji */}
			<img
				src={require("../../img/emoji_hanmd_1.png")}
				alt="emoji"
				className={styles.emoji__hand}
				style={{
					top: 80,
					left: 100,
					transform: "rotate(-50deg)",
				}}
			/>
			<img
				src={require("../../img/emoji_hanmd_2.png")}
				alt="emoji"
				className={styles.emoji__hand}
				style={{
					bottom: 50,
					right: 100,
					transform: "rotate(-50deg)",
				}}
			/>
			<img
				src={require("../../img/emoji_hanmd_3.png")}
				alt="emoji"
				className={styles.emoji__hand}
				style={{
					top: 200,
					right: 100,
					transform: "rotate(50deg)",
				}}
			/>
			{/* ./image__emoji */}
			<img
				src={require("../../img/wave-top.png")}
				alt="wave-top"
				className={styles.firstscreen__image__wave__top}
			/>
			<Container>
				<div className={styles.firstscreen__wrapper}>
					<h4 className={styles.firstscreen__title}>GAME SUWIT JEPANG</h4>
					<Link className={styles.firstscreen__button} to="/play-game">
						KLINK UNTUK MEMULAI
					</Link>
				</div>
			</Container>
			<img
				src={require("../../img/wave-bottom.png")}
				alt="wave-bottom"
				className={styles.firstscreen__image__wave__bottom}
			/>
		</section>
	);
}

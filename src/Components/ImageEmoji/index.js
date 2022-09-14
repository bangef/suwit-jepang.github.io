import styles from "./ImageEmoji.module.css";

function ImageEmoji() {
	return (
		<>
			<img
				src={require("../../img/emoji_hand_1.png")}
				alt="emoji"
				className={styles.emoji__hand}
				style={{
					top: 80,
					left: 100,
					transform: "rotate(-50deg)",
				}}
			/>
			<img
				src={require("../../img/emoji_hand_2.png")}
				alt="emoji"
				className={styles.emoji__hand}
				style={{
					bottom: 50,
					right: 100,
					transform: "rotate(-50deg)",
				}}
			/>
			<img
				src={require("../../img/emoji_hand_3.png")}
				alt="emoji"
				className={styles.emoji__hand}
				style={{
					top: 200,
					right: 100,
					transform: "rotate(50deg)",
				}}
			/>
		</>
	);
}

export default ImageEmoji;

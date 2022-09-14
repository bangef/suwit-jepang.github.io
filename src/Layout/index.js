import styles from "./Layout.module.css";
import ImageEmoji from "../Components/ImageEmoji";
import Container from "../Components/Container";

function Layout({ children }) {
	changeTitle();
	changeFavicon(
		"https://raw.githubusercontent.com/bangef/gampar-online.github.io/master/asset/image/favicon/favicon-32x32.png"
	);
	return (
		<section className={styles.layout}>
			<Container>{children}</Container>
			<ImageEmoji />
			<img
				src={require("../img/wave-top.png")}
				alt="wave-top"
				className={styles.layout__image__wave__top}
			/>
			<img
				src={require("../img/wave-bottom.png")}
				alt="wave-bottom"
				className={styles.layout__image__wave__bottom}
			/>
		</section>
	);
}

const changeTitle = () => {
	document.title = "Game Suwit Jepang";
};

const changeFavicon = (uri) => {
	let link = document.querySelector("link[rel~='icon']");
	if (!link) {
		link = document.createElement("link");
		link.rel = "icon";
		document.getElementsByTagName("head")[0].appendChild(link);
	}
	link.href = uri;
};

export default Layout;

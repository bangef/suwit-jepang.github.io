import { useState } from "react";
import Alert from "../../Components/Alert";
import Layout from "../../Layout";
import styles from "./InputUser.module.css";

export default function InputUser() {
	const [namaPemain, setNamaPemain] = useState({
		namaPemain1: "",
		namaPemain2: "",
	});

	const [isNamaPemeainErr1, setNamaPemain1] = useState(false);
	const [isNamaPemeainErr2, setNamaPemain2] = useState(false);

	const { namaPemain1, namaPemain2 } = namaPemain;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setNamaPemain({ ...namaPemain, [name]: value });
	};

	const validate = () => {
		if (namaPemain1 === "") {
			setNamaPemain1(true);
			namaPemain2 === "" ? setNamaPemain2(true) : setNamaPemain2(false);
			return false;
		} else if (namaPemain2 === "") {
			setNamaPemain2(true);
			namaPemain1 === "" ? setNamaPemain1(true) : setNamaPemain1(false);
			return false;
		} else {
			setNamaPemain1(false);
			setNamaPemain2(false);
			return true;
		}
	};

	const resetInput = () => {
		setNamaPemain({
			namaPemain1: "",
			namaPemain2: "",
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		validate() && true && resetInput();
	};

	return (
		<>
			<h4 className={styles.inputuser__title}>Masukan Nama Pemain</h4>
			<form
				className={styles.inputuser__form}
				onSubmit={handleSubmit}
				autoComplete="off"
			>
				<div className={styles.inputuser__input__group}>
					<label className={styles.inputuser__label}>Nama Pemain 1</label>
					<input
						type="text"
						className={styles.inputuser__input}
						value={namaPemain1}
						name="namaPemain1"
						onChange={handleChange}
					/>
					{isNamaPemeainErr1 && <Alert>*Nama Pemain 1 Wajib Diisi!</Alert>}
				</div>
				<div className={styles.inputuser__input__group}>
					<label className={styles.inputuser__label}>Nama Pemain 2</label>
					<input
						type="text"
						className={styles.inputuser__input}
						value={namaPemain2}
						name="namaPemain2"
						onChange={handleChange}
					/>
					{isNamaPemeainErr2 && <Alert>*Nama Pemain 2 Wajib Diisi!</Alert>}
				</div>
				<button type="submit" className={styles.inputuser__button}>
					MULAI
				</button>
			</form>
		</>
	);
}

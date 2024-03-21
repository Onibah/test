import { ICardProps } from "../../../../types/types";
import { useUsersDispatch } from "../../../../hooks/hooks";
import { actionTypes } from "../../../../types/types";
import { useState } from "react";
import styles from "./card.module.scss";
import del from "../card/del.svg";

function Card({
	userName,
	email,
	address,
	phone,
	birthday,
	id,
	picture,
}: ICardProps) {
	const dispatch = useUsersDispatch();
	const [isPicked, setIsPicked] = useState(false);
	const info = [
		{ name: "Phone No", text: phone },
		{ name: "Birthday", text: birthday },
		{ name: "Address", text: address },
	];

	function deleteClickHandler(
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) {
		const buttonId = e.currentTarget.id;
		if (dispatch) {
			dispatch({
				type: actionTypes.deleteUser,
				id: buttonId,
			});
		}
	}

	function pickUserHandler() {
		setIsPicked(!isPicked);
	}

	return (
		<div
			className={isPicked ? `${styles.card} ${styles.picked}` : styles.card}
			onClick={pickUserHandler}
			id={id}
		>
			<div className={styles.cardTop}>
				<img className={styles.img} src={picture} />
				<div className={styles.cardTopContent}>
					<h3 className={styles.title}>{userName}</h3>
					<a className={styles.email} href="#">
						{email}
					</a>
				</div>
			</div>
			<ul className={styles.list}>
				{info.map((item) => (
					<li className={styles.listItem} key={item.name}>
						<span className={styles.itemName}>{item.name}</span>
						<div className={styles.itemText}>{item.text}</div>
					</li>
				))}
			</ul>

			<button
				className={
					isPicked
						? `${styles.buttonDelete} ${styles.picked}`
						: styles.buttonDelete
				}
				onClick={deleteClickHandler}
				id={id}
			>
				<img className="" src={del} />
			</button>
		</div>
	);
}
export { Card };

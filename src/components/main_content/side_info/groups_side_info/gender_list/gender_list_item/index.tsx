import { IUsersByGender } from "../../../../../../types/types";
import styles from "./gender_list_item.module.scss";

function GenderListItem({ gender, count }: IUsersByGender) {
	return (
		<li className={styles.genderListItem}>
			<span className={styles.genderName}>{gender}</span>
			<span>
				{count} {count === 1 ? "user" : "users"}
			</span>
		</li>
	);
}
export { GenderListItem };

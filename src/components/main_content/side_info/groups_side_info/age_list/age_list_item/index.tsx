import { IUsersByAge } from "../../../../../../types/types";
import styles from "./age_list_item.module.scss";
function AgeListItem({ count, range }: IUsersByAge) {
	return (
		<li className={styles.ageListItem}>
			<span className={styles.ageRange}>{range}</span>
			<span>
				{count} {count === 1 ? "user" : "users"}
			</span>
		</li>
	);
}
export { AgeListItem };

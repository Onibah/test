import { groupingTittleType } from "../../../../types/types";
import { AgeList } from "./age_list";
import { GenderList } from "./gender_list";
import styles from "./groups_side_info.module.scss";
function GroupsSideInfo({ title }: { title: groupingTittleType }) {
	return (
		<div className={styles.groupsSideInfo}>
			<h4 className={styles.title}>{title} Groups</h4>
			{title === "Age" ? <AgeList /> : <GenderList />}
		</div>
	);
}

export { GroupsSideInfo };

import { HeaderSideInfo } from "./header_side_info";
import { GroupsSideInfo } from "./groups_side_info";
import { groupingTittleType } from "../../../types/types";
import styles from './side_info.module.scss'
function SideInfo() {
	return (
		<div className={styles.sideInfo}>
			<HeaderSideInfo />
			<GroupsSideInfo title={groupingTittleType.Age} />
			<GroupsSideInfo title={groupingTittleType.Gender} />
		</div>
	);
}
export { SideInfo };

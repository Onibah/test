import { useUsers } from "../../../../hooks/hooks";
import styles from "./header_side_info.module.scss";
function HeaderSideInfo() {
	const users = useUsers();
	const numberOfUsers = users?.length ? users?.length : null;
	return <h3 className={styles.headerSideInfo}>{numberOfUsers} Users</h3>;
}
export { HeaderSideInfo };

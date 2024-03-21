import { useEffect } from "react";
import { useUsers, useUsersDispatch } from "../../hooks/hooks";
import { Cards } from "./cards";
import { SideInfo } from "./side_info";
import { api } from "../../utils/api";
import { actionTypes } from "../../types/types";
import { numberUsers } from "../../utils/constants";
import styles from "./main_content.module.scss";


function MainContent() {
	const dispatch = useUsersDispatch();
	const users = useUsers();
	const isUsers = users?.length ? true : false;
	useEffect(() => {
		api("https://randomuser.me/api/?results=", numberUsers).then((users) => {
			if (dispatch) {
				dispatch({
					type: actionTypes.setUsers,
					users,
				});
			}
		});
	}, []);

	return isUsers ? (
		<div className={styles.mainContent}>
			<Cards />
			<SideInfo />
		</div>
	) : (
		"loading..."
	);
}
export { MainContent };

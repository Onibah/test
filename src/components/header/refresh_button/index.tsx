import { useState } from "react";
import { useUsersDispatch } from "../../../hooks/hooks";
import { actionTypes } from "../../../types/types";
import { api } from "../../../utils/api";
import { numberUsers } from "../../../utils/constants";
import styles from './refresh_button.module.scss'

function RefreshButton() {
	const dispatch = useUsersDispatch();
	const [isDisabled, setIsDisabled] = useState(false)
	function refreshClickHandler() {
		setIsDisabled(true)
		api("https://randomuser.me/api/?results=", numberUsers).then((users) => {
			if (dispatch) {
				dispatch({
					type: actionTypes.setUsers,
					users,
				});
				setIsDisabled(false)
			}
		});
	}
	return <button className={styles.refreshButton} disabled={isDisabled} onClick={refreshClickHandler} type="button">Refresh Users</button>;
}
export { RefreshButton };

import { useEffect, useState } from "react";
import { useUsers } from "../../../../../hooks/hooks";
import { IUsersByGender } from "../../../../../types/types";
import { GenderListItem } from "./gender_list_item";

function GenderList() {
	const users = useUsers();
	const isUsers = users?.length ? users : null;
	const [usersByGender, setUsersByGender] = useState<IUsersByGender[] | []>([]);

	function getUsersByGender() {
		const usersByGenderMap: Map<string, number> = new Map();
		users?.forEach(({ gender }) => {
			const capitalizedGenderName = gender[0].toUpperCase() + gender.slice(1);
			if (usersByGenderMap.has(capitalizedGenderName)) {
				const prevCounterValue =
					usersByGenderMap.get(capitalizedGenderName) || 0;
				usersByGenderMap.set(capitalizedGenderName, prevCounterValue + 1);
			} else {
				usersByGenderMap.set(capitalizedGenderName, 1);
			}
		});
		const usersByGender = Array.from(usersByGenderMap, ([gender, count]) => ({
			gender,
			count,
		}));
		return usersByGender;
	}
	useEffect(() => {
		if (users?.length) {
			setUsersByGender(getUsersByGender());
		}
	}, [users]);

	return (
		<ul>
			{isUsers &&
				usersByGender.map(({ gender, count }) => (
					<GenderListItem key={gender} gender={gender} count={count} />
				))}
		</ul>
	);
}
export { GenderList };

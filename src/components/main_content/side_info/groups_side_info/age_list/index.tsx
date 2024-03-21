/* eslint-disable no-mixed-spaces-and-tabs */
import { useEffect, useState } from "react";
import { useUsers } from "../../../../../hooks/hooks";
import { AgeListItem } from "./age_list_item";
import {
	IUsersByAge,
	usersRangeKeys,
	IRange,
} from "../../../../../types/types";

function AgeList() {
	const users = useUsers();
	const isUsers = users?.length ? users : null;
	const [usersByAge, setUsersByAge] = useState<IUsersByAge[] | []>([]);

	function getRAnges(): Record<usersRangeKeys, IRange> {
		const ranges: Record<usersRangeKeys, IRange> = {} as Record<
			usersRangeKeys,
			IRange
		>;
		Object.values(usersRangeKeys).forEach((value) => {
			const valueContainsTo = value.split(" to ").length === 2;
			if (valueContainsTo) {
				const [start, end] = value.split(" to ").map(Number);
				ranges[value] = { start, end };
			} else {
				const startNumberToInfinity = Number(parseInt(value));
				ranges[value] = { start: startNumberToInfinity, end: Infinity };
			}
		});

		return ranges;
	}
	function getUsersByAge() {
		const usersByAgeMap: Map<string, number> = new Map();
		const ranges = getRAnges();
		users?.forEach((user) => {
			const userAge = user.dob.age;
			Object.values(usersRangeKeys).forEach((value) => {
				const { start, end } = ranges[value];
				const inRange = userAge >= start && userAge <= end;

				if (usersByAgeMap.has(value) && inRange) {
					const prevCounterValue = usersByAgeMap.get(value) || 0;
					usersByAgeMap.set(value, prevCounterValue + 1);
				} else if (!usersByAgeMap.has(value) && inRange) {
					usersByAgeMap.set(value, 1);
				}
			});
		});

		const usersByAge = Array.from(usersByAgeMap, ([range, count]) => {
			return {
				range,
				count,
			};
		}).sort((a, b) => a.range.localeCompare(b.range));
		return usersByAge;
	}

	useEffect(() => {
		if (users?.length) {
			setUsersByAge(getUsersByAge());
		}
	}, [users]);

	return (
		<ul>
			{isUsers &&
				usersByAge.map(({ range, count }) => (
					<AgeListItem key={range} count={count} range={range} />
				))}
		</ul>
	);
}
export { AgeList };

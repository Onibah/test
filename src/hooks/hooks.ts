import { useContext, useEffect, useState } from "react";
import {
	UsersContext,
	UsersDispatchContext,
	SearchContext,
	SearchDispatchContext,
} from "../users_context/users-context";

function useUsers() {
	return useContext(UsersContext);
}
function useUsersDispatch() {
	return useContext(UsersDispatchContext);
}
function useSearch() {
	return useContext(SearchContext);
}
function useSearchDispatch() {
	return useContext(SearchDispatchContext);
}

function useDebounce(value: string, delay: number) {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => setDebouncedValue(value), delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);

	return debouncedValue;
}

export {
	useUsers,
	useUsersDispatch,
	useSearch,
	useSearchDispatch,
	useDebounce,
};

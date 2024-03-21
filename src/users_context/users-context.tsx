import { createContext, useReducer, Dispatch } from "react";
import {
	ISearchAction,
	IUser,
	IUserAction,
	IProviderProps,
	actionTypes,
	actionTypesSearch,
	ISearchValue,
} from "../types/types";

const UsersContext = createContext<IUser[] | null>(null);
const UsersDispatchContext = createContext<Dispatch<IUserAction> | null>(null);

const initialStateUsers: IUser[] = [];
function usersReducer(users: IUser[], action: IUserAction): IUser[] {

	
	switch (action.type) {
		case actionTypes.setUsers: {

			return action.users || users;
		}
		case actionTypes.deleteUser: {
			return users.filter(({ login }) => login.uuid !== action.id);
		}
		default: {
			return users;
		}
	}
}

function UsersProvider({ children }: IProviderProps) {
	const [users, dispatch] = useReducer(usersReducer, initialStateUsers);
	return (
		<UsersContext.Provider value={users}>
			<UsersDispatchContext.Provider value={dispatch}>
				{children}
			</UsersDispatchContext.Provider>
		</UsersContext.Provider>
	);
}


const SearchContext = createContext<ISearchValue | null>(null);
const SearchDispatchContext = createContext<Dispatch<ISearchAction> | null>(
	null
);

const initialStateSearch: ISearchValue = { value: "" };

function searchReducer(searchValue: ISearchValue, action: ISearchAction) {
	switch (action.type) {
		case actionTypesSearch.setSearchValue: {
			return { value: action.searchValue };
		}
		default: {
			return searchValue;
		}
	}
}
function SearchProvider({ children }: IProviderProps) {
	const [searchValue, dispatch] = useReducer(searchReducer, initialStateSearch);
	return (
		<SearchContext.Provider value={searchValue}>
			<SearchDispatchContext.Provider value={dispatch}>
				{children}
			</SearchDispatchContext.Provider>
		</SearchContext.Provider>
	);
}

export {
	UsersProvider,
	UsersContext,
	UsersDispatchContext,
	SearchProvider,
	SearchContext,
	SearchDispatchContext,
};

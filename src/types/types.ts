import { ReactNode } from "react";

interface IUser {
	cell: string;
	dob: {
		age: number;
		date: string;
	};
	email: string;
	gender: string;
	id: {
		name: string;
		value: string;
	};
	location: {
		city: string;
		coordinates: {
			latitude: string;
			longitude: string;
		};
		country: string;
		postcode: string;
		state: string;
		street: {
			name: string;
			number: number;
		};
		timezone: { description: string; offset: string };
	};
	login: {
		md5: string;
		password: string;
		salt: string;
		sha1: string;
		sha256: string;
		username: string;
		uuid: string;
	};
	name: {
		first: string;
		last: string;
		title: string;
	};
	nat: string;
	phone: string;
	picture: {
		large: string;
		medium: string;
		thumbnail: string;
	};
	registered: {
		age: number;
		date: string;
	};
}
enum actionTypes {
	setUsers = "setUsers",
	deleteUser = "deleteUser",
}
interface IUserAction {
	type: actionTypes;
	users?: IUser[];
	id?: string;
}
enum actionTypesSearch {
	setSearchValue = "setSearchValue",
}
interface ISearchValue {
	value: string;
}
interface ISearchAction {
	type: actionTypesSearch;
	searchValue: string;
}
interface IProviderProps {
	children: ReactNode;
}

interface ICardProps {
	userName: string;
	email: string;
	phone: string;
	birthday: string;
	address: string;
	id: string;
	picture: string;
}
interface IUsersByAge {
	range: string;
	count: number;
}
interface IUsersByGender {
	gender: string;
	count: number;
}
enum groupingTittleType {
	Age = "Age",
	Gender = "Gender",
}
enum usersRangeKeys {
	"11 to 20" = "11 to 20",
	"21 to 30" = "21 to 30",
	"31 to 40" = "31 to 40",
	"41 to 50" = "41 to 50",
	"51+" = "51+",
}
interface IRange {
	start: number;
	end: number;
}
interface ImagesType {
	[key: string]: () => Promise<{ default: string }>;
}
export type {
	IUser,
	IUserAction,
	IProviderProps,
	ICardProps,
	IUsersByAge,
	IRange,
	IUsersByGender,
	ISearchAction,
	ISearchValue,
	ImagesType,
};

export { actionTypes, groupingTittleType, usersRangeKeys, actionTypesSearch };

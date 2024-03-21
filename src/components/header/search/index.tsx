import { useEffect, useState } from "react";
import { useSearchDispatch, useDebounce } from "../../../hooks/hooks";
import { actionTypesSearch } from "../../../types/types";
import styles from './search.module.scss'

function Search() {
	const [searchValue, setSearchValue] = useState("");
	const debouncedValue = useDebounce(searchValue, 1000);
	const dispatch = useSearchDispatch();
	function handleChangeSearchInput(e: React.ChangeEvent<HTMLInputElement>) {
		const inputValue = e.target.value;
		setSearchValue(inputValue);
	}
	useEffect(() => {
		if (dispatch) {
			dispatch({
				type: actionTypesSearch.setSearchValue,
				searchValue: debouncedValue.toLowerCase(),
			});
		}
	}, [debouncedValue]);

	return (
		<input placeholder="Search" className={styles.search}
			value={searchValue}
			onChange={handleChangeSearchInput}
		></input>
	);
}
export { Search };

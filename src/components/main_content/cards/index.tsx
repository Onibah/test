import { useSearch, useUsers } from "../../../hooks/hooks";
import { Card } from "./card";
import { formatDate } from "../../../utils/format-date-func";
import styles from './cards.module.scss'

function Cards() {
	const users = useUsers();
	const searchValue = useSearch();
	const isSearchValue = searchValue?.value.trim().toLowerCase();


	const filteredUsers = users?.filter((user) => {
		const userName =
			`${user.name.title} ${user.name.first} ${user.name.last}`.toLowerCase();
		const email = user.email.toLowerCase();
		const address =
			`${user.location.state} ${user.location.city} ${user.location.country}`.toLowerCase();
		const phone = user.phone.toLowerCase();
		const birthday = formatDate(user.dob.date).toLowerCase();

		return (
			userName.includes(isSearchValue || "") ||
			email.includes(isSearchValue || "") ||
			address.includes(isSearchValue || "") ||
			phone.includes(isSearchValue || "") ||
			birthday.includes(isSearchValue || "")
		);
	});
	
	

	return (
		<div className={styles.cards}>
			{(filteredUsers?.length === 0 ? users : filteredUsers)?.map(
				({ login, name, phone, email, location, dob, picture }) => (
					<Card 
						key={login.uuid}
						email={email}
						address={`${location.state} ${location.city} ${location.country}`}
						phone={phone}
						birthday={formatDate(dob.date)}
						userName={`${name.title} ${name.first} ${name.last}`}
						id={login.uuid}
						picture={picture.medium}
					/>
				)
			)}
		</div>
	);
}
export { Cards };

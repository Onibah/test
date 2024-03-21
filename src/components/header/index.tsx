import { RefreshButton } from "./refresh_button";
import { Search } from "./search";
import styles from './header.module.scss'
function Header() {
	return (
		<div className={styles.header}>
			<Search />
			<RefreshButton />
		</div>
	);
}
export { Header };

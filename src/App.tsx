import { SearchProvider, UsersProvider } from "./users_context/users-context";
import "./App.css";
import { Header } from "./components/header";
import { MainContent } from "@components/main_content";




function App() {
	return (
		<UsersProvider>
			<SearchProvider>
				<div className="wrapper">
					<Header />
					<MainContent/>
				</div>
			</SearchProvider>
		</UsersProvider>
	);
}

export default App;

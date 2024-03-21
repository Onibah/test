async function api(url: string, numberUsers: number) {
	try {
		const resoponse = await fetch(`${url}${numberUsers}`);
		const result = await resoponse.json();
		const users = result.results;

		return users;
	} catch (err) {
		console.log(err);
	}
}

export { api };

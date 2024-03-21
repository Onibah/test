function formatDate(dateString: string) {
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	const date = new Date(dateString);
	const day = date.getDate();
	const month = months[date.getMonth()];
	const year = date.getFullYear();
	const birthday = `${day} ${month} ${year}`;
	return birthday;
}
export { formatDate };

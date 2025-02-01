/**
 * Formats a date string into a human-readable format.
 *
 * @param {string} dateString - The date string to format.
 * @returns {string} The formatted date string in "Month Day, Year" format.
 */
const formatDate = (dateString) => {
	const options = { year: "numeric", month: "long", day: "numeric" };
	const date = new Date(dateString);
	return date.toLocaleDateString("en-US", options);
};

export default formatDate;

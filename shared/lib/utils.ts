/**
 * Convert a string to title case (e.g. "web development" -> "Web Development")
 */
export const titleCase = (str: string) =>
	str
		.toLowerCase()
		.split(' ')
		.map(word => word[0].toUpperCase() + word.slice(1))
		.join(' ');

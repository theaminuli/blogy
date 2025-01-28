/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			container: {
				center: true, // Centers the container
				screens: {
					sm: '640px',
					md: '768px',
					lg: '1024px',
					xl: '1270px', // Set the container width to 1170px for XL
					'2xl': '1270px', // Retain the width for 2XL or modify as needed
				},
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '4rem',
					xl: '5rem',
					'2xl': '6rem',
				},
			},
		},
	},
	plugins: [],
};

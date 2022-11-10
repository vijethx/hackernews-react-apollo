/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			orange: "#ff6600",
			gray: "#828282",
			bgGray: "#F6F6EF",
			buttonface: "#F0F0F0",
		},
		extend: {},
	},
	plugins: [],
};

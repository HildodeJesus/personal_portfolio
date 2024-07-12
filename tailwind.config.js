/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"default-green": "#00BE62",
				"secondary-green": "#051E07",
			},
			backgroundImage: {
				"default-gradient":
					"linear-gradient(to right, #000000 10%, #051E07 , #000000)",
			},
		},
	},
	plugins: [],
};

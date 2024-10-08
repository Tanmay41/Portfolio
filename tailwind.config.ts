import type { Config } from "tailwindcss";
const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
import svgToDataUri from "mini-svg-data-uri";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		fontFamily: {
			script: ["Dancing Script"],
			crash: ["Clash Display"],
		},
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			keyframes: {
				moveHorizontal: {
					"0%": {
						transform: "translateX(-50%) translateY(-10%)",
					},
					"50%": {
						transform: "translateX(50%) translateY(10%)",
					},
					"100%": {
						transform: "translateX(-50%) translateY(-10%)",
					},
				},
				moveInCircle: {
					"0%": { transform: "rotate(0deg)" },
					"50%": { transform: "rotate(180deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
				moveVertical: {
					"0%": { transform: "translateY(-50%)" },
					"50%": { transform: "translateY(50%)" },
					"100%": { transform: "translateY(-50%)" },
				},
				meteor: {
					"0%": {
						transform: "rotate(215deg) translateX(0)",
						opacity: "1",
					},
					"70%": { opacity: "1" },
					"100%": {
						transform: "rotate(215deg) translateX(-900px)",
						opacity: "0",
					},
				},
				accordionDown: {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				accordionUp: {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				accordionDown: "accordionDown 0.2s ease-out",
				accordionUp: "accordionUp 0.2s ease-out",
				meteorEffect: "meteor 5s linear infinite",
				first: "moveVertical 30s ease infinite",
				second: "moveInCircle 20s reverse infinite",
				third: "moveInCircle 40s linear infinite",
				fourth: "moveHorizontal 40s ease infinite",
				fifth: "moveInCircle 20s ease infinite",
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		require("@designbycode/tailwindcss-text-stroke"),
		addVariablesForColors,
		function ({ matchUtilities, theme }: any) {
			matchUtilities(
				{
					"bg-grid": (value: string) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
						)}")`,
					}),
					"bg-grid-small": (value: string) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
						)}")`,
					}),
					"bg-dot": (value: string) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
						)}")`,
					}),
				},
				{
					values: flattenColorPalette(theme("backgroundColor")),
					type: "color",
				}
			);
		},
	],
};

function addVariablesForColors({ addBase, theme }: any) {
	const allColors = flattenColorPalette(theme("colors"));
	const newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		":root": newVars,
	});
}

export default config;

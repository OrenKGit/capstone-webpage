/** @type {import('tailwindcss').Config} */
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';
import svgToDataUri from 'mini-svg-data-uri';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				geist: ['Geist', 'sans-serif'],
				'geist-mono': ['GeistMono', 'sans-serif']
			},
			fontWeight: {
				thin: '100',
				extralight: '200',
				light: '300',
				normal: '400',
				medium: '500',
				semibold: '600',
				bold: '700',
				extrabold: '800',
				black: '900'
			},
			animation: {
				grid: 'grid 15s linear infinite',
				orbit: 'orbit calc(var(--duration)*1s) linear infinite',
				gradient: 'gradient 8s linear infinite',
				marquee: 'marquee var(--duration) linear infinite',
				'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
				meteor: 'meteor 5s linear infinite',
				"aurora-border": "aurora-border 6s ease-in-out infinite",
				"aurora-1": "aurora-1 12s ease-in-out infinite alternate",
				"aurora-2": "aurora-2 12s ease-in-out infinite alternate",
				"aurora-3": "aurora-3 12s ease-in-out infinite alternate",
				"aurora-4": "aurora-4 12s ease-in-out infinite alternate"
			},
			keyframes: {
				grid: {
					'0%': { transform: 'translateY(-50%)' },
					'100%': { transform: 'translateY(0)' }
				},
				'shine-pulse': {
					'0%': {
						'background-position': '0% 0%'
					},
					'50%': {
						'background-position': '100% 100%'
					},
					to: {
						'background-position': '0% 0%'
					}
				},
				orbit: {
					'0%': {
						transform: 'rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)'
					}
				},
				gradient: {
					to: {
						'background-position': '200% center'
					}
				},
				marquee: {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(calc(-100% - var(--gap)))' }
				},
				'marquee-vertical': {
					from: { transform: 'translateY(0)' },
					to: { transform: 'translateY(calc(-100% - var(--gap)))' }
				},
				meteor: {
					'0%': { transform: 'rotate(215deg) translateX(0)', opacity: 1 },
					'70%': { opacity: 1 },
					'100%': {
						transform: 'rotate(215deg) translateX(-500px)',
						opacity: 0
					}
				},
				"aurora-border": {
					"0%, 100%": { borderRadius: "37% 29% 27% 27% / 28% 25% 41% 37%" },
					"25%": { borderRadius: "47% 29% 39% 49% / 61% 19% 66% 26%" },
					"50%": { borderRadius: "57% 23% 47% 72% / 63% 17% 66% 33%" },
					"75%": { borderRadius: "28% 49% 29% 100% / 93% 20% 64% 25%" },
				},
				"aurora-1": {
					"0%, 100%": { top: "0", right: "0" },
					"50%": { top: "50%", right: "25%" },
					"75%": { top: "25%", right: "50%" },
				},
				"aurora-2": {
					"0%, 100%": { top: "0", left: "0" },
					"60%": { top: "75%", left: "25%" },
					"85%": { top: "50%", left: "50%" },
				},
				"aurora-3": {
					"0%, 100%": { bottom: "0", left: "0" },
					"40%": { bottom: "50%", left: "25%" },
					"65%": { bottom: "25%", left: "50%" },
				},
				"aurora-4": {
					"0%, 100%": { bottom: "0", right: "0" },
					"50%": { bottom: "25%", right: "40%" },
					"90%": { bottom: "50%", right: "25%" },
				},
			},
			colors: {
				"color-1": "hsl(var(--color-1))",
				"color-2": "hsl(var(--color-2))",
				"color-3": "hsl(var(--color-3))",
				"color-4": "hsl(var(--color-4))",
				"color-5": "hsl(var(--color-5))",
			},
		}
	},
	plugins: [
		addVariablesForColors,
		function ({ matchUtilities, theme }: any) {
			matchUtilities(
				{
					"bg-grid": (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
						)}")`,
					}),
					"bg-grid-small": (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
						)}")`,
					}),
					"bg-dot": (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
						)}")`,
					}),
				},
				{ values: flattenColorPalette(theme("backgroundColor")), type: "color" }
			);
		},
	]
};

function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme('colors'));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		':root': newVars
	});
}
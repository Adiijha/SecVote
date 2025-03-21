/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["media"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],

	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				//all colors used in the SecVote
				bg: "#121212",
        		"light-black": "#1e1e1e",
        		purple: "#7D67D2",
        		blue: "#5A96E3",
        		yellow: "#FFD166",
        		"hover-yellow": "#E6C155",
        		"text-box": "#2C2F42",
			},
			backgroundImage: {
				'thoughts': "url('./public/Thoughts.png')"
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			animation: {
				rotate: 'rotate 10s linear infinite',
			},
			keyframes: {
				rotate: {
					'0%': { transform: 'rotate(0deg) scale(10)' },
					'100%': { transform: 'rotate(-360deg) scale(10)' },
				},
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
}


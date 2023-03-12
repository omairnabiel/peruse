const colors = require('./colors')

module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors,
		spacing: {
			auto: 'auto',
			0: '0',
			1: '1px',
			2: '2px',
			4: '4px',
			6: '6px',
			8: '8px',
			12: '12px',
			16: '16px',
			20: '20px',
			24: '24px',
			28: '28px',
			32: '32px',
			40: '40px',
			48: '48px',
			64: '64px',
			'1/2': '50%',
			'1/3': '33.33333%',
			'2/3': '66.66667%',
			'1/4': '25%',
			'3/4': '75%',
			'1/5': '20%',
			'2/5': '40%',
			'3/5': '60%',
			'4/5': '80%',
			'1/6': '16.66667%',
			'5/6': '83.33333%',
			full: '100%',
			screen: '100vw',
		},
		borderRadius: {
			default: '4px',
			sm: '2px',
			full: '100%',
		},
		extend: {
			fontFamily: {
				sfpro: ['Source Sans Pro', 'sans-serif'],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}

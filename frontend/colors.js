const colors = {
	inherit: 'inherit',
	transparent: 'transparent',
	white: '#FFFFFF',
	'gray-100': '#F4FAFF',
	'gray-200': '#E2E8F4',
	'gray-300': '#C1CBDC',
	'gray-400': '#8C95A8',
	'gray-500': '#4B566B',
	'gray-550': '#3D485D',
	'gray-600': '#353D4D',
	'gray-650': '#2C3443',
	'gray-700': '#222A39',
	'gray-800': '#1A202C',
	'gray-900': '#141622',
	'red-100': '#FFE0D0',
	'red-300': '#DA7D80',
	'red-400': '#FF7C6C',
	'red-500': '#FF6E64',
	'red-600': '#F24F39',
	'green-200': '#8ADC89',
	'green-300': '#1DE297',
	'green-500': '#00C57A',
	'green-800': '#00BA77',
	'blue-500': '#0BA7FF',
	'blue-700': '#0062a4',
	'yellow-400': '#FAD878',
	'yellow-500': '#FECE2F',
}

// shorthand notation aliases
colors.red = colors['red-500']
colors.green = colors['green-500']
colors.blue = colors['blue-500']
colors.yellow = colors['yellow-500']

// functional name aliases
colors.error = colors['red-500']
colors.primary = colors['green-500']
colors.warn = colors['yellow-500']
colors.step = colors['blue-500']
colors.video = colors['green-500']
colors['background-dark'] = colors['gray-800']
colors['background-light'] = colors['gray-700']
colors.scrollbar = colors['gray-900']
colors.badge = colors['red-500']
colors.banner = colors['blue-500']

module.exports = colors

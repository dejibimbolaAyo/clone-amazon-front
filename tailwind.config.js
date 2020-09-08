module.exports = {
	purge: [
		'.next/**/*.js',
		'pages/**/*.js',
		'pages/**/*.jsx',
		'src/**/*.jsx',
		'src/**/*.ts',
		'src/**/*.tsx',
		'public/**/*.html',
	],
	theme: {
		extend: {
			spacing: {
				'14': '3.5rem',
			}
		},
	},
	variants: {},
	plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,ts}'],
	theme: {
		extend: {
			colors: {
				title: 'hsla(221, 9%, 23%, 1)',
				gray: 'hsla(208, 7%, 54%, 1)',
				'primary-color': '#e82625',
				'secondary-color': 'hsla(33, 77%, 61%, 1)',
				'text-color': 'hsla(209, 30%, 19%, 1)',
				'gray-bg': 'hsla(210, 9%, 96%, 1)',
				bg: 'hsla(0, 0%, 95%, 1)',
				'bg-active': 'hsla(189, 37%, 96%, 1)'
			},
			fontFamily: {
				roboto: ['Roboto', 'sans-serif']
			},
			boxShadow: {
				custom: '0 41px 89px 0 hsla(0, 0%, 0%, 0.1)'
			},
			borderColor: {
				input: 'hsla(210, 7%, 84%, 1)',
				active: 'hsla(189, 34%, 55%, 1)'
			}
		}
	},
	plugins: []
}

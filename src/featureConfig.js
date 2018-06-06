import main from './views/main';

export default {
	'uig-version': '4.0.0-alpha.4',
	version: '1.0.0',
	name: '$FEATURE-config',
	description: '',
	env: {
		language: 'JavaScript',
		browser: true,
	},
	extensions: [
		'UIG-React',
	],
	dependencies: {
		'@workmarket/front-end-components': {
			npm: '^12.1.0',
			import: '*',
			as: 'components',
		},
	},
	mode: 'x-React',
	main,
};

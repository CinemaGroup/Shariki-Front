module.exports = {
	apps: [
		{
			name: 'next-app',
			script: 'yarn',
			args: 'start',
			watch: true,
			ignore_watch: [
				'node_modules',
				'logs',
				'.next/cache',
				'.graphqlrc.yaml',
				'apollo.config.js',
				'src/__generated__',
			],
			env: {
				NODE_ENV: 'production',
			},
		},
	],
}

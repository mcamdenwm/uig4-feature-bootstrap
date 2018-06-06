export default
tab =>
	[':call',
		[':ifElse',
			[':equals', tab],
			[':always', { display: 'block' }],
			[':always', { display: 'none' }],
		],
		[':state', ['$FEATURE', 'DRAWER', 'activeTab'], 'assign'],
	];

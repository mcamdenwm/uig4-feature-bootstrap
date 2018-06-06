/**
 * Uncomment this block when you have an endpooint to fetch the dashboard list from
 */

// export default [{
// 	path: ['$FEATURE', 'DASHBOARD', 'list'],
// 	payload: {
// 		request: {},
// 	},
// 	meta: {
// 		swagger: {
// 			operationId: 'wm_package_list',
// 			onSuccess: {
// 				path: ['$FEATURE', 'DASHBOARD', 'list', 'success'],
// 			},
// 			onError: {
// 				path: ['$FEATURE', 'DASHBOARD', 'list', 'error'],
// 			},
// 		},
// 	}
// }];

export default [{
	path: ['$FEATURE', 'DASHBOARD', 'list', 'success'],
	payload: {
		body: {
			result: {
				payload: [{
					uuid: '1234',
					name: 'Bob Johnson',
					description: 'Ayooo',
				}, {
					uuid: '123',
					name: 'Bobby Johnson',
					description: 'Ayooo',
				}, {
					uuid: '12',
					name: 'JoBob Johnson',
					description: 'Ayooo',
				}],
			},
		},
	},
}];

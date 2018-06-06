export default {
	$FEATURE: {
		THING: true,
		// Create modal
		CREATE: {
			open: false,
		},
		// Manage drawer
		MANAGE: {
			open: false,
		},
		DASHBOARD: {
			list: {
				success: {
					body: {
						result: {
							payload: [{
								uuid: '1234',
								name: 'Bob Johnson',
								description: 'Ayooo',
							}],
						},
					},
				},
			},
		},
	},
};

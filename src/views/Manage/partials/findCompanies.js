export default (req = {
	name: '',
	deprecatedNumericId: '',
	pagination: {},
}) => ({
	path: ['$FEATURE', 'DRAWER', 'companies'],
	payload: {
		req,
	},
	meta: {
		swagger: {
			operationId: 'wm_company_find',
			onSuccess: {
				path: ['$FEATURE', 'DRAWER', 'companies', 'success'],
			},
			onError: {
				path: ['$FEATURE', 'DRAWER', 'companies', 'error'],
			},
		},
	},
});

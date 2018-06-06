import uuid from 'uuid/v4';
import resetForm from './partials/resetForm';

export default {
	type: 'WMConfigurableModal',
	uuid: uuid(),
	props: {
		primaryLabel: 'Create',
		secondaryLabel: 'Cancel',
		title: 'Create $FEATURE',
	},
	selectors: {
		primaryDisabled: [':not',
			[':and',
				// Ensure the name is valid by the requirements of validating textfield
				[':state', ['$FEATURE', 'CREATE', 'nameIsValid']],
				// And that we actually have a value
				[':gte', [':length', [':state', ['$FEATURE', 'CREATE', 'name'], []]], 1],
			],
		],
		open: [':state', ['$FEATURE', 'CREATE', 'open']],
	},
	actions: {
		onPrimary: [{
			// Push entry in the list
			path: ['$FEATURE', 'DASHBOARD', 'list', 'success', 'body', 'result', 'payload'],
			payload: [':append', {
				uuid: uuid(),
				name: [':state', ['$FEATURE', 'CREATE', 'name']],
				description: [':state', ['$FEATURE', 'CREATE', 'description']],
			}, [':state', ['$FEATURE', 'DASHBOARD', 'list', 'success', 'body', 'result', 'payload'], []]],
		}, {
			// Close modal
			path: ['$FEATURE', 'CREATE', 'open'],
			payload: false,
		}],
		onClose: [{
			path: ['$FEATURE', 'CREATE', 'open'],
			payload: false,
		},
		...resetForm,
		],
		onSecondary: [{
			path: ['$FEATURE', 'CREATE', 'open'],
			payload: false,
		},
		...resetForm,
		],
	},
	children: [
		{
			type: 'div',
			uuid: uuid(),
			children: [{
				type: 'WMValidatingTextField',
				uuid: uuid(),
				props: {
					name: 'name',
					required: true,
					floatingLabelText: '$FEATURE Name',
					hintText: 'Enter Name',
					floatingLabelFixed: true,
					errorName: '$FEATURE',
					min: 1,
					max: 50,
					style: {
						width: '100%',
					},
				},
				selectors: {
					value: [':state', ['$FEATURE', 'CREATE', 'name'], ''],
					valid: [':state', ['$FEATURE', 'CREATE', 'nameIsValid'], true],
				},
				actions: {
					onValidate: {
						path: ['$FEATURE', 'CREATE', 'nameIsValid'],
						payload: [':arg', 0, 'isValid'],
					},
					onChange: {
						path: ['$FEATURE', 'CREATE', 'name'],
						payload: [':arg', 1],
					},
				},
			}, {
				type: 'WMTextField',
				uuid: uuid(),
				props: {
					name: 'description',
					floatingLabelText: 'Description',
					hintText: 'Please enter a description',
					floatingLabelFixed: true,
					style: {
						width: '100%',
					},
				},
				selectors: {
					value: [':state', ['$FEATURE', 'CREATE', 'description'], ''],
				},
				actions: {
					onChange: {
						path: ['$FEATURE', 'CREATE', 'description'],
						payload: [':arg', 1],
					},
				},
			}],
		},
	],
};

import uuid from 'uuid/v4';

const localLabels = {
	create: 'Create',
	pageName: `/ ${String.fromCharCode(160)}${String.fromCharCode(160)}$FEATURE`,
	parentPageName: 'WM',
};

export default {
	type: 'div',
	uuid: uuid(),
	children: [{
		type: 'WMToolbar',
		uuid: uuid(),
		children: [{
			uuid: uuid(),
			type: 'div',
			children: [{
				uuid: uuid(),
				type: 'WMBreadcrumbs',
				props: {
					route: [
						{ label: localLabels.parentPageName, uuid: uuid() },
						{ label: localLabels.pageName, uuid: uuid() },
					],
					addButtonLabel: localLabels.create,
				},
				actions: {
					addButtonFunc: [{
						path: ['$FEATURE', 'CREATE', 'open'],
						payload: true,
					}],
				},
			}],
		}],
	}],
};

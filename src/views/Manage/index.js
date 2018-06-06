import uuid from 'uuid/v4';

const selectedRowIndex = [':state', ['$FEATURE', 'DASHBOARD', 'selectedRowIndex']];
const selectedRow = [':state', ['$FEATURE', 'DASHBOARD', 'list', 'success', 'body', 'result', 'payload', selectedRowIndex]];

export default {
	type: 'WMConfigurableDrawer',
	uuid: uuid(),
	props: {
		subtitle: '$FEATURE', // <-- static
		tabs: [{
			value: 'detail',
			label: 'Overview',
		}],
		actionButtonLabel: 'Close',
	},
	selectors: {
		open: [':state', ['$FEATURE', 'DRAWER', 'open'], false],
		tabValue: [':state', ['$FEATURE', 'DRAWER', 'activeTab'], 'detail'],
		title: [':path', [['name']], selectedRow],
	},
	actions: {
		onClose: {
			path: ['$FEATURE', 'DRAWER', 'open'],
			payload: false,
		},
		// Important if there is more than one tab
		onTabChange: {
			path: ['$FEATURE', 'DRAWER', 'activeTab'],
			payload: [':arg', 1],
		},
		// Nothing to do, just close
		onSubmit: {
			path: ['$FEATURE', 'DRAWER', 'open'],
			payload: false,
		},
	},
	children: [{
		type: 'div',
		uuid: uuid(),
		props: {
			style: {
				width: '800px',
			},
		},
		children: [{
			// Only render when on the detail tab
			conditional: [':equals', [':state', ['$FEATURE', 'DRAWER', 'activeTab'], 'detail'], 'detail'],
			type: 'WMGeneric',
			uuid: uuid(),
			children: [{
				type: 'WMText',
				uuid: uuid(),
				selectors: {
					children: [':path', [['name']], selectedRow],
				},
			}, {
				type: 'WMText',
				uuid: uuid(),
				selectors: {
					children: [':path', [['description']], selectedRow],
				},
			}],
		}],
	}],
};

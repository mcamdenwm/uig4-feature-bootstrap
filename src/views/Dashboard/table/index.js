import { fromJS } from 'immutable';
import uuid from 'uuid/v4';
import fetchPackages from './partials/fetchPackages';

const columns = fromJS([{
	type: 'Text',
	key: 'uuid',
	title: 'Uuid',
	width: 100,
	textLookup: 'uuid',
	textType: 'header',
	resizeable: true,
	reorderable: false,
}, {
	type: 'Text',
	key: 'name',
	title: 'Name',
	width: 280,
	textLookup: 'name',
	textType: 'header',
	resizeable: true,
	reorderable: false,
}, {
	type: 'Text',
	key: 'description',
	title: 'Description',
	width: 300,
	textLookup: 'description',
	textType: 'header',
	resizeable: true,
	reorderable: false,
}]);

const dataList = [':state', ['$FEATURE', 'DASHBOARD', 'list', 'success', 'body', 'result', 'payload'], []];

export default {
	type: 'WMGeneric',
	uuid: uuid(),
	actions: {
		didMount: fetchPackages,
	},
	children: [{
		type: 'WMConfigurableTable',
		uuid: uuid(),
		props: {
			key: '$FEATURE-dashboard',
			columnSelected: false,
			footer: false,
			columns,
			fullSize: true,
		},
		selectors: {
			dataList,
			dataSize:
				[':length',
					dataList,
				],
			loadEnd:
				[':length',
					dataList,
				],
		},
		actions: {
			onCellClick: [{
				path: ['$FEATURE', 'DASHBOARD', 'selectedRowIndex'],
				payload: [':arg', 1, 'rowIndex'],
			}, {
				path: ['$FEATURE', 'DRAWER', 'open'],
				payload: true,
			}],
		},
	}],
};

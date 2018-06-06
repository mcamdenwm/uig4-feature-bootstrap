import uuid from 'uuid/v4';
import dashboard from './Dashboard';
import create from './Create';
import manage from './Manage';

export default {
	uuid: uuid(),
	type: 'div',
	children: [
		dashboard,
		create,
		manage,
	],
};

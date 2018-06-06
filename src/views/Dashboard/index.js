import uuid from 'uuid/v4';
import header from './header/';
import table from './table';

export default {
	type: 'div',
	uuid: uuid(),
	children: [
		header,
		table,
	],
};

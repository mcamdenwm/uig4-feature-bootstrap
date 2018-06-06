import React from 'react';
import { Provider } from 'react-redux';
import Shell from './Shell';
import store from '../../store';
import configureGetComponent from '../../utils/configureGetComponent';

export default (async (app) => {
	const configuredGetComponent = await (configureGetComponent(store));

	return (
		<Provider store={ store }>
			<Shell>
				{ configuredGetComponent(app) }
			</Shell>
		</Provider>
	);
});

/**
 * This renders the react shell on the DOM.
 */

import 'isomorphic-fetch';
import 'react-hot-loader/patch';
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import StatefulShell from './components/StatefulShell';
import featureConfig from './featureConfig';

const render = (Component) => {
	ReactDOM.render(
		<AppContainer>
			{ Component }
		</AppContainer>,
		document.getElementById('app'),
	);
};

StatefulShell(featureConfig).then(render);

if (module.hot) {
	module.hot.accept('./components/StatefulShell', () => { StatefulShell(featureConfig).then(render); });
}

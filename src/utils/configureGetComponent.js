import getComponent from '@workmarket/ui-generation';
import WMGeneric from '@workmarket/ui-generation/dist-es/WMGeneric';
import Swagger from 'swagger-client';
import * as Components from '@workmarket/front-end-components';
import WMConfigurableDrawer from '@workmarket/front-end-components/dist-es/WMConfigurableDrawer';
import { goodJobClient } from '@workmarket/projekt_good_job';
import { authCb } from '../../goodjob';

// Store the local configuration so we don't hit the API again
let configuredGetComponent;

const getComponentConfigurator = async (store) => {
	if (!configuredGetComponent) {
		// Accept specified API via env, with the current host as a default
		const API_HOST = process.env.BASE_API_URL || `${window.location.protocol}//${window.location.host}`;
		const GOOD_JOB_HOST = process.env.BASE_API_URL.replace(/http(s)?:\/\//, '') || window.location.host;
		const API_URL = `${API_HOST}/api-docs/latest`;
		let configuredSwagger;

		if (process.env.NODE_ENV === 'development') {
			configuredSwagger = await goodJobClient({
				docsPath: '/api-docs/latest',
				authCb,
				quiet: true,
				timeout: 3000,
				badJob: false,
				hostname: GOOD_JOB_HOST,
				scheme: 'https',
				clientTimeout: 10000,
			});
		} else {
			configuredSwagger = await Swagger(API_URL, {});
		}

		configuredGetComponent = getComponent({
			UI: true,
			swaggerClient: configuredSwagger,
			components: {
				...Components,
				WMGeneric,
				WMConfigurableDrawer,
			},
			store,
		});
	}

	return configuredGetComponent;
};

export default getComponentConfigurator;

import reduxThunk from 'redux-thunk';
import {
	createStore,
	applyMiddleware,
} from 'redux';
import { createLogger } from 'redux-logger';
import { genericReducer } from '@workmarket/ui-generation';
import initialState from './initialState';

// Create a redux store
const store = createStore(
	// Applying ui-g's generic reducer which handles uig state changes
	genericReducer(initialState),
	// Include thunks, as well as the logger
	applyMiddleware(reduxThunk, createLogger()),
);

// On hot reload, merge new initial state?
if (module.hot) {

	// @todo something for this
}

if (typeof window !== 'undefined') {
	window.store = store; // Expose store for debugging purposes
}

export default store;

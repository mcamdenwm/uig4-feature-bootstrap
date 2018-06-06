import reduxThunk from 'redux-thunk';
import {
	createStore,
	applyMiddleware,
} from 'redux';
import { createLogger } from 'redux-logger';
import { genericReducer } from '@workmarket/ui-generation';
import initialState from './initialState';

const persistToLocal = store => next => action => {
  let result = next(action);

  if (process.env.NODE_ENV === 'development') {
  	localStorage.setItem('$FEATURE', JSON.stringify(store.getState()))
  }

  return result;
}

// Create a redux store
const store = createStore(
	// Applying ui-g's generic reducer which handles uig state changes
	genericReducer(initialState),
	// Include thunks, as well as the logger
	applyMiddleware(reduxThunk, createLogger(), persistToLocal),
);

// On hot reload merge local storage state into application state
if (module.hot) {
	let localState = {};
	try {
		localState = JSON.parse(localStorage.getItem('$FEATURE'));
	} catch (e) {
		console.warn('No local storage state');
	}

	const combinedState = {
		...store.getState(),
		...localState
	};

	store.dispatch({
		type: 'Symbol(:WorkMarket__UIG__Action)',
		path: ['$FEATURE'],
		payload: combinedState['$FEATURE'],
	});
}

if (typeof window !== 'undefined') {
	window.store = store; // Expose store for debugging purposes
}

export default store;

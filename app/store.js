import { createStore,applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import createReducer from './reducers';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';

function configureStore(initialState = fromJS({ })) {
	const createStoreWithMiddleware = compose(applyMiddleware(thunk),devTools())(createStore);
	return createStoreWithMiddleware(createReducer(), initialState);
}

module.exports = configureStore;

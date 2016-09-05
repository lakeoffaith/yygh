import globalNavigation from './components/GlobalNavigation/reducer';
import tabs from './components/ApplicationTabs/reducer';
import {hospital,hospitalRouter} from './components/Hospital/reducer';
import { combineReducers } from 'redux-immutable';

const applicationReducers = {
	globalNavigation: globalNavigation,
	tabs,
	hospital,
	hospitalRouter
};
export default function createReducer() {
	return combineReducers(applicationReducers);
}

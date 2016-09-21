import globalNavigation from './components/GlobalNavigation/reducer';
import tabs from './components/ApplicationTabs/reducer';
import {hospital,hospitalRouter} from './components/Hospital/reducer';
import { combineReducers } from 'redux-immutable';
import location from './components/Location/reducer';
import user from './components/Login/reducer'

const applicationReducers = {
	globalNavigation: globalNavigation,
	tabs,
	hospital,
	hospitalRouter,
	user,
	location
};
export default function createReducer() {
	return combineReducers(applicationReducers);
}

import { cardStackReducer } from 'react-native-navigation-redux-helpers';

const initialState = {
	key: 'hospital',
	index: 0,
	lists:[{'excerpt':'1'},{'excerpt':'2'}],
	routes: [
		{
			key: 'list',
			title: 'Items'
		},
	],
};

function hospital(state=initialState,action){

	switch (action.type) {
		case "loadDataSource":
					console.log('hospital调用');
				return {
						...state,
						lists:action.lists
				}
		default:
			return state
	}
}
const hospitalRouter=cardStackReducer(initialState);

export {
	hospital,hospitalRouter
}

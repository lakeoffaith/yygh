import React,{Component} from 'react';
import {
  View,
  StyleSheet,
  Text
}from 'react-native';
import Index from '../index';
import * as reducers from '../reducers';
import {createStore,applyMiddleware,combineReducers}from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
const createStoreWithMiddleware=applyMiddleware(thunk)(createStore);
const reducer=combineReducers(reducers);
const store=createStoreWithMiddleware(reducer);
export default class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

import { View, Text, TouchableHighlight } from 'react-native';
import React, { Component } from 'react';
import DrawerLayoutAndroid from 'DrawerLayoutAndroid';
import ToolbarAndroid from 'ToolbarAndroid';
import styles from './styles';
import Hospital from '../Hospital';
import { connect } from 'react-redux';
import { actions as navigationActions } from 'react-native-navigation-redux-helpers';
import NavigationView from '../NavigationView';
import TabBar from '../ijoyComponents/tabBar';
const { jumpTo, pushRoute } = navigationActions;

class ApplicationTabs extends Component {
	_renderTabContent(tab) {
		if (tab.key === 'Main') {
			return (
				<Hospital />
			);
		}
	}
	_renderNavigationView=()=>{
		return(
			 <NavigationView />
		);
	}
	render() {
		const onNavigate = (action) => {
			this.drawer.closeDrawer();
			this.props.dispatch(action);
		};

		const { navigation } = this.props;
		console.log("--------------");
		console.log(navigation);
		//navigationView 为MenuNavigation的路径，点击的时候，选择push到这样就是后退的时候就是主页面了。


		return (
			<DrawerLayoutAndroid
				ref={(drawer) => { this.drawer = drawer; }}
				drawerWidth={300}
				drawerPosition={DrawerLayoutAndroid.positions.Left}
				renderNavigationView={this._renderNavigationView}>
				{this._renderApp()}
			</DrawerLayoutAndroid>
		);
	}
  _openDrawer=()=>{
		this.drawer.openDrawer();
	}
	_goSearch=()=>{
		const {dispatch,globalNavigation}=this.props;
		dispatch(pushRoute({key:'search'},globalNavigation.key));
	}
	_goLocation=()=>{
		const {dispatch,globalNavigation}=this.props;
		dispatch(pushRoute({key:'location',name:'城市选择'},globalNavigation.key));
	}
		//
	_renderApp() {
		const selectedTab = this.props.navigation.routes[this.props.navigation.index];
		return (
			<View style={{ flex: 1 }}>
					<TabBar openDrawer={this._openDrawer} goSearch={this._goSearch} goLocation={this._goLocation}/>
				<View>
					{this._renderTabContent(selectedTab)}
    		</View>
			</View>
		);
	}

	_onActionSelected(position) {
		const { dispatch } = this.props;
		if (position === 0) {
			dispatch(pushRoute({
				key: 'new',
				title: 'Main Screen',
				showBackButton: true
			}, 'global'));
		}
	}
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

function mapStateToProps(state) {
	return {
		navigation: state.get('tabs'),
		globalNavigation:state.get('globalNavigation')
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(ApplicationTabs);

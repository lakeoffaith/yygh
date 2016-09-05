import { View, Text, TouchableHighlight } from 'react-native';
import React, { Component } from 'react';
import DrawerLayoutAndroid from 'DrawerLayoutAndroid';
import ToolbarAndroid from 'ToolbarAndroid';
import styles from './styles';
import Hospital from '../Hospital';
import { connect } from 'react-redux';
import { actions as navigationActions } from 'react-native-navigation-redux-helpers';
import TabBar from '../ijoyComponents/tabBar';
const { jumpTo, pushRoute } = navigationActions;

class ApplicationTabs extends Component {
	_renderTabContent(tab) {
		if (tab.key === 'Main') {
			return (
				<Hospital />
			);
		}

		if (tab.key === 'notifications') {
			return (
				<View style={[styles.tabContent, {backgroundColor: 'green'}]} />
			);
		}

		if (tab.key === 'settings') {
			return (
				<View style={[styles.tabContent, {backgroundColor: 'pink'}]} />
			);
		}
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
		const navigationView = (
			<View style={{flex: 1, backgroundColor: '#fff'}}>

						<TouchableHighlight
							onPress={ () => onNavigate(pushRoute({
								key: 'new',
								title: 'Main Screen',
								showBackButton: true
							},'global')) }>
							<Text>菜单</Text>
						</TouchableHighlight>
			</View>
		);

		return (
			<DrawerLayoutAndroid
				ref={(drawer) => { this.drawer = drawer; }}
				drawerWidth={300}
				drawerPosition={DrawerLayoutAndroid.positions.Left}
				renderNavigationView={() => navigationView}>
				{this._renderApp()}
			</DrawerLayoutAndroid>
		);
	}
  _openDrawer=()=>{
		this.drawer.openDrawer();
	}
	_renderApp() {
		const selectedTab = this.props.navigation.routes[this.props.navigation.index];
		const actions = [{
			title: 'New Item',
			icon: { uri: 'http://facebook.github.io/react/img/logo_og.png' },
			show: 'always',
			showWithText: false
		}];
		return (
			<View style={{ flex: 1 }}>
				<TabBar openDrawer={this._openDrawer}/>
				<View style={{marginTop:56}}>
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
		navigation: state.get('tabs')
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(ApplicationTabs);

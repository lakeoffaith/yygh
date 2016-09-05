/*
 *
 * GlobalNavigation
 *
 */

import { View, NavigationExperimental,Text } from 'react-native';
import React, { Component } from 'react';
import styles from './styles';
import { connect } from 'react-redux';
import ApplicationTabs from '../ApplicationTabs';
import { actions } from 'react-native-navigation-redux-helpers';
import Toolbar from '../ijoyComponents/toolbar';
import DepartmentList from '../Department';
import DoctorList from '../Doctor';
import DoctorShow from '../Doctor/show';
import SureYy from '../Yy/sure'
const {
  popRoute
} = actions;

const {
  CardStack: NavigationCardStack
} = NavigationExperimental;

class GlobalNavigation extends Component {
	constructor(props) {
		super(props);

		this._renderOverlay = this._renderOverlay.bind(this);
		this._renderScene = this._renderScene.bind(this);
	}

	render() {
		return (
      <NavigationCardStack
        onNavigate={ () => {} }
        style={styles.main}
        navigationState={this.props.navigation}
        renderOverlay={this._renderOverlay}
        renderScene={this._renderScene}
      />
		);
	}
 /*
     统一设置顶部bar，
  */
	_renderScene(props) {
    console.log(props);

		if (props.scene.route.key === 'applicationTabs') {

			return (
				<View style={{flex: 1}}>
            <ApplicationTabs />
				</View>
			);
		}
    const toolBar=<Toolbar onBack={this._back}/>;

		if (props.scene.route.key === 'new') {
			return (
				<View style={{flex: 1}}>
          {toolBar }
				</View>
			);
		}
    if(props.scene.route.key==='departmentList'){
      return (
        <View style={{flex:1}}>
             {toolBar }
           <DepartmentList />
        </View>
      )
    }
    if(props.scene.route.key==='doctorList'){
      return(
         <View style={{flex:1}}>
            {toolBar}
            <DoctorList />
         </View>
      );
    }
    if(props.scene.route.key==='doctorShow'){
      return(
         <View style={{flex:1}}>
            {toolBar}
            <DoctorShow />
         </View>
      );
    }
    if(props.scene.route.key==='sureYy'){
      return(
         <View style={{flex:1}}>
            {toolBar}
            <SureYy />
         </View>
      );
    }
    if(props.scene.route.key==='tabDetail'){
      return (
         <View>
           <Text>details</Text>
         </View>
      );
    }
	}

	_renderOverlay(props) {
    return null;
  }
  _back=()=>{
    const {dispatch,navigation}=this.props;
    dispatch(popRoute(navigation.key));
  }
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch,
		onNavigate() {
			console.log('@@ onNavigate', arguments);
		}
	};
}

function mapStateToProps(state) {
	return {
		navigation: state.get('globalNavigation')
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalNavigation);

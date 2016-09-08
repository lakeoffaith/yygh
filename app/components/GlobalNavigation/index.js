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
import Searchbar from '../ijoyComponents/searchbar';
import Search from '../Search';
import Login from '../Login';
import Register from '../Login/register';
import ForgetPassword from '../Login/forgetPassword';
import YyList from '../Yy/list';
import Location from '../Location'
const {
  popRoute,
  pushRoute
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
    const toolBar=<Toolbar onBack={this._back} />;

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
    if(props.scene.route.key==='yyList'){
      return(
         <View style={{flex:1}}>
            {toolBar}
            <YyList />
         </View>
      );
    }

    if(props.scene.route.key==='search'){
      return (
         <View style={{flex:1}}>
           <Searchbar onBack={this._back} />
           <Search />
         </View>
      );
    }
    if(props.scene.route.key==='login'){
      return (
        <View style={{flex:1}}>
             {toolBar }
           <Login
           goRegister={()=>this._push({key:'register',name:'注册用户'})}
            goForgetPassword={()=>this._push({key:'forgetPassword',name:'忘记密码'})}
           />
        </View>
      );
    }
    if(props.scene.route.key==='register'){
      return (
        <View style={{flex:1}}>
             {toolBar }
           <Register
           />
        </View>
      );
    }
    if(props.scene.route.key==='forgetPassword'){
      return (
        <View style={{flex:1}}>
             {toolBar }
           <ForgetPassword
           />
        </View>
      );
    }
    if(props.scene.route.key==='location'){
      return (
        <View style={{flex:1}}>
             {toolBar }
           <Location
           />
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

  _push=(route)=>{
    const {dispatch,navigation}=this.props;
    dispatch(pushRoute(route,navigation.key));
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

import React,{Component} from 'react';
import{
  Text,
  View,
  StyleSheet
}from 'react-native';
/**
 * toolbar用户globarNavigation 的顶部导航，tabBar 用户tabs的导航
 */
import {PrimaryColor,Accent,PrimaryText,SecondText,DividerText} from './color';
import {Toolbar as MaterialToolbar} from 'react-native-material-design';
import { connect } from 'react-redux';
class Toolbar extends Component{
  render(){

    const {navigation}=this.props;
    const currentRoute=navigation.routes[navigation.index]
    console.log('}}}}}}}}}}}}');
    console.log(navigation);
    return(
      <View style={styles.toolbar}>
      <MaterialToolbar
         title={currentRoute && currentRoute.name!==null?currentRoute.name:''}
         icon={'keyboard-backspace'}
         onIconPress={()=>this.props.onBack()}
      />
      </View>
    );
  }
}

Toolbar.propTypes={
  onBack:React.PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

function mapStateToProps(state) {
	return {
		navigation: state.get('globalNavigation')
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);

const styles=StyleSheet.create({
  toolbar: {
     height: 56,
     flexDirection: 'row',
     alignItems:'center',
     backgroundColor:PrimaryColor,
 }
})

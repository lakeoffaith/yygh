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
export default class Toolbar extends Component{
  render(){
    return(
      <View style={styles.toolbar}>
      <MaterialToolbar
         title={'子菜单'}
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
const styles=StyleSheet.create({
  toolbar: {
     height: 56,
     flexDirection: 'row',
     alignItems:'center',
     backgroundColor:PrimaryColor,
 }
})

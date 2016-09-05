import React,{Component} from 'react';
import{
  Text,
  View
}from 'react-native';
/**
 * toolbar用户globarNavigation 的顶部导航，tabBar 用户tabs的导航
 */
import {Toolbar as MaterialToolbar} from 'react-native-material-design';
export default class Toolbar extends Component{
  render(){
    return(
       <MaterialToolbar
          title={'子菜单'}
          icon={'keyboard-backspace'}
          onIconPress={()=>this.props.onBack()}
       />
    );
  }
}

Toolbar.propTypes={
  onBack:React.PropTypes.func.isRequired
};

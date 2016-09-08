import React,{Component} from 'react';
import{
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  TextInput
}from 'react-native';
import {Icon} from 'react-native-material-design';
/**
 * toolbar用户globarNavigation 的顶部导航，tabBar 用户tabs的导航
 */
import {PrimaryColor,Accent,PrimaryText,SecondText,DividerText} from './color';
export default class Searchbar extends Component{
  render(){
    return(
      <View style={styles.toolbar}>
          <TouchableWithoutFeedback onPress={()=>this.props.onBack()}>
          <View style={{width:40}}>
              <Icon name='arrow-back'/>
          </View>
          </TouchableWithoutFeedback>
          <View style={{flex:1}}>
          <View style={{alignItems:'center',backgroundColor: '#ffffff',flexDirection:'row',borderLeftWidth:1,borderRightWidth:1,height:35,borderTopWidth:1,borderBottomWidth:1,borderColor:PrimaryColor,borderRadius:3}}>
            <TextInput
                style={{height:35,backgroundColor: '#ffffff',paddingRight:15,width:200}}
                placeholder='搜索医院,科室,医生,疾病'
                placeholderTextColor={PrimaryText}
                />
          </View>
          </View>

          <View style={{width:60,alignItems:'center',justifyContent:'center'}}>
              <View style={{width:30,height:30,borderWidth:1,alignItems:'center',justifyContent:'center',backgroundColor:Accent}}>
                  <Icon name="search"/>
              </View>
          </View>
      </View>
    );
  }
}

Searchbar.propTypes={
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

import React,{Component,PropTypes} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback
}from 'react-native';
import {PrimaryColor,Accent,TextIcons,PrimaryText} from './color'
import {Icon} from 'react-native-material-design'
export default class TabBar extends Component{
  render(){
    return(
      <View style={styles.toolbar}>
          <TouchableWithoutFeedback onPress={()=>this.props.openDrawer()}>
          <View style={{width:40}}>
              <Icon name='menu' />
          </View>
          </TouchableWithoutFeedback>
          <View style={{flex:1}}>
          <TouchableWithoutFeedback onPress={()=>{this.props.goSearch()}}>
          <View  style={{alignItems:'center',backgroundColor: '#ffffff',flexDirection:'row',borderLeftWidth:1,borderRightWidth:1,height:35,borderTopWidth:1,borderBottomWidth:1,borderColor:PrimaryColor,borderRadius:3}}>
            <Icon name='search' size={18} style={{marginRight:10}} />
            <Text>搜索医院,科室，医生,疾病</Text>
          </View>
              </TouchableWithoutFeedback>
          </View>
          <TouchableWithoutFeedback onPress={()=>{this.props.goLocation()}}>
              <View style={{width:60,flexDirection:'row'}}>
                 <Icon name='room' />
                 <View style={{alignItems:'center',justifyContent:'center'}}><Text style={{color:Accent}}>成都</Text></View>
              </View>
          </TouchableWithoutFeedback>
      </View>
    );
  }
}
TabBar.propTypes={
  openDrawer:React.PropTypes.func.isRequired,
  goSearch:React.PropTypes.func.isRequired,
  goLocation:React.PropTypes.func.isRequired
}

const styles=StyleSheet.create({
  toolbar: {
     height: 56,
     flexDirection: 'row',
     alignItems:'center',
     backgroundColor:PrimaryColor,
 }
})

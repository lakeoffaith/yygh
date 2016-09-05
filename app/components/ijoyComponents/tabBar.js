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
          <View style={{alignItems:'center',backgroundColor: '#ffffff',flexDirection:'row',borderLeftWidth:1,borderRightWidth:1,height:35,borderTopWidth:1,borderBottomWidth:1,borderColor:PrimaryColor,borderRadius:3}}>
            <Icon name='search' size={18}  />
            <TextInput
                style={{height:35,backgroundColor: '#ffffff',paddingRight:15,width:200}}
                placeholder='搜索医院,科室,医生,疾病'
                placeholderTextColor={PrimaryText}
                editable={false}
                />
          </View>
          </View>

          <View style={{width:40}}>
             <Icon name='room' />
          </View>
      </View>
    );
  }
}
TabBar.propTypes={
  openDrawer:React.PropTypes.func.isRequired
}

const styles=StyleSheet.create({
  toolbar: {
     height: 56,
     flexDirection: 'row',
     alignItems:'center',
     backgroundColor:PrimaryColor,
 }
})

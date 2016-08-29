import React,{Component,PropTypes} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback
}from 'react-native';
import {primaryColor,accentColor,textIcons,primaryText} from '../data'
import {Icon} from 'react-native-material-design'
export default class MainToolbar extends Component{
  static contextTypes = {
      navigator: PropTypes.object,
      drawer:PropTypes.object
  }
   _openDrawer=()=>{
     const {drawer}=this.context;
     drawer.openDrawer();
   }
  render(){
    return(
      <View style={styles.toolbar}>
          <TouchableWithoutFeedback onPress={this._openDrawer}>
          <View style={{width:40}}>
              <Icon name='menu' />
          </View>
          </TouchableWithoutFeedback>
          <View style={{flex:1}}>
          <View style={{alignItems:'center',backgroundColor: '#ffffff',flexDirection:'row',borderLeftWidth:1,borderRightWidth:1,height:35,borderTopWidth:1,borderBottomWidth:1,borderColor:primaryColor,borderRadius:3}}>
            <Icon name='search' size={18}  />
            <TextInput
                style={{height:35,backgroundColor: '#ffffff',paddingRight:15,width:200}}
                placeholder='搜索医院,科室,医生,疾病'
                placeholderTextColor={primaryText}
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
const styles=StyleSheet.create({
  toolbar: {
     position: 'absolute',
     top: 0,
     left: 0,
     right: 0,
     height: 56,
     flexDirection: 'row',
     alignItems:'center',
     backgroundColor:primaryColor,
 }
})

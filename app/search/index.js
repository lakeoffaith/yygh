import React from 'react'
import {
  View,
  Text,
  TextInput
} from 'react-native'
import {Icon} from 'react-native-material-design'
import {drakColor,primaryColor,lightColor,textIcons,accentColor,primaryText,secondaryText,dividerColor} from '../data'
export default class search extends React.Component{
  render(){
    return(
      <View>
         <View style={{flexDirection:'row',alignItems:'center',height:60,borderBottomWidth:0.5}}>
                <View style={{width:120}}><TextInput/></View>
                <View style={{width:30,paddingTop:10}}><Icon name='search' /></View>
         </View>
          <View style={{flexDirection:'row',alignItems:'center',height:60,borderBottomWidth:0.5}}>
            <Text style={{color:secondaryText}}>search log first</Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center',height:60,borderBottomWidth:0.5}}>
            <Text>clear log;</Text>
          </View>

      </View>
    );
  }
}

import React from 'react';

import {
  View,
  Text,
  StyleSheet,TouchableHighlight,
  Image
} from 'react-native';
import {PrimaryColor,Accent,PrimaryText,SecondText,DividerText} from '../ijoyComponents/color'
import {Icon} from 'react-native-material-design';
export default class NavigationView extends React.Component{
  render(){
    return(
       <View>
            <View style={styles.header}>
                  <View style={styles.loginTextContainer}>
                      <Text>登录IJOY</Text>
                      <Text>享受更好的服务</Text>
                  </View>
                  <View style={styles.loginButtonContainer}>
                       <View style={styles.button}>
                          <Text style={{fontSize:16,textAlignVertical:'center'}}>立即登录</Text>
                       </View>
                  </View>
            </View>
            <View style={styles.body}>
                <View style={styles.item}>
                    <View style={{width:20,height:20,justifyContent:'center',marginRight:10}}><Icon name='menu' size={18}/></View>
                    <View style={{flex:1}}><Text>我的消息</Text></View>
                    <View style={{width:60,alignItems:'center'}}>
                          <View style={{width:15,height:15,borderRadius:5,backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
                              <Text>1</Text>
                          </View>
                    </View>
                </View>
                <View style={styles.item}>
                    <View style={{width:20,height:20,justifyContent:'center',marginRight:10}}><Icon name='menu' size={18}/></View>
                    <View style={{flex:1}}><Text>我的消息</Text></View>
                    <View style={{width:60,alignItems:'center'}}>
                          <View style={{width:15,height:15,borderRadius:5,backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
                              <Text>1</Text>
                          </View>
                    </View>
                </View>
                <View style={styles.item}>
                    <View style={{width:20,height:20,justifyContent:'center',marginRight:10}}><Icon name='menu' size={18}/></View>
                    <View style={{flex:1}}><Text>我的消息</Text></View>
                    <View style={{width:60,alignItems:'center'}}>
                          <View style={{width:15,height:15,borderRadius:5,backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
                              <Text>1</Text>
                          </View>
                    </View>
                </View>
                <View style={styles.item}>
                    <View style={{width:20,height:20,justifyContent:'center',marginRight:10}}><Icon name='menu' size={18}/></View>
                    <View style={{flex:1}}><Text>我的消息</Text></View>
                    <View style={{width:60,alignItems:'center'}}>
                          <View style={{width:15,height:15,borderRadius:5,backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
                              <Text>1</Text>
                          </View>
                    </View>
                </View>
            </View>
       </View>
    );
  }
}

const styles=StyleSheet.create({
  header:{
    height:160,
    backgroundColor:PrimaryColor
  },
  loginTextContainer:{
     height:100,
     justifyContent:'center',
     alignItems:'center',
  },
  loginButtonContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  button:{
      height:30,
      width:120,
      borderWidth:1,
      justifyContent:'center',
      alignItems:'center'
  },
  body:{
      flex:1
  },
  item:{
    flexDirection:'row',
    padding:10,
    height:45,
    justifyContent:'center'
  },

})

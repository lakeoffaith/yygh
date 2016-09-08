

/*
    ijoy react-native Component_Login
    name,  规则 ijoy name rule   5-11为以字母开头，字母和数字的规则
    password, 规则 ijoy password rule   5-11为以字母开头，字母和数字的规则
    forgetPassword
    Login
    LogUp
    show error   用toast 显示



*/

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native';
import {Icon} from 'react-native-material-design'
import {PrimaryColor,Accent,PrimaryText,SecondText,DividerText} from '../ijoyComponents/color'

 export default class ForgetPassword extends React.Component{

  render(){
    return(
       <View style={styles.container}>
          <View style={styles.inputs}>
             <View style={styles.inputContainer}>
                <View style={styles.leftIconContainer}><Icon   name="person"/></View>
                <View style={{flex:1}}>
                  <TextInput
                  style={styles.textInput}
                  placeholder="手机号"
                  placeholderTextColor="#FFF"
                   />
                </View>
             </View>
             <View style={styles.inputContainer}>
                    <View style={styles.leftIconContainer}>
                        <Icon  name="lock" />
                    </View>
                   <View style={{flex:1}}>
                     <TextInput
                     style={styles.textInput}
                     placeholder="验证码"
                     placeholderTextColor="#FFF"
                      />
                   </View>
                   <View style={styles.rightButtonContainer}>
                      <View style={styles.button}>
                          <Text style={{fontSize:12}}>发送验证码</Text>
                      </View>
                 </View>
             </View>
             <View style={styles.inputContainer}>
               <View style={styles.leftIconContainer}><Icon   name="lock"/></View>
               <View style={{flex:1}}>
                 <TextInput
                 style={styles.textInput}
                 placeholder="设置密码"
                 placeholderTextColor="#FFF"
                  />
               </View>

             </View>

          </View>
          <TouchableWithoutFeedback onPress={()=>actions.login('li','12')}>
          <View style={styles.signin}>
              <Text style={{fontSize:20}}>完成</Text>
          </View>
          </TouchableWithoutFeedback>

        </View>
    );
  }
}

/*
  css 说明
      inputContainer   为一行输入栏

            leftIconContainer  为左侧图标容器

                  textInput 为textInput的style,外面要包层view
            rightButtonContainer  为右侧button容器
                  button

 */

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'transparent'
  },
  mark:{
      fontSize:26
  },
  inputs:{
    marginTop:10,
    marginBottom:10
  },
  signin:{
    backgroundColor:Accent,
    margin:10,
    alignItems:'center',
    justifyContent:'center',
    height:50
  },

  inputContainer:{
      height:50,
      padding:10,
      borderWidth:1,
      borderBottomColor:'#CCC',
      borderColor:'transparent',
      flexDirection:'row'
  },
  leftIconContainer:{
    width:40,
    alignItems:'center',
    justifyContent:'center'
  },
  textInput:{
    position:'absolute',
    left:0,
    top:0,
    right:0
  },
  rightButtonContainer:{
    width:80,
    alignItems:'center',
    justifyContent:'center'
  },
  button:{
    height:30,
    width:60,
    borderWidth:0.5,
    alignItems:'center',
    justifyContent:'center'
  }


})

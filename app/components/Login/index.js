

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
import {login} from './actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
const window=Dimensions.get('window');

 class Login extends React.Component{

  render(){
    const {actions}=this.props;
    console.log('---------------');
    console.log(this.props);
    return(
       <View style={styles.container}>
          <View style={styles.inputs}>
             <View style={styles.inputContainer}>
                <View style={styles.leftIconContainer}><Icon  name="person"/></View>
                <View style={{flex:1}}>
                  <TextInput
                  style={styles.input}
                  placeholder="手机号"
                  placeholderTextColor="#FFF"
                   />
                </View>
             </View>
             <View style={styles.inputContainer}>
             <View style={styles.leftIconContainer}><Icon  name="lock"/></View>
             <View style={{flex:1}}>
               <TextInput
               style={styles.input}
               placeholder="密码"
               placeholderTextColor="#FFF"
                />
             </View>

             </View>

          </View>
          <TouchableWithoutFeedback onPress={()=>actions.login('li','12')}>
          <View style={styles.signin}>
              <Text style={{fontSize:20}}>登录</Text>
          </View>
          </TouchableWithoutFeedback>
          <View style={{flexDirection:'row',justifyContent:'center'}}>
            <View style={{flex:1,paddingLeft:10}}>
               <TouchableWithoutFeedback onPress={()=>this.props.goForgetPassword()}><View><Text >忘记密码</Text></View></TouchableWithoutFeedback>
            </View>
            <View style={{width:80,paddingRight:10,alignItems:'flex-end'}}>
                <TouchableWithoutFeedback onPress={()=>this.props.goRegister()}><View><Text>注册</Text></View></TouchableWithoutFeedback>
            </View>
          </View>

          <View style={{justifyContent:'center',position:'absolute',left:0,bottom:0,right:0,height:90,flexDirection:'row'}}>
                <View style={{width:210,borderTopWidth:0.5,flexDirection:'row',justifyContent:'center',paddingTop:10}}>
                   <View style={{height:60,flexDirection:'column',width:70,alignItems:'center'}}>
                       <Image source={require('../../img/wechat.jpg')} style={{width:40,height:40,borderRadius:20}}/>
                       <View style={{alignItems:'center',justifyContent:'center',marginTop:5}}>
                         <Text style={{fontSize:10}}>微信</Text>
                       </View>

                   </View>
                   <View style={{height:60,flexDirection:'column',width:70,alignItems:'center'}}>
                       <Image source={require('../../img/qq.png')} style={{width:40,height:40,borderRadius:20}}/>
                       <View style={{alignItems:'center',justifyContent:'center',marginTop:5}}>
                         <Text style={{fontSize:10}}>QQ</Text>
                       </View>

                   </View>
                   <View style={{height:60,flexDirection:'column',width:70,alignItems:'center'}}>
                       <Image source={require('../../img/weibo.jpg')} style={{width:40,height:40,borderRadius:20,backgroundColor:'transparent'}}/>
                       <View style={{alignItems:'center',justifyContent:'center',marginTop:5}}>
                         <Text style={{fontSize:10}}>新浪</Text>
                       </View>

                   </View>
                </View>

          </View>
        </View>
    );
  }
}

Login.propTypes={
  goRegister:React.PropTypes.func.isRequired,
  goForgetPassword:React.PropTypes.func.isRequired
}

function mapDispatchToProps(dispatch){
  return {
    actions:bindActionCreators({login},dispatch)
  };
}

function mapStateToProps(state){
  return {
    state:state.get('user')
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'transparent'
  },
  mark:{
      fontSize:26
  },
  inputs:{
    height:100,
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
})

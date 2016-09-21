

/*
      注册实现手机验证码和设置密码进行注册，注册成功后，返回用户数据。
      发送验证码接口  sync   RAP_发送验证码
      注册用户接口    sync   RAP_注册用户

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
import {register} from './actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import DataRepository from '../../data/DataRepository';
const repository=new DataRepository();
import {SENDVALIDECODEURL,REGISTERURL} from '../../data/rap'
class Register extends React.Component{
   constructor(){
     super();
     this.state={
       valideCode:""
     }
   }
   //点击发送验证码活动验证码数据
   sendValideCode=()=>{
     let getUrl=SENDVALIDECODEURL+"?"+"phoneNumber="+"123456";
     repository._getFetch(getUrl)
                        .then((responseData)=>{
                          this.setState({valideCode:""+responseData.result[0].code})
                        })
                        .catch((error)=>{
                          console.log(error);
                        })
                        .done();

   }
   //点击完成完成注册
   _register=()=>{
     const {dispatch,actions}=this.props;
     let url=REGISTERURL;
     let params={
       phoneNumber:'18228084571',
       verificationCode:'6113',
       password:'nihaohuai'
     };
     actions.register(url,params);
   }
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
                        <Icon  name="lock"  />
                    </View>
                   <View style={{flex:1}}>
                     <TextInput
                     style={styles.textInput}
                     placeholder="验证码"
                     value={this.state.valideCode}
                     placeholderTextColor="#FFF"
                      />
                   </View>

                   <View style={styles.rightButtonContainer}>
                      <TouchableWithoutFeedback  onPress={this.sendValideCode}>
                      <View style={styles.button}>
                          <Text style={{fontSize:12}}>发送验证码</Text>
                      </View>
                       </TouchableWithoutFeedback>
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
          <TouchableWithoutFeedback onPress={this._register}>
          <View style={styles.signin}>
              <Text style={{fontSize:20}}>完成</Text>
          </View>
          </TouchableWithoutFeedback>

        </View>
    );
  }
}
function mapDispatchToProps(dispatch){
  return {
    actions:bindActionCreators({register},dispatch)
  };
}

function mapStateToProps(state){
  return {
    state
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(Register);
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

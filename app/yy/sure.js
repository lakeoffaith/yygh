import React from 'react'
import{
    View,
    Text,
    Image,
    TouchableWithoutFeedback
} from 'react-native'
import {MKRadioButton} from 'react-native-material-kit'
import {primaryColor,primaryText,secondaryText,accentColor,dividerColor,lightColor,textIcons} from '../data'
export default class SureYy extends React.Component{
    static contextTypes={
        navigator:React.PropTypes.object.isRequired
    }
    _goMain(){
        const {navigator} =this.context;
        navigator.to('Main');
    }
    render(){
        return(
          <View>
              <View style={{height:40,marginTop:5,flexDirection:'row',alignItems:'center',borderBottomWidth:0.5}}>
                  <Image source={require('../img/doctor.jpg')} style={{width:20,height:20,borderRadius:10}}/>
                  <View style={{marginLeft:10}}><Text>医生：李大宝</Text></View>
              </View>
              <View style={{marginLeft:5}}>
                  <Text>就诊医院</Text>
                  <Text>就诊科室</Text>
                  <Text>门诊时间</Text>
                  <Text>门诊类型</Text>
                  <Text>挂号费</Text>
              </View>
              <View style={{marginTop:5,marginLeft:5,flexDirection:'row',height:30,alignItems:'center'}}>
                  <MKRadioButton checked={true} />
                  <Text style={{color:primaryText}}>已阅读预约平台规则</Text>
              </View>

                  <View style={{alignItems:'center',marginTop:40}}>
                      <TouchableWithoutFeedback onPress={()=>this._goMain()}>
                          <View style={{width:140,height:50,borderRadius:10,justifyContent:'center',alignItems:'center',backgroundColor:accentColor}}>
                              <Text style={{color:textIcons ,fontSize:16}}>预约</Text>
                          </View>
                      </TouchableWithoutFeedback>
                  </View>

          </View>
        );
    }
}
import React from 'react'
import{
    View,
    Text,
    Image,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native'
import {MKRadioButton,MKColor} from 'react-native-material-kit'
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
                  <View style={styles.item}><Text>就诊医院:<Text>成都军区医院</Text></Text></View>
                  <View style={styles.item}><Text>就诊科室:<Text>皮肤科</Text></Text></View>
                  <View style={styles.item}><Text>门诊时间:<Text>2016-08-08 8:00-16:00</Text></Text></View>
                  <View style={styles.item}><Text>门诊类型:<Text>普通号</Text></Text></View>
                  <View style={styles.item}><Text>挂号费:<Text>8元</Text></Text></View>
              </View>
              <View style={{marginTop:5,marginLeft:5,flexDirection:'row',height:30,alignItems:'center'}}>
                  <MKRadioButton  />
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
const styles=StyleSheet.create({
  item:{
    height:40,
    marginTop:5,
    flexDirection:'row',
    paddingLeft:30,
    alignItems:'center'
  }
});

import React from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'
import {Icon} from 'react-native-material-design'
import {PrimaryColor,Accent,PrimaryText,SecondText,DividerText,LightPrimaryColor,TextIcons} from '../ijoyComponents/color'
export default class YyList extends React.Component{
    render(){
        return(
          <View>
              <View style={{padding:10,borderBottomWidth:0.5}}>
                  <View style={{flexDirection:'row',height:40,alignItems:'center',borderBottomWidth:0.5}}>
                        <View style={{flex:1}}><Text>订单号：56418367</Text></View>
                        <View style={{width:60}}><Text style={{color:PrimaryText}}>预约成功</Text></View>
                  </View>
                  <View style={{marginLeft:10}}>
                      <View style={{flexDirection:'row'}}>
                          <View style={{width:70,padding:5,justifyContent:'center',alignItems:'center'}}>
                              <Image source={require('../../img/doctor.jpg')} style={{width:50,height:50,borderRadius:5}}/>
                          </View>
                          <View style={{flex:1}}>
                              <Text><Text style={{color:PrimaryText}}>平李行</Text>主任医师</Text>
                              <Text><Icon name="location-city" color={PrimaryText} size={12}/>成都军区医院</Text>
                              <Text><Icon name="local-pharmacy" size={12} color={PrimaryText} />心脏外科</Text>
                          </View>
                      </View>
                      <Text><Text>就诊人</Text>李振纲</Text>
                      <Text><Text>就诊时间</Text>08-05 8:00-16:00</Text>
                      <Text><Text>门诊费用</Text>7:00元</Text>
                      <Text><Text>支付状态</Text><Text style={{color:PrimaryText}}>未支付</Text></Text>
                  </View>
              </View>
          </View>
        );
    }
}

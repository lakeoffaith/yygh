import React from 'react'
import{
    View,
    Text,
    Image,
    TouchableWithoutFeedback
} from 'react-native'
import {Icon} from 'react-native-material-design'
import {primaryText,secondaryText,accentColor,dividerColor,lightColor,textIcons} from '../data'
export default class Doctor extends React.Component{
    static contextTypes={
        navigator:React.PropTypes.object.isRequired
    }
    _goYy(){
        const {navigator}=this.context;
        navigator.to('Main.DepartmentList.DoctorList.DoctorShow')
    }
    render(){
        return(
            <View>
                <TouchableWithoutFeedback onPress={()=>this._goYy()}>
                <View style={{flexDirection:'row',height:80,padding:5,paddingTop:10,borderBottomWidth:0.2}}>
                    <View style={{marginLeft:8,alignItems:'center',justifyContent:'center'}}>
                        <Image source={require('../img/doctor.jpg')} style={{width:46,height:46,borderRadius:23}}/>
                    </View>
                    <View style={{flex:1,marginLeft:10}}>
                        <Text><Text style={{color:primaryText}}>刘大本</Text> <Text style={{color:secondaryText}}>主任医师</Text></Text>
                        <Text style={{color:secondaryText}}><Text><Icon color={primaryText} name="star" size={12}/>8.9</Text> 接诊量 1031 </Text>
                        <Text numberOfLines={1} style={{color:secondaryText}}>擅长:心血管常见病、多发病的诊断、治疗及心肌梗死、心力衰竭、心律失常、高血压病的各种危重病症的抢救。 心血管专科门诊时间:每周三下午 靳利军,内科副主任医师</Text>

                        <View style={{position:'absolute',right:10,top:10,backgroundColor:accentColor}} >
                            <Text style={{color:textIcons}}>预约</Text>
                        </View>
                    </View>
                </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

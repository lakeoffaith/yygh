import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback
} from 'react-native'
import {Icon} from 'react-native-material-design'
import {primaryText,secondaryText,accentColor,dividerColor,} from '../data'
export default class HospitalList extends React.Component{
    static contextTypes = {
        navigator: React.PropTypes.object.isRequired
    }
    _goDepartmentList(){
        const {navigator}=this.context;
        navigator.to('Main.HospitalList.DepartmentList')
    }
    render(){
        return(
            <View>
                <View style={{flexDirection:'row',height:40,alignItems:'center'}}>
                    <Icon style={{marginLeft:25,marginRight:5}} name="search" size={17}/>
                    <Text style={{color:secondaryText}}>搜索医院,医生,科室,疾病</Text>
                </View>
                    <View style={{flexDirection:'row',height:100,padding:15,borderBottomWidth:0.5}}>
                            <View>
                                <Image source={require('../img/hospital.jpg')} style={{width:80,height:60}}/>
                            </View>
                            <View style={{flex:1,marginLeft:15}}>
                                 <Text style={{color:primaryText}}>成都军区医院</Text>
                                 <Text style={{color:secondaryText}}><Text style={{color:secondaryText}}>三级甲等</Text >预约量 4.5万</Text>
                                 <View style={{marginTop:15,flexDirection:'row',alignItems:'center'}}>
                                     <Icon name="check-circle" size={15}/>
                                     <Text style={{color:secondaryText}}>挂号费支付</Text>
                                 </View>
                            </View>
                            <TouchableWithoutFeedback onPress={()=>this._goDepartmentList()}>
                            <View style={{width:50,paddingLeft:15,paddingRight:10,justifyContent:'center'}}>
                                  <Icon name="navigate-next" color={accentColor} size={20}/>
                            </View>
                            </TouchableWithoutFeedback>
                    </View>
            </View>
        );
    }
}
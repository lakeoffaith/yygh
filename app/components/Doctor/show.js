import React from 'react'
import {
    View,
    Text,
    Image,
    Dimensions,
    TouchableWithoutFeedback
} from 'react-native'
import {yyArray} from '../../data'
import {PrimaryColor,Accent,PrimaryText,SecondText,DividerText,LightPrimaryColor,TextIcons} from '../ijoyComponents/color'
import {connect} from 'react-redux';
import {actions} from 'react-native-navigation-redux-helpers';
const {pushRoute}=actions;
const w=Dimensions.get('window').width;
const scheduleWidth=parseInt((w-14)/7);
class DoctorShow extends React.Component{
    static contextTypes={
        navigator:React.PropTypes.object.isRequired
    }

    _goSureYy(){
      const {dispatch,globalNavigation}=this.props;
      dispatch(pushRoute({key:'sureYy',name:'确认预约'},globalNavigation.key));
    }
    render(){
        const _this=this;
        const detailSchedule=yyArray.map(function(item,i){
            return(
               <View style={{width:scheduleWidth}}>
                   <View style={{height:50,borderWidth:0.5,justifyContent:'center',alignItems:'center'}}>
                       <View>
                           <Text style={{color:PrimaryText}}>{item.date}</Text>
                           <Text style={{color:PrimaryText}}>{item.week}</Text>
                       </View>
                   </View>
                   <View style={{height:40,borderWidth:0.5}}>
                       {item.morning?
                           <TouchableWithoutFeedback onPress={()=>_this._goSureYy()}>
                               <View style={{backgroundColor:Accent,justifyContent:'center',alignItems:'center'}}>
                                   <View >
                                       <Text style={{color:SecondText}}>{item.type}</Text>
                                       <Text style={{color:SecondText}}>{item.morning}</Text>
                                   </View>
                               </View>
                           </TouchableWithoutFeedback>
                           :
                           null
                       }
                   </View>
                   <View style={{height:40,borderWidth:0.5}}>
                       {item.afternoon?
                           <View style={{backgroundColor:Accent,justifyContent:'center',alignItems:'center'}}>
                               <View >
                                   <Text style={{color:SecondText}}>{item.type}</Text>
                                   <Text style={{color:SecondText}}>{item.afternoon}</Text>
                               </View>
                            </View>
                           :
                           null
                       }
                   </View>
               </View>
            ) ;
        });
        return(
            <View>
                <View style={{flexDirection:'row',height:120,padding:10,paddingTop:30,backgroundColor:PrimaryColor}}>
                    <View style={{marginLeft:10,alignItems:'center'}}>
                        <Image source={require('../../img/doctor.jpg')} style={{width:60,height:60,borderRadius:30}}/>
                    </View>
                    <View style={{flex:1,marginLeft:10}}>
                        <Text><Text style={{color:PrimaryText}}>刘大本</Text> <Text style={{color:SecondText}}>主任医师</Text></Text>
                        <Text style={{color:SecondText}}>成都军区</Text>
                        <Text style={{color:SecondText}}>心血管内科</Text>
                        <View style={{position:'absolute',right:5,bottom:15}}>
                            <Text style={{color:PrimaryText}}>90</Text>
                            <Text style={{color:SecondText}}>预约量</Text>
                        </View>
                    </View>
                </View>
                <View style={{height:130,flexDirection:'row',backgroundColor:'gray'}}>
                        <View style={{width:14,backgroundColor:'white'}}>
                                <View style={{height:50,justifyContent:'center',borderBottomWidth:0.2}}><Text numberOfLines={2}>排班</Text></View>
                                <View style={{height:40,borderBottomWidth:0.2}}><Text numberOfLines={2}>上午</Text></View>
                                <View style={{height:40}}><Text numberOfLines={2}>下午</Text></View>
                        </View>
                        <View style={{flex:1,flexDirection:'row'}}>
                            {detailSchedule}
                        </View>
                </View>
            </View>
        );
    }
}

function mapDispatchToProps(dispatch){
  return{
    dispatch
  };
}
function mapStateToProps(state){
  return{
    globalNavigation:state.get('globalNavigation')
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(DoctorShow);

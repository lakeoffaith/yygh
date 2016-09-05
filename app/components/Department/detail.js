
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
}from 'react-native';
import {connect} from 'react-redux';
import {actions} from 'react-native-navigation-redux-helpers';
const {pushRoute}=actions;
import {PrimaryColor,Accent,PrimaryText,SecondText,DividerText,LightPrimaryColor} from '../ijoyComponents/color'
class DetailDep  extends React.Component{
    static propTypes={
        data:React.PropTypes.array.isRequired
    }
    _goDoctorList=()=>{
        const {dispatch,globalNavigation}=this.props;
        dispatch(pushRoute({key:'doctorList',name:'医生列表'},globalNavigation.key));
    }
    render(){
        const _this=this;
       return(
           <View>
               {_this.props.data.map(function(item,i){
                    return (
                             <TouchableOpacity onPress={_this._goDoctorList}>
                                <View key={item.key} style={{height:50,marginLeft:20,borderBottomWidth:0.1,padding:10,alignItems:'center',flexDirection:'row'}}>
                                    <Text style={{color:SecondText}}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
               );
               })}
           </View>
       );
    }
}

function mapDispatchToProps(dispatch){
  return {
    dispatch
  };
}

function mapStateToProps(state){
  return {
    globalNavigation:state.get('globalNavigation')
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(DetailDep);

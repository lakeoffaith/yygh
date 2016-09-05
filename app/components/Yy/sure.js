import React from 'react'
import{
    View,
    Text,
    Image,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native'
import {MKRadioButton,MKColor} from 'react-native-material-kit'
import {PrimaryColor,Accent,PrimaryText,SecondText,DividerText,LightPrimaryColor,TextIcons} from '../ijoyComponents/color'
import {connect} from 'react-redux';
import {actions} from 'react-native-navigation-redux-helpers';
const {pushRoute,jumpToIndex,reset}=actions;
 class SureYy extends React.Component{

    _goMain(){
      const {dispatch,globalNavigation}=this.props;
      dispatch(reset([{key:'applicationTabs',index:globalNavigation.routes[0].index}],globalNavigation.key,0));
    }
    render(){
        return(
          <View>
              <View style={{height:40,marginTop:5,flexDirection:'row',alignItems:'center',borderBottomWidth:0.5}}>
                  <Image source={require('../../img/doctor.jpg')} style={{width:20,height:20,borderRadius:10}}/>
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
                  <Text style={{color:PrimaryText}}>已阅读预约平台规则</Text>
              </View>

                  <View style={{alignItems:'center',marginTop:40}}>
                      <TouchableWithoutFeedback onPress={()=>this._goMain()}>
                          <View style={{width:140,height:50,borderRadius:10,justifyContent:'center',alignItems:'center',backgroundColor:Accent}}>
                              <Text style={{color:TextIcons ,fontSize:16}}>预约</Text>
                          </View>
                      </TouchableWithoutFeedback>
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
export default connect(mapStateToProps,mapDispatchToProps)(SureYy);
const styles=StyleSheet.create({
  item:{
    height:40,
    marginTop:5,
    flexDirection:'row',
    paddingLeft:30,
    alignItems:'center'
  }
});

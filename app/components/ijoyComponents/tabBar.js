import React,{Component,PropTypes} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback
}from 'react-native';
import {PrimaryColor,Accent,TextIcons,PrimaryText} from './color'
import {Icon} from 'react-native-material-design'
import {connect} from 'react-redux';
import AMapLocation from 'react-native-amap-location';
 class TabBar extends Component{
   constructor(){
     super();
     this.state={
       cityParams:null
     }
   }
   componentDidMount() {
     if(this.state.cityParams===null ){
       this.listener = AMapLocation.addEventListener((data) => {
         this.setState({cityParams:'0^'+data.city});
       });
       AMapLocation.startLocation({
         accuracy: 'HighAccuracy',
         killProcess: true,
         needDetail: true,
       })
     }
  }

   static propTypes={
     openDrawer:React.PropTypes.func.isRequired,
     goSearch:React.PropTypes.func.isRequired,
     goLocation:React.PropTypes.func.isRequired
   }
   componentWillReceiveProps(nextProps){
     const {cityParams}=this.props;
     const {cityParams:nextCityParams}=nextProps;
     if(nextCityParams!==this.state.cityParams){
       this.setState({cityParams:nextCityParams});
     }
   }
  render(){
    var cityName="未知";
    if(this.state.cityParams!==null){
        AMapLocation.stopLocation();
        this.listener.remove();
       let array=this.state.cityParams.split('^');
       cityName=array[1];
       if(cityName.substr(cityName.length-1,cityName.length)==='市'){
         cityName=cityName.substr(0,cityName.length-1);
       }
    }

    console.log("tttt");
    return(
      <View style={styles.toolbar}>
          <TouchableWithoutFeedback onPress={()=>this.props.openDrawer()}>
          <View style={{width:40}}>
              <Icon name='menu' />
          </View>
          </TouchableWithoutFeedback>
          <View style={{flex:1}}>
          <TouchableWithoutFeedback onPress={()=>{this.props.goSearch()}}>
          <View  style={{alignItems:'center',backgroundColor: '#ffffff',flexDirection:'row',borderLeftWidth:1,borderRightWidth:1,height:35,borderTopWidth:1,borderBottomWidth:1,borderColor:PrimaryColor,borderRadius:3}}>
            <Icon name='search' size={18} style={{marginRight:10}} />
            <Text>搜索医院,科室，医生,疾病</Text>
          </View>
              </TouchableWithoutFeedback>
          </View>
          <TouchableWithoutFeedback onPress={()=>{this.props.goLocation()}}>
              <View style={{width:60,flexDirection:'row'}}>
                 <Icon name='room' />
                 <View style={{alignItems:'center',justifyContent:'center'}}><Text style={{color:Accent}}>{cityName}</Text></View>
              </View>
          </TouchableWithoutFeedback>
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
    cityParams:state.get('location').cityParams
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(TabBar);

const styles=StyleSheet.create({
  toolbar: {
     height: 56,
     flexDirection: 'row',
     alignItems:'center',
     backgroundColor:PrimaryColor,
 }
})


import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ListView
}from 'react-native';
import {connect} from 'react-redux';
import {actions} from 'react-native-navigation-redux-helpers';
import {bindActionCreators} from 'redux';
import {changeLocationCity} from './actions';
const {pushRoute,popRoute}=actions;
import {PrimaryColor,Accent,PrimaryText,SecondText,DividerText,LightPrimaryColor} from '../ijoyComponents/color'
import {CITYLISTURL} from '../../data/rap'
import DataRepository from '../../data/DataRepository';
const repository=new DataRepository();
class City  extends React.Component{
  constructor(){
    super();

    const ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
    this.state={
      DS:ds.cloneWithRows([])
    }
  }
    static propTypes={
        provinceId:React.PropTypes.number.isRequired
    }

    _getFetchCityList=()=>{
        repository._getFetch(CITYLISTURL+"?id="+this.props.provinceId)
        .then((responseData)=>{
          console.log(responseData);
            this.setState({DS:this.state.DS.cloneWithRows(responseData.result)})
        })
        .catch((error)=>{
          console.log(error);
        })
        .done();
    }
    _changeLocationCity=(cityParams)=>{
        const{changeLocationCity}=this.props.actions;
        const {globalNavigation,dispatch}=this.props;
        changeLocationCity(cityParams);
        dispatch(popRoute(globalNavigation.key));
    }
    componentDidMount(){
        this._getFetchCityList();
    }
    componentWillReceiveProps(nextProps){
      const provinceId=this.props.provinceId;
      const nextProvinceId=nextProps.provinceId;
      if(provinceId!==nextProvinceId){
        this._getFetchCityList();
      }
    }
    _renderRow=(item)=>{
      const cityParams=item.id+"^"+item.city;

       return(
          <View>
          <TouchableOpacity onPress={()=>this._changeLocationCity(cityParams)}>
             <View key={item.id} style={{height:50,marginLeft:20,borderBottomWidth:0.1,padding:10,alignItems:'center',flexDirection:'row'}}>
                 <Text style={{color:SecondText}}>{item.city}</Text>
             </View>
         </TouchableOpacity>
          </View>
       );
    }
    render(){
      console.log('|||||||||||||||||||');
         console.log(this.props.provinceId);
       return(
           <View>
           <ListView

             dataSource={this.state.DS}
             renderRow={this._renderRow}/>

           </View>
       );
    }
}

function mapDispatchToProps(dispatch){
  return {
    actions:bindActionCreators({changeLocationCity},dispatch),
    dispatch
  };
}

function mapStateToProps(state){
  return {
    globalNavigation:state.get('globalNavigation')
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(City);

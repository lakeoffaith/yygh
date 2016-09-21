import React from 'react'
import {
    View,
    Text,
    Dimensions,
    ScrollView,
    ListView,
    TouchableOpacity
}from 'react-native'
import {Icon} from 'react-native-material-design'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadProvinceDataSource} from './actions';
import {actions} from 'react-native-navigation-redux-helpers';
const {pushRoute}=actions;
import {PrimaryColor,Accent,PrimaryText,SecondText,DividerText,LightPrimaryColor} from '../ijoyComponents/color'
import City from './city'
const h=Dimensions.get('window').height;
import {cityArray} from "../../data"
import DataRepository from '../../data/DataRepository';
const repository=new DataRepository();
import {PROVINCELISTURL} from '../../data/rap'
 class Location extends React.Component {
        constructor(){
          super();
          const ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
          this.state={
            DS:ds.cloneWithRows([]),
            provinceId:0
          }
        }
        _fetchProvince=()=>{
          const {actions,dispatch}=this.props;
          console.log(this);
          repository._getFetch(PROVINCELISTURL)
          .then((responseData)=>{
            console.log(responseData);
            actions.loadProvinceDataSource(responseData.result);
          })
          .catch((error)=>{
            console.log(error);
          })
          .done();
        }

        componentDidMount(){
          if(this.props.lists===null){
            this._fetchProvince();
          }else {
            this.setState({DS:this.state.DS.cloneWithRows(this.props.lists)})
          }

        }
        _changeProvince=(provinceId)=>{
            this.setState({provinceId:provinceId})
        }
        _renderRow=(item)=>{
          return (
            <TouchableOpacity onPress={()=>this._changeProvince(item.id)}>
                <View style={{height:60,alignItems:'center',backgroundColor:item.onPressed?'white':LightPrimaryColor,flexDirection:'row',borderBottomWidth:0.5,justifyContent:'center'}}>
                    {item.onPressed?
                      <View style={{width:20,position:'absolute',left:5,top:20}}><Icon name="play-arrow" size={18}/></View>
                      :null}
                    <View ><Text style={{color:PrimaryText}}>{item.province}</Text></View>
                </View>
            </TouchableOpacity>

          );
        }

        componentWillReceiveProps(nextProps){
          const {lists}=this.props;
          const {lists:nextLists}=nextProps;
          if(lists!==nextLists){
            this.setState({DS:this.state.DS.cloneWithRows(nextLists)});
          }
        }

        render(){

            return (
                <View style={{flexDirection:'row'}}>
                    <View style={{width:120,height:h-60,backgroundColor:LightPrimaryColor}}>
                        <ListView

                          dataSource={this.state.DS}
                          renderRow={this._renderRow}/>
                    </View>
                    <City style={{flex:1}} provinceId={this.state.provinceId}/>
                </View>
            );
        }
    }

    function mapDispatchToProps(dispatch) {
    	return {
    		actions:bindActionCreators({loadProvinceDataSource},dispatch),
        dispatch:dispatch
    	};
    }
    /*
     每个tab下关联tabnavigation，在tab中的子tab push,
     每个tab下关联全局的navigation,从而可以push,pop到原定的tab
     */
    function mapStateToProps(state) {
    	console.log(state);
    	return {
    		lists:state.get('location').lists
    	};
    }


    export default connect(mapStateToProps, mapDispatchToProps)(Location);

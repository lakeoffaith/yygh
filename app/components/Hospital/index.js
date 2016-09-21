import {
  View,
  Platform,
  NavigationExperimental,
	TouchableWithoutFeedback,
  Image,
  Text ,
  ListView
} from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './styles'
import { actions } from 'react-native-navigation-redux-helpers';
import DataRepository from '../../data/DataRepository'
import GiftedListView from 'react-native-gifted-listview';
import {PrimaryColor,Accent,PrimaryText,SecondText,DividerText} from '../ijoyComponents/color'
import {Icon} from 'react-native-material-design';
import {bindActionCreators} from 'redux';
import {loadDataSource} from './actions';

import  {HOSPITALLISTURL} from '../../data/rap'
const repository=new DataRepository();
const {
  popRoute,
  pushRoute
} = actions;

const {
	Header: NavigationHeader,
	CardStack: NavigationCardStack
} = NavigationExperimental;
 class Hospital extends React.Component{
   //317为成都的id
    _fetchHospital=()=>{
      const url=HOSPITALLISTURL+"?"+"id="+"317"
   		const {dispatch,actions}=this.props;
   		repository._getFetch(url)
   		.then((responseData)=>{
   		    actions.loadDataSource(responseData.result);
   		})
   		.catch((error)=>{
   			console.log(error);
   		})
   		.done();
   	}
   	componentDidMount(){
   		this._fetchHospital();
   	}
   	_onFetch=(page = 1, callback, options)=> {
       	setTimeout(() => {
       		var rows =this.props.dataArray;
       		if (page === 3) {
       			callback(rows, {
       				allLoaded: true, // the end of the list is reached
       			});
       		} else {
       			callback(rows);
       		}
       	}, 1000); // simulating network fetching
       }
      _goDepartmentList=()=>{
          const {dispatch,globalNavigation}=this.props;
          dispatch(pushRoute({key:'departmentList',name:'科室列表'},globalNavigation.key));
      }
     _renderRowView=(rowData)=>{
       return(
          <View>
              <TouchableWithoutFeedback onPress={this._goDepartmentList}>
              <View style={{flexDirection:'row',height:100,padding:15,borderBottomWidth:0.5,borderColor:DividerText}}>
                      <View>
                          <Image source={{uri:"http://tnfs.tngou.net/image"+rowData.img}} style={{width:80,height:60}}/>
                      </View>
                      <View style={{flex:1,marginLeft:15}}>
                           <Text style={{color:PrimaryText}}>{rowData.name}</Text>
                           <Text style={{color:SecondText}}>{rowData.level}</Text >
                           <Text style={{color:SecondText}} numberOfLines={1}>{rowData.mtype}</Text>
                      </View>

                      <View style={{width:50,paddingLeft:15,paddingRight:10,justifyContent:'center'}}>
                            <Icon name="navigate-next" color={Accent} size={20}/>
                      </View>
              </View>
              </TouchableWithoutFeedback>
          </View>
       );
     }
    render(){
        return(
           <View style={styles.container}>
              <GiftedListView
                  rowView={this._renderRowView}
                  onFetch={this._onFetch}
                  firstLoader={true}
                  pagination={true}
                  refreshable={true}
                  withSections={false}
                  enableEmptySections={true}
                  customStyles={{
                    paginationView:{
                      backgroundColor:'#eee',
                    },
                  }}
                  refreshableTintColor='blue'
              />
           </View>
        );
    }
}
function mapDispatchToProps(dispatch) {
	return {
		actions:bindActionCreators({loadDataSource},dispatch),
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
		tabnavigation:state.get('hospital'),
    globalNavigation:state.get('globalNavigation'),
		dataArray:state.get('hospital').lists
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Hospital);

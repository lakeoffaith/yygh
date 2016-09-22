import {
  View,
  Platform,
  NavigationExperimental,
	TouchableWithoutFeedback,
  Image,
  Text ,
  ListView,
  ActivityIndicator
} from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './styles'
import { actions } from 'react-native-navigation-redux-helpers';
import DataRepository from '../../data/DataRepository'
import {PrimaryColor,Accent,PrimaryText,SecondText,DividerText} from '../ijoyComponents/color'
import {Icon} from 'react-native-material-design';
import {bindActionCreators} from 'redux';
import {loadDataSource} from './actions';
import invariant from 'fbjs/lib/invariant'
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
var resultsCache = {
  dataForQuery: {},
  nextPageNumberForQuery: {},
  totalForQuery: {},
};
var LOADING = {};
 class Hospital extends React.Component{
    constructor(){
      super();

      this.state={
        dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
        }),
        isLoading: false,
       isLoadingTail: false,
       filter: '',
      queryNumber: 0,
      }
    }
    _goDepartmentList=()=>{
          const {dispatch,globalNavigation}=this.props;
          dispatch(pushRoute({key:'departmentList',name:'科室列表'},globalNavigation.key));
      }

   	componentDidMount(){
   		this._fetchHospital('');
   	}
    _fetchHospital=(query)=>{
      this.timeoutID = null;

    this.setState({filter: query});

    var cachedResultsForQuery = resultsCache.dataForQuery[query];
    if (cachedResultsForQuery) {
      if (!LOADING[query]) {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(cachedResultsForQuery),
          isLoading: false
        });
      } else {
        this.setState({isLoading: true});
      }
      return;
    }

    LOADING[query] = true;
    resultsCache.dataForQuery[query] = null;
    this.setState({
      isLoading: true,
      queryNumber: this.state.queryNumber + 1,
      isLoadingTail: false,
    });
    repository._getFetch(this._urlForQueryAndPage(query, 1))
      .catch((error) => {
        LOADING[query] = false;
        resultsCache.dataForQuery[query] = undefined;

        this.setState({
          dataSource: this.state.dataSource.cloneWithRows([]),
          isLoading: false,
        });
      })
      .then((responseData) => {
        LOADING[query] = false;
        resultsCache.totalForQuery[query] = responseData.total;
        resultsCache.dataForQuery[query] = responseData.result;
        resultsCache.nextPageNumberForQuery[query] = 2;

        if (this.state.filter !== query) {
          // do not update state if the query is stale
          return;
        }

        this.setState({
          isLoading: false,
          dataSource: this.state.dataSource.cloneWithRows(responseData.result)
        });
      })
      .done();
    }
    _urlForQueryAndPage=(query,pageNumber)=>{
      if (query) {
      return (
        HOSPITALLISTURL + '?q=' +
        encodeURIComponent(query) + '&page_limit=10&page=' + pageNumber
      );
    } else {
      // With no query, load latest movies
      return (
        HOSPITALLISTURL + '?page_limit=10&page=' + pageNumber
      );
    }
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
     _renderSeparator=(sectionID,rowID,adjacentRowHighlighted)=>{
       var style = styles.rowSeparator;
         if (adjacentRowHighlighted) {
             style = [style, styles.rowSeparatorHide];
         }
         return (
           <View key={'SEP_' + sectionID + '_' + rowID}  style={style}/>
         );
     }
     renderFooter=()=> {
       if (!this.hasMore() || !this.state.isLoadingTail) {
         return <View style={styles.scrollSpinner} />;
       }

       return <ActivityIndicator style={styles.scrollSpinner} />;
     }
     _onEndReached=()=>{
       var query = this.state.filter;
       if (!this.hasMore() || this.state.isLoadingTail) {
         // We're already fetching or have all the elements so noop
         return;
       }

       if (LOADING[query]) {
         return;
       }

       LOADING[query] = true;
       this.setState({
         queryNumber: this.state.queryNumber + 1,
         isLoadingTail: true,
       });

       var page = resultsCache.nextPageNumberForQuery[query];
       invariant(page != null, 'Next page number for "%s" is missing', query);
         repository._getFetch(this._urlForQueryAndPage(query, page))
         .catch((error) => {
           console.error(error);
           LOADING[query] = false;
           this.setState({
             isLoadingTail: false,
           });
         })
         .then((responseData) => {
           var moviesForQuery = resultsCache.dataForQuery[query].slice();

           LOADING[query] = false;
           // We reached the end of the list before the expected number of results
           if (!responseData.result) {
             resultsCache.totalForQuery[query] = moviesForQuery.length;
           } else {
             for (var i in responseData.result) {
               moviesForQuery.push(responseData.result[i]);
             }
             resultsCache.dataForQuery[query] = moviesForQuery;
             resultsCache.nextPageNumberForQuery[query] += 1;
           }

           if (this.state.filter !== query) {
             // do not update state if the query is stale
             return;
           }

           this.setState({
             isLoadingTail: false,
             dataSource: this.state.dataSource.cloneWithRows(resultsCache.dataForQuery[query]),
           });
         })
         .done();
     }
     hasMore=()=> {
      var query = this.state.filter;
      if (!resultsCache.dataForQuery[query]) {
        return true;
      }
      return (
        resultsCache.totalForQuery[query] !==
        resultsCache.dataForQuery[query].length
      );
    }
    render(){
      var content = this.state.dataSource.getRowCount() === 0 ?
        <NoHospitals
          filter={this.state.filter}
          isLoading={this.state.isLoading}
        /> :
        <ListView
          ref="listview"
          renderSeparator={this._renderSeparator}
          dataSource={this.state.dataSource}
          renderFooter={this.renderFooter}
          renderRow={this._renderRowView}
          onEndReached={this._onEndReached}
          automaticallyAdjustContentInsets={false}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps={true}
          showsVerticalScrollIndicator={false}
        />;

        return(
           <View style={styles.container}>
              {content}
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
    globalNavigation:state.get('globalNavigation')
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Hospital);

class NoHospitals extends React.Component {
  render() {
    var text = '';
    if (this.props.filter) {
      text = `No results for "${this.props.filter}"`;
    } else if (!this.props.isLoading) {
      // If we're looking at the latest movies, aren't currently loading, and
      // still have no results, show a message
      text = '没有医院数据';
    }

    return (
      <View style={[styles.container, styles.centerText]}>
        <Text style={styles.noMoviesText}>{text}</Text>
      </View>
    );
  }
}

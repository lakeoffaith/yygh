import React from 'react'
import {
    View,
    Text,
    Dimensions,
    ScrollView,
    ListView,
    TouchableHighlight
}from 'react-native'
import {Icon} from 'react-native-material-design'
import {primaryText,secondaryText,accentColor,dividerColor,lightColor} from '../data'
const h=Dimensions.get('window').height;
import {departmentArray} from "../data"
export default class DepartmentList extends React.Component {
        constructor() {
            super();
            const ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
            this.state = {
                selectDepartmentItemKey:1,
                childrenData:[],
                dataSource:ds.cloneWithRows(this._genRows({})),
                data: [{key:'n1',name: '心血管内科'}, {key:'n2',name: '感染科消化'}, {key:'n3',name: '呼吸内科'}]
            }
        }
        _pressData={}
        componentWillMount(){
          this._pressData={};
        }
        _genRows(pressData){
          const dataBlob=[];
          for(var d in departmentArray){
            if(pressData[departmentArray[d].key]==true){
              departmentArray[d].onPressed=true;
            }
            dataBlob.push(departmentArray[d]);
          }
          return dataBlob;
        }
        _pressRow(rowData){
          this._pressData[rowData.key]=!this._pressData[rowData.key];
          this.setState({dataSource:this.state.dataSource.cloneWithRows(this._genRows(this._pressData))});
        }
        _renderRow(rowData){

          return (
            <TouchableHighlight onPress={()=>this._pressRow(rowData)}>
                <View style={{height:60,alignItems:'center',backgroundColor:'white',flexDirection:'row',borderBottomWidth:0.5,justifyContent:'center'}}>
                    {rowData.onPressed?
                      <View style={{width:20,position:'absolute',left:5,top:20}}><Icon name="play-arrow" size={18}/></View>
                      :null}
                    <View><Text style={{color:primaryText}}>{rowData.name}</Text></View>
                </View>
            </TouchableHighlight>

          );
        }



        render(){
            return (
                <View style={{flexDirection:'row'}}>
                    <View style={{width:120,height:h-60,backgroundColor:lightColor}}>

                        <ListView
                          dataSource={this.state.dataSource}
                          renderRow={this._renderRow.bind(this)}>
                          </ListView>

                    </View>
                    <DetailDep style={{backgroundColor:'blue'}} data={this.state.childrenData}/>
                </View>
            );
        }
    }



class DetailDep  extends React.Component{
    static propTypes={
        data:React.PropTypes.array.isRequired
    }
    static contextTypes = {
        navigator: React.PropTypes.object.isRequired
    }
    _goDoctorList(){
        const {navigator}=this.context;
        navigator.to('Main.HospitalList.DepartmentList.DoctorList')
    }
    render(){
        const _this=this;
       return(
           <View>
               {this.props.data.map(function(item,i){
                    return (
                             <TouchableWithoutFeedback onPress={()=>_this._goDoctorList()}>
                                <View key={item.key} style={{height:50,marginLeft:20,borderBottomWidth:0.1,padding:10,alignItems:'center',flexDirection:'row'}}>
                                    <Text style={{color:secondaryText}}>{item.name}</Text>
                                </View>
                            </TouchableWithoutFeedback>
               );
               })}
           </View>
       );
    }
}

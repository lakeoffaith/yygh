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
import {actions} from 'react-native-navigation-redux-helpers';
const {pushRoute}=actions;
import {PrimaryColor,Accent,PrimaryText,SecondText,DividerText,LightPrimaryColor} from '../ijoyComponents/color'
import City from './city'
const h=Dimensions.get('window').height;
import {cityArray} from "../../data"
export default class Location extends React.Component {
        constructor() {
            super();
            const ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
            this.state = {
                data:cityArray,
                childrenData:[],
                DS:ds.cloneWithRows([])
            }
        }
        componentDidMount(){
          // choose first item
          this.state.data[0].onPressed=true;
          this.setState({
            DS:this.state.DS.cloneWithRows(this.state.data),
            childrenData:this.state.data[0] && this.state.data[0].children
          });
        }
        _pressRow=(item)=>{
          var dataClone=cityArray;
          for (var i = 0; i < dataClone.length; i++) {
            dataClone[i].onPressed=false;
            if(dataClone[i]==item){
              dataClone[i].onPressed=true;
            }
          }
          this.setState({
            data:dataClone,
            childrenData:item.children
          })
        }
        _renderRow=(item)=>{
          return (
            <TouchableOpacity onPress={()=>this._pressRow(item)}>
                <View style={{height:60,alignItems:'center',backgroundColor:item.onPressed?'white':LightPrimaryColor,flexDirection:'row',borderBottomWidth:0.5,justifyContent:'center'}}>
                    {item.onPressed?
                      <View style={{width:20,position:'absolute',left:5,top:20}}><Icon name="play-arrow" size={18}/></View>
                      :null}
                    <View ><Text style={{color:PrimaryText}}>{item.name}</Text></View>
                </View>
            </TouchableOpacity>

          );
        }



        render(){
            return (
                <View style={{flexDirection:'row'}}>
                    <View style={{width:120,height:h-60,backgroundColor:LightPrimaryColor}}>
                        <ListView

                          dataSource={this.state.DS}
                          renderRow={this._renderRow}/>
                    </View>
                    <City style={{flex:1}} data={this.state.childrenData}/>
                </View>
            );
        }
    }

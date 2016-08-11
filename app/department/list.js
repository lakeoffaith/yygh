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
import {primaryText,secondaryText,accentColor,dividerColor,lightColor} from '../data'
const h=Dimensions.get('window').height;
import {departmentArray} from "../data"
export default class DepartmentList extends React.Component {
        constructor() {
            super();
            const ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
            this.state = {
                data:departmentArray,
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
          var dataClone=departmentArray;
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
                <View style={{height:60,alignItems:'center',backgroundColor:item.onPressed?'white':lightColor,flexDirection:'row',borderBottomWidth:0.5,justifyContent:'center'}}>
                    {item.onPressed?
                      <View style={{width:20,position:'absolute',left:5,top:20}}><Icon name="play-arrow" size={18}/></View>
                      :null}
                    <View ><Text style={{color:primaryText}}>{item.name}</Text></View>
                </View>
            </TouchableOpacity>

          );
        }



        render(){
          console.log("STATE:",this.state);
            return (
                <View style={{flexDirection:'row'}}>
                    <View style={{width:120,height:h-60,backgroundColor:lightColor}}>
                        <ListView

                          dataSource={this.state.DS}
                          renderRow={this._renderRow}/>
                    </View>
                    <DetailDep style={{flex:1}} data={this.state.childrenData}/>
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
                             <TouchableOpacity onPress={()=>_this._goDoctorList()}>
                                <View key={item.key} style={{height:50,marginLeft:20,borderBottomWidth:0.1,padding:10,alignItems:'center',flexDirection:'row'}}>
                                    <Text style={{color:secondaryText}}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
               );
               })}
           </View>
       );
    }
}

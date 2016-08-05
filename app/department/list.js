import React from 'react'
import {
    View,
    Text,
    Dimensions,
    ScrollView,
    TouchableWithoutFeedback
}from 'react-native'
import {Icon} from 'react-native-material-design'
import {primaryText,secondaryText,accentColor,dividerColor,lightColor} from '../data'
const h=Dimensions.get('window').height;
export default class DepartmentList extends React.Component {
        constructor() {
            super();
            this.state = {
                data: [{key:'n1',name: '心血管内科'}, {key:'n2',name: '感染科消化'}, {key:'n3',name: '呼吸内科'}]
            }
        }
        _changeItem()
        {
            this.setState({data: [{key:'w1',name: '普通外科'}, {key:'w2',name: '胸外科'}]})
        }
        render()
        {
            return (
                <View style={{flexDirection:'row'}}>
                    <View style={{width:120,height:h-60,backgroundColor:lightColor}}>
                        <ScrollView >
                            <View style={{height:60,alignItems:'center',borderBottomWidth:0.5,justifyContent:'center'}}>
                                <View style={{width:20}}></View>
                                <View><Text style={{color:primaryText}}>内科</Text></View>
                            </View>
                            <TouchableWithoutFeedback onPress={()=>this._changeItem()}>
                                <View style={{height:60,alignItems:'center',backgroundColor:'white',flexDirection:'row',borderBottomWidth:0.5,justifyContent:'center'}}>
                                    <View style={{width:20,position:'absolute',left:5,top:20}}><Icon name="play-arrow" size={18}/></View>
                                    <View><Text style={{color:primaryText}}>外科</Text></View>
                                </View>
                            </TouchableWithoutFeedback>
                            <View style={{height:60,alignItems:'center',justifyContent:'center'}}>
                                <Text style={{color:primaryText}}>骨科</Text>
                            </View>
                            <View style={{height:60,alignItems:'center',justifyContent:'center'}}>
                                <Text style={{color:primaryText}}>妇产科</Text>
                            </View>
                        </ScrollView>
                    </View>
                    <DetailDep style={{backgroundColor:'blue'}} data={this.state.data}/>
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
import React from 'react'
import {
    View,
    Text,
    Image,
    ListView,
    TouchableWithoutFeedback
} from 'react-native'
import {Icon} from 'react-native-material-design'
import {primaryText,secondaryText,accentColor,dividerColor} from '../data'
import {viewH} from '../data'
import DataRepository from '../data/DataRepository'
const repository=new DataRepository();
export default class HospitalList extends React.Component{
    constructor(){
      super();
      const ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
      this.state={
        DS:ds.cloneWithRows([])
      }
    }
    componentDidMount(){
      repository.fetchHospital({'id':317})
      .then((dataArray)=>{
         this.setState({
           DS:this.state.DS.cloneWithRows(dataArray)
         })
      })
      .catch((error)=>{
        console.error(error);
      })
      .done();
    }
    static contextTypes = {
        navigator: React.PropTypes.object.isRequired
    }
    _goDepartmentList(){
        const {navigator}=this.context;
        navigator.to('Main.HospitalList.DepartmentList')
    }
    _goSearch(){
      const {navigator} =this.context;
      navigator.to('Main.HospitalList.search');
    }
    _renderRow=(item)=>{

        return(
           <View>
               <TouchableWithoutFeedback onPress={()=>this._goDepartmentList()}>
               <View style={{flexDirection:'row',height:100,padding:15,borderBottomWidth:0.5,borderColor:dividerColor}}>
                       <View>
                           <Image source={{uri:"http://tnfs.tngou.net/image"+item.img}} style={{width:80,height:60}}/>
                       </View>
                       <View style={{flex:1,marginLeft:15}}>
                            <Text style={{color:primaryText}}>{item.name}</Text>
                            <Text style={{color:secondaryText}}>{item.level}</Text >
                            <Text style={{color:secondaryText}} numberOfLines={1}>{item.mtype}</Text>
                       </View>

                       <View style={{width:50,paddingLeft:15,paddingRight:10,justifyContent:'center'}}>
                             <Icon name="navigate-next" color={accentColor} size={20}/>
                       </View>
               </View>
               </TouchableWithoutFeedback>
           </View>
        );
    }
    render(){
      console.log(viewH);
        return(
            <View>
                <TouchableWithoutFeedback onPress={()=>this._goSearch()}>
                <View style={{flexDirection:'row',height:40,alignItems:'center',borderBottomWidth:0.5,borderColor:dividerColor}}>
                    <Icon style={{marginLeft:25,marginRight:5}} name="search" size={17}/>
                    <Text style={{color:secondaryText}}>搜索医院,医生,科室,疾病</Text>
                </View>
                </TouchableWithoutFeedback>
                <View style={{height:(viewH-100)}}>
                <ListView
                  dataSource={this.state.DS}
                  renderRow={this._renderRow}
                />
                </View>

            </View>
        );
    }
}

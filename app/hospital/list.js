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
        navigator.to('Main.DepartmentList')
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
        return(
            <View>

                <View style={{height:viewH}}>
                <ListView
                  dataSource={this.state.DS}
                  renderRow={this._renderRow}
                />
                </View>

            </View>
        );
    }
}

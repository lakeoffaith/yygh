import React,{PropTypes} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    TextInput,
    Image,
    Dimensions
} from 'react-native'
import {primaryColor,accentColor,textIcons,primaryText} from './data'
import {Icon} from 'react-native-material-design'
const w=Dimensions.get('window').width;
export  default class Main extends  React.Component{
    static contextTypes = {
        drawer: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired
    };
    _search(){
        const {navigator,drawer}=this.context;
        navigator.to("Main.HospitalList");
        drawer.closeDrawer();
    }
    render(){
        return(
            <View style={styles.container}>
                    <View style={{marginTop:30,marginBottom:30,marginLeft:10,marginRight:10}}>
                        <Image source={require('./img/welcomeBar.jpg')} style={{height:120,width:w-30}}/>
                    </View>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <View style={{flex:1,marginLeft:30,marginRight:20,justifyContent:'center'}}>

                            <View style={{borderLeftWidth:1,borderRightWidth:1,height:40,borderTopWidth:1,borderBottomWidth:1,borderColor:primaryColor}}>
                            <TextInput
                                style={{height:40, backgroundColor: '#ffffff',paddingLeft:15,paddingRight:15}}
                                placeholder='搜索医院,科室,医生,疾病'
                                placeholderTextColor={primaryText}
                                />
                            </View>
                        </View>
                        <View style={{width:60,marginRight:20}}>
                            <TouchableHighlight onPress={()=>this._search()}>
                                <View style={styles.ghButton}>
                                    <Icon name="trending-flat"  size={30} color={textIcons}  />
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>

            </View>
        );
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:primaryColor,
    },
    ghButton:{
        width:40,
        height:40,
        borderRadius:25,
        backgroundColor:accentColor,
        justifyContent:'center',
        alignItems:'center'

    }
});
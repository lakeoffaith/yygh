import React from 'react';

import {
  View,
  Text,
  StyleSheet,TouchableHighlight,
  Image,
  TouchableOpacity
} from 'react-native';
import {PrimaryColor,Accent,PrimaryText,SecondText,DividerText} from '../ijoyComponents/color'
import {Icon} from 'react-native-material-design';
import {connect} from 'react-redux';
import {actions} from 'react-native-navigation-redux-helpers';
const {pushRoute}=actions;
class NavigationView extends React.Component{
  static propTypes={
    closeDrawer:React.PropTypes.func.isRequired
  }
  _pushMenu=(route)=>{
    this.props.closeDrawer();
    const {dispatch,globalNavigation}=this.props;
    dispatch(pushRoute(route,globalNavigation.key));
  }
  render(){
    const {user}=this.props;
    const loginHeaderView=
      <View>
            <View style={styles.loginTextContainer}>
                  <Image
                    source={require('../../img/user.jpg')}
                    style={{width:60,height:60,borderRadius:5}}
                  />
            </View>
              <View style={styles.loginButtonContainer}>
                  <Text style={{fontSize:17}}>{user.name}</Text>
              </View>
      </View>
    ;
    return(
       <View>
            <View style={styles.header}>
                  {user.isAuthenticated===true?
                    loginHeaderView
                      :
                      <View>
                        <View style={styles.loginTextContainer}>
                            <Text>登录IJOY</Text>
                            <Text>享受更好的服务</Text>
                        </View>
                        <View style={styles.loginButtonContainer}>
                            <TouchableOpacity onPress={()=>this._pushMenu({key:'login',name:'登录页面'})}>
                             <View style={styles.button}>
                                <Text style={{fontSize:16,textAlignVertical:'center'}}>立即登录</Text>
                             </View>
                             </TouchableOpacity>
                        </View>
                      </View>
                  }

            </View>
            <View style={styles.body}>
                <TouchableOpacity onPress={()=>this._pushMenu({key:'yyList',name:'预约历史'})}>
                <View style={styles.item}>
                    <View style={{width:20,height:20,justifyContent:'center',marginRight:10}}><Icon name='menu' size={18}/></View>
                    <View style={{flex:1}}><Text>我的挂号</Text></View>
                    <View style={{width:60,alignItems:'center'}}>
                          <View style={{width:15,height:15,borderRadius:5,backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
                              <Text>1</Text>
                          </View>
                    </View>
                </View>
                </TouchableOpacity>
                <View style={styles.item}>
                    <View style={{width:20,height:20,justifyContent:'center',marginRight:10}}><Icon name='menu' size={18}/></View>
                    <View style={{flex:1}}><Text>我的消息</Text></View>
                    <View style={{width:60,alignItems:'center'}}>
                          <View style={{width:15,height:15,borderRadius:5,backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
                              <Text>1</Text>
                          </View>
                    </View>
                </View>
                <View style={styles.item}>
                    <View style={{width:20,height:20,justifyContent:'center',marginRight:10}}><Icon name='menu' size={18}/></View>
                    <View style={{flex:1}}><Text>我的消息</Text></View>
                    <View style={{width:60,alignItems:'center'}}>
                          <View style={{width:15,height:15,borderRadius:5,backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
                              <Text>1</Text>
                          </View>
                    </View>
                </View>
                <TouchableOpacity >
                <View style={styles.item}>
                    <View style={{width:20,height:20,justifyContent:'center',marginRight:10}}><Icon name='menu' size={18}/></View>

                    <View style={{flex:1}}><Text>热更新</Text></View>

                    <View style={{width:60,alignItems:'center'}}>
                          <View style={{width:15,height:15,borderRadius:5,backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
                              <Text>1</Text>
                          </View>
                    </View>
                </View>
                </TouchableOpacity>
            </View>
       </View>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    dispatch
  };
}

function mapStateToProps(state){
  return {
    globalNavigation:state.get('globalNavigation'),
    user:state.get('user')
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(NavigationView);

const styles=StyleSheet.create({
  header:{
    height:160,
    backgroundColor:PrimaryColor
  },
  loginTextContainer:{
     height:100,
     justifyContent:'center',
     alignItems:'center',
  },
  loginButtonContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  button:{
      height:30,
      width:120,
      borderWidth:1,
      justifyContent:'center',
      alignItems:'center'
  },
  body:{
      flex:1
  },
  item:{
    flexDirection:'row',
    padding:10,
    height:45,
    justifyContent:'center'
  },

})

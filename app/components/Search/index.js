import React from 'react';

import {
  View,
  Text,
  StyleSheet
}from 'react-native';

export default  class Search extends React.Component{
  render(){
    return(
       <View>
          <View style={{borderBottomWidth:0.5,padding:10}}>
            <Text>成都</Text>
          </View>
          <View style={{borderBottomWidth:0.5,padding:10,alignItems:'center'}}>
            <Text style={{fontSize:12}}>清楚历史记录</Text>
          </View>
       </View>
    );
  }
}

import React from 'react'
import {
    View,
    Text,
    Image,
    Dimensions
} from 'react-native'

export  default class Welcome extends  React.Component{

    render(){
        const {height,width}=Dimensions.get('window');
        return(
          <View>
              <Image source={require('./img/ijoy.png')} style={{height:height,width:width}}/>
          </View>
        );
    }
}
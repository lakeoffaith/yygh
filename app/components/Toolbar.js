import React, { Component, PropTypes, } from 'react';
import { Toolbar as MaterialToolbar } from 'react-native-material-design';
import {
    Text,
    View,
    Navigator
} from 'react-native'
import {ijoyTheme} from '../data'
export default class Toolbar extends Component {
    static contextTypes = {
        navigator: PropTypes.object
    };

    static propTypes = {
        onIconPress: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

    }
    render() {
        const { navigator } = this.context;
        const { onIconPress } = this.props;
        if(navigator){
            console.log(navigator.currentRoute);
        }
        return (
            <MaterialToolbar
                title={navigator && navigator.currentRoute ? navigator.currentRoute.title : ' '}
                primary={'paperBlueGrey'}
                icon={navigator && navigator.isChild ? 'keyboard-backspace' : 'menu'}
                onIconPress={() => navigator && navigator.isChild ? navigator.back() : onIconPress()}
                actions={navigator && navigator.currentRoute  ? (navigator.currentRoute.actions?navigator.currentRoute.actions:null):[{icon:'location-on',info:'成都'}]}
            />
        );
    }
}
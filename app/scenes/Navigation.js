import React, { Component, PropTypes} from 'react';
import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback
} from 'react-native'

import { Avatar, Drawer, Divider, COLOR, TYPO } from 'react-native-material-design';
import {primaryColor,primaryText,secondaryText,accentColor,dividerColor,lightColor,textIcons} from '../data'
export default class Navigation extends Component {

    static contextTypes = {
        drawer: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            route: null
        }
    }

    changeScene = (path, name) => {
        const { drawer, navigator } = this.context;

        this.setState({
            route: path
        });
        navigator.to(path, name);
        drawer.closeDrawer();
    };

    render() {
        const { route } = this.state;

        return (
            <Drawer overrides={{}}>
                <Drawer.Header  backgroundColor={primaryColor}>
                    <TouchableWithoutFeedback onPress={()=>this.changeScene('Login')}>
                    <View style={styles.header}>
                        <Avatar size={80} image={<Image source={require('../img/user.jpg')}/>} />
                        <Text style={[styles.text, COLOR.paperGrey50, TYPO.paperFontSubhead]}>未登录</Text>
                    </View>
                    </TouchableWithoutFeedback>
                </Drawer.Header>

                <Drawer.Section
                    items={[{
                        icon: 'home',
                        value: '首页',
                        active: !route || route === 'Main',
                        onPress: () => this.changeScene('Main'),
                        onLongPress: () => this.changeScene('Main')
                    }]}
                />

                <Drawer.Section
                    title="功能区"
                    items={[{
                        icon:'class',
                        value: '预约记录',
                        label: '1',
                        active: route === 'YyList',
                        onPress: () => this.changeScene('YyList'),
                        onLongPress: () => this.changeScene('YyList')
                    },{
                        icon:'alarm',
                        value: '消息',
                        label: '1',
                        active: route === 'YyList',
                        onPress: () => this.changeScene('YyList'),
                        onLongPress: () => this.changeScene('YyList')
                    },{
                        icon:'settings',
                        value: '设置',
                        label: '1',
                        active: route === 'YyList',
                        onPress: () => this.changeScene('YyList'),
                        onLongPress: () => this.changeScene('YyList')
                    }]}
                />

            </Drawer>
        );
    }
}

const styles = {
    header: {
        paddingTop: 16,
        alignItems:'center',

    },
    text: {
        marginTop: 20
    }
};

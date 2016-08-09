import React from 'react'
import {
    View,
    Text,
    Navigator,
    ToastAndroid,
    Platform,
    BackAndroid,
    DrawerLayoutAndroid,
} from 'react-native'
import Navigate from './utils/Navigate';
import Toolbar from './components/Toolbar';
import Navigation from './scenes/Navigation';
import Welcome from './Welcome'
export default class App extends React.Component{
    constructor() {
        super();
        this.state= {
            navigator:null,
            drawer:null,
            welcoming:true
        }
    }
    static childContextTypes={
        drawer:React.PropTypes.object,
        navigator:React.PropTypes.object
    }
    getChildContext(){
        return {
            drawer:this.state.drawer,
            navigator:this.state.navigator
        }
    }


    componentDidMount(){
        setTimeout(()=>this.setState({welcoming:false}),1000);
    }
    setNavigator (navigator) {
        this.setState({
            navigator: new Navigate(navigator)
        });
    }
    setDrawer(drawer){
        this.setState({
            drawer:drawer
        });
    }
    render() {
        if(this.state.welcoming)return <Welcome />
        const { drawer, navigator } = this.state;
        const navView = React.createElement(Navigation);
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => {
                    if (drawer && navigator) {
                        return navView;
                    }
                    return null;
                }}
                ref={(drawer) => { !this.state.drawer ? this.setDrawer(drawer) : null }}
            >
                {drawer &&
                <Navigator
                    initialRoute={Navigate.getInitialRoute()}
                    navigationBar={<Toolbar onIconPress={drawer.openDrawer} />}
                    configureScene={() => {
                            return Navigator.SceneConfigs.FadeAndroid;
                        }}
                    ref={(navigator) => { !this.state.navigator ?this.setNavigator(navigator): null }}
                    renderScene={(route) => {
                        if (this.state.navigator && route.component) {
                            return (
                                <View
                                    style={styles.scene}
                                    showsVerticalScrollIndicator={false}>
                                	<route.component title={route.title} path={route.path} {...route.props} />
                                </View>
                            );
                        }
                    }}
                />
                }
            </DrawerLayoutAndroid>
        );
    }
}

const styles = {
    scene: {
        flex: 1,
        marginTop: 56
    }
};

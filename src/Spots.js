// Spots GUI Prototype JS code

import React, { Component } from 'react';
import { 
    AppRegistry, 
    Text, 
    View, 
    Navigator,
    BackAndroid } from 'react-native';
import Login from './components/Login';
import Main from './components/Main';
import CheckIn from './components/CheckIn';
import Register from './components/Register';
import RegSubmit from './components/RegSubmit';

export default class Spots extends Component {

    constructor(props) {
        super(props)
        this.nav = null;

        this.handleBack = (() => {
        if (this.nav && this.nav.getCurrentRoutes().length > 1){
            this.nav.pop();
            return true;
        }

        return false;
        }).bind(this)
    }

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.handleBack);
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this.handleBack);
    }

    renderScene(route, navigator) {
        switch(route.page) {
            case 'Login':
                return (
                    <View style={{flex: 1}}>
                        <Login navigator={navigator} title="Login" />
                    </View>
                )
            case 'Register':
                return (<Register navigator={navigator} title="Register"/>)
            case 'RegSubmit':
                return (<RegSubmit navigator={navigator} title="RegSubmit" 
                    fname={route.fname} 
                    lname={route.lname}
                    uname={route.uname}
                    email={route.email}
                    //password={route.password}
                    pnum={route.pnum}
                />)
            case 'Main':
                return (<Main navigator={navigator} title="Main" fname={route.fname} />)
            case 'CheckIn':
                return (<CheckIn navigator={navigator} title="CheckIn"/>)
        }
    }

    render() {

        return (
            <Navigator
            initialRoute={{page: 'Login'}}
            renderScene={this.renderScene}
            configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottomAndroid}
            ref={nav=> {this.nav = nav}}
            />
        )
    }
}

AppRegistry.registerComponent('Spots', () => Spots);
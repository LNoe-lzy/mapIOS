/**
 * Created by lizongyuan on 2017/1/17.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import MWebView from './mWebView';

export  default class Weather extends Component {
    render() {
        return (
            <View style={styles.container}>
                <MWebView url="http://localhost:63342/mapIOS/mapIOS/html/weather.html?_ijt=8g3duk8phe1cbvkk83tihta6kc"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

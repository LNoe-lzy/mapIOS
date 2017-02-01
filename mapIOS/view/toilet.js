
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';

import MWebView from './mWebView';

export  default class Toilet extends Component {
    render() {
        return (
            <View style={styles.container}>
                <MWebView url="http://localhost:63342/mapIOS/mapIOS/html/nearby.html?_ijt=iggjh7901t11f3f0hom0539nu8"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

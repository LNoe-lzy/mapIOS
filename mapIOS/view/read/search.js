/**
 * Created by lizongyuan on 2017/1/18.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

import Util from '../util';

export  default class Search extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="搜索"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 20
    },
    searchInput: {
        height: 35,
        borderWidth: 1,
        borderColor: '#eeeeee',
        paddingLeft: 5,
        borderRadius: 3
    }
});

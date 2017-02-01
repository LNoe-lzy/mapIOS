/**
 * Created by lizongyuan on 2017/1/18.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import Util from '../util';
import List from './list';

export  default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            navigator: props.navigator
        };
    }

    _goToList(name) {
        let type = this._getType(name);
        let url = 'http://localhost:3000/data/read?type=' + type;
        this.state.navigator.push({
            component: List,
            title: name,
            barTintColor: '#fff',
            passProps: {
                url: url
            }
        });
    }

    _getType(name) {
        let type = 'it';
        switch (name) {
            case '互联网':
                type = 'it';
                break;
            case '散文':
                type = 'sanwen';
                break;
            case '笑话':
                type = 'cookies';
                break;
            case '管理':
                type = 'manager';
                break;
            default :
                type = 'it';
                break;
        }
        return type;
    }

    render() {
        let data = this.state.data;
        let views1 = [];
        let views2 = [];
        for (let i in data) {
            let item = (
                <View style={styles.rowItem} key={i}>
                    <TouchableOpacity style={styles.item} onPress={this._goToList.bind(this, data[i].text)}>
                        <Text style={styles.title}>{data[i].text}</Text>
                    </TouchableOpacity>
                </View>
            );
            if (i < 2) {
                views1.push(item);
            } else {
                views2.push(item);
            }
        }
        return (
            <View style={styles.container}>
                <Text style={styles.textTop}>分类</Text>
                <View style={styles.row}>
                    {views1}
                </View>
                <View style={styles.row}>
                    {views2}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10
    },
    textTop: {
        color: '#5e5e5e',
        marginBottom: 8,
        fontSize: 16,
        marginTop: 10
    },
    row: {
        flexDirection: 'row',
        marginTop: 5
    },
    item: {
        height: 50,
        width: (Util.size.width - 30) / 2,
        borderColor: '#f1f1f1',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    rowItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 17,
        color: '#707070',
        fontWeight: '400'
    }
});

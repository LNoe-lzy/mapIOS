/**
 * Created by lizongyuan on 2017/1/18.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import Util from '../util';
import MWebView from '../mWebView';

export  default class Recommend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        }
    }

    _showWebPage(url, title) {
        this.props.navigator.push({
            component: MWebView,
            title: title,
            passProps: {
                url: url
            }
        })
    }

    render() {
        let data = this.state.data;
        let views1 = [];
        let views2 = [];
        for (let i in data) {
            let item = (
                <TouchableOpacity style={styles.imgItem} key={i} onPress={this._showWebPage.bind(this, data[i].url, data[i].title)}>
                    <Image
                        style={styles.img}
                        source={{uri: data[i].img}}
                    />
                    <Text numberOfLines={2} style={styles.title}>{data[i].title}</Text>
                </TouchableOpacity>
            );
            if (i < 4) {
                views1.push(item)
            } else {
                views2.push(item)
            }
        }
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.textTop}>热门推荐</Text>
                </View>
                <View style={styles.imgView}>
                    {views1}
                </View>
                <View style={styles.imgView}>
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
    imgView: {
        flexDirection: 'row'
    },
    imgItem: {
        flex: 1,
        height: 150
    },
    img: {
        height: 120,
        width: (Util.size.width - 40) / 4,
        shadowOpacity: 1,
        shadowColor: '#ccc',
        shadowOffset: {width: 1 * Util.pixel, height: Util.pixel},
        borderRadius: 3
    },
    textTop: {
        color: '#5e5e5e',
        marginBottom: 8,
        fontSize: 16,
        marginTop: 10
    },
    title: {
        color: '#ccc',
        marginTop: 4,
        fontSize: 14
    }
});

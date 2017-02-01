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

export  default class Topic extends Component {
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
        let views = [];
        let data = this.state.data;
        for (let i in data) {
            views.push(
                <TouchableOpacity style={styles.imgItem} key={i} onPress={this._showWebPage.bind(this, data[i].url, data[i].title)}>
                    <Image
                        resizeMode="cover"
                        style={styles.img}
                        source={{uri: data[i].img}}
                    />
                </TouchableOpacity>
            )
        }
        return (
            <View style={[styles.container, {marginTop: 10}]}>
                <View>
                    <Text style={styles.textTop}>推荐专题</Text>
                </View>
                <View style={styles.imgView}>
                    {views}
                </View>
                <View>
                    <Text style={styles.textBottom}>查看更多</Text>
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
        flex: 1
    },
    img: {
        width: (Util.size.width - 30) / 2,
        height: 200,
        borderRadius: 5,
    },
    textTop: {
        color: '#5e5e5e',
        marginBottom: 8,
        fontSize: 16
    },
    textBottom: {
        color: '#ccc',
        marginTop: 6,
        fontSize: 14,
        fontWeight: '300',
        marginBottom: 10
    }
});

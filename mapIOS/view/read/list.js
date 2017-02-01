import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity
} from 'react-native';

import Util from '../util';
import MWebView from '../mWebView';

export  default class List extends Component {
    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            url: props.url,
            dataSource: ds.cloneWithRows([]),
        }
    }

    componentDidMount() {
        let url = this.state.url;
        let that = this;
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        Util.get(url, function (data) {
            if (data.status === 1) {
                that.setState({
                    dataSource: ds.cloneWithRows(data.data),
                })
            } else {
                alert('获取数据失败!');
            }
        }, function (err) {

        })
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
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    enableEmptySections={true}
                    renderRow={(rowData) => (
                        <TouchableOpacity style={styles.item} onPress={this._showWebPage.bind(this, rowData.url, rowData.title)}>
                            <View>
                                <Image
                                    style={styles.img}
                                    source={{uri: rowData.img}}
                                />
                            </View>
                            <View style={styles.textWraper}>
                                <Text style={styles.title} numberOfLines={1}>{rowData.title}</Text>
                                <Text style={styles.time}>{rowData.time}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
       flex: 1
    },
    item: {
        flexDirection: 'row',
        height: 78,
        paddingLeft: 10,
        borderBottomColor: '#ededed',
        borderBottomWidth: Util.pixel
    },
    img: {
        height: 72,
        width: 72,
        borderRadius: 3,
        marginTop: 5
    },
    textWraper: {
        marginLeft: 5,
        flex: 1
    },
    title: {
        fontSize: 16,
        marginTop: 10
    },
    time: {
        color: '#ddd',
        fontSize: 13,
        marginTop: 5
    }
});
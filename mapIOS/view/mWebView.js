/**
 * Created by lizongyuan on 2017/1/18.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';

export default class MWebView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: this.props.url,
            isErr: false
        };
    }

    _showErr() {
        this.setState({
            isErr: true
        })
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.isErr ?
                        <View style={styles.errInfo}>
                            <Text style={styles.errText}>网络出现啊问题...</Text>
                        </View>
                        :
                        <WebView
                            source={{uri: this.state.url}}
                            style={{marginTop: -20}}
                            onError={this._showErr.bind(this)}
                            startInLoadingState={true}
                        />
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    errInfo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    errText: {
        fontSize: 16,
        fontWeight: '300'
    }
});
/**
 * Created by lizongyuan on 2017/1/17.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    NavigatorIOS
} from 'react-native';

import Category from './read/category';
import List from './read/list';
import Recommend from './read/recommend';
import Topic from './read/topic';
import Search from './read/search';
import Util from './util';

// 分割线组件
class Hr extends Component {
    render() {
        return(
            <View style={styles.hr}>

            </View>
        );
    }
}

class ReadView extends Component {
    constructor() {
        super();
        this.state = {
            isShow: false
        }
    }

    componentDidMount() {
        // this.setState({
        //     isShow: true
        // });
        let that = this;
        Util.get('http://localhost:3000/data/read?type=config', function (data) {
            if (data.status === 1) {
                let obj = data.data;
                that.setState({
                    isShow: true,
                    recommendTopic: obj.recommendTopic,
                    hotTopic: obj.hotTopic,
                    category: obj.category,
                    other: obj.other,
                });
            } else {

            }
        }, function (err) {

        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Search/>
                <Hr/>
                {
                    this.state.isShow ?
                        <ScrollView style={styles.container}>
                            <Topic data={this.state.recommendTopic} navigator={this.props.navigator}/>
                            <Hr/>
                            <Recommend data={this.state.hotTopic} navigator={this.props.navigator}/>
                            <Hr/>
                            <Category data={this.state.category} navigator={this.props.navigator}/>
                            <View style={{height: 80}}>
                            </View>
                        </ScrollView>
                        :
                        null
                }
            </View>
        )
    }
}

export default class Read extends Component {
    render() {
        return(
            <NavigatorIOS
                initialRoute={{
                    component: ReadView,
                    title: '阅读',
                    navigationBarHidden: true,
                    passProps: {
                        test: 'test'
                    }
                }}
                style={{flex: 1}}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    hr: {
        borderColor: '#f0f0f0',
        borderWidth: 1,
        marginTop: 10
    }
});

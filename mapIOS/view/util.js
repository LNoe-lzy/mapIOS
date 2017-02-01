/**
 * Created by lizongyuan on 2017/1/18.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    PixelRatio
} from 'react-native';

module.exports = {
    size: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    pixel: 1 / PixelRatio.get(),
    get: function (url, success, error) {
        fetch(url)
            .then((res) => res.json())
            .then((resJson) => {
                success(resJson);
            }).catch((err) => {
                error(err);
            })
    }
};
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Button } from 'react-native';
import { Image } from 'react-native';

export default class BotaoDrawer extends React.Component {

    render() {
        return (
            <TouchableOpacity >
                <View style={{ padding: 22 }} >
                   <Image source={require('../images/icon/iconDrawer.png')} />
                </View>
            </TouchableOpacity>
        );
    }
}
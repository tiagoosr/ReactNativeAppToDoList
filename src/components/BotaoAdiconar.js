import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Image } from 'react-native';

export default class BotaoAdiconar extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <TouchableOpacity onPress={this.props.click}>
                <View style={{ width: 46, height: 46 }}>
                    <LinearGradient
                        colors={['#254DDE', '#00FFFF']}
                        style={styles.linearGradient}
                        useAngle={true}
                        angle={60}
                        angleCenter={{ x: 0.5, y: 0.50 }}
                    >
                        <View style={styles.BotaoAdiconar}>
                            <Image source={require('../images/icon/iconAdicionar.png')} />
                        </View>
                    </LinearGradient>
                </View>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    BotaoAdiconar: {
        height: 46,
        width: 46,
        justifyContent: 'center',
        alignItems: 'center',
    },
    linearGradient: {
        borderRadius: 100,
        shadowColor: "#00FFFF",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 4,
    },
});
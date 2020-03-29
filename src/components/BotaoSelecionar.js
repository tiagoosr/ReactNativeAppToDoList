import React from 'react';
import { StyleSheet, View, TouchableOpacity, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Image } from 'react-native';

class BotaoSelecionar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <TouchableOpacity onPress={this.props.click}>
                <View style={{ width: 46, height: 46 }}>
                    <LinearGradient
                        colors={['#9435BB', '#FE1E9A']}
                        style={styles.linearGradient}
                        useAngle={true}
                        angle={60}
                        angleCenter={{ x: 0.4, y: 0.60 }}
                    >
                        <View style={styles.BotaoSelecionar} >
                            <Image source={require('../images/icon/selecao-simples.png')} />
                        </View>
                    </LinearGradient>
                </View>
            </TouchableOpacity>
        );
    }
}
export default BotaoSelecionar;
const styles = StyleSheet.create({
    BotaoSelecionar: {
        height: 46,
        width: 46,
        justifyContent: 'center',
        alignItems: 'center',
    },
    linearGradient: {
        borderRadius: 100,
        shadowColor: "#FE1E9A",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 4,
    },
});
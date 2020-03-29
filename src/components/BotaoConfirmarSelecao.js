import React from 'react';
import { StyleSheet, View, TouchableOpacity, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Image } from 'react-native';

class BotaoConfirmarSelecao extends React.Component {
    constructor(props){
        super(props)
    }

    render() {

        return (
            <TouchableOpacity onPress={this.props.click}>
                <View style={{ width: 56, height: 56}}>
                    <LinearGradient
                        colors={['#9435BB', '#FE1E9A']}
                        style={styles.linearGradient}
                        useAngle={true}
                        angle={60}
                        angleCenter={{ x: 0.4, y: 0.60 }}
                    >
                        <View style={styles.BotaoConfirmarSelecao} >
                            <Image source={require('../images/icon/selecao-dupla.png')} />
                        </View>
                    </LinearGradient>
                </View>
            </TouchableOpacity>
        );
    }
}
export default BotaoConfirmarSelecao;
const styles = StyleSheet.create({
    BotaoConfirmarSelecao: {
        height: 56,
        width: 56,
        justifyContent: 'center',
        alignItems: 'center',
    },
    linearGradient: {
        borderRadius: 60,
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
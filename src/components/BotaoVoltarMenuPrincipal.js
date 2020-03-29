import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';

class BotaoVoltarMenuPrincipal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <TouchableOpacity onPress={this.props.click}>
                <View style={styles.botaoVoltarMenuPrincipal}>
                    <Image source={require('../images/icon/voltar-Para-Menu-principal.png')} />
                </View>
            </TouchableOpacity>
        );
    }
}
export default BotaoVoltarMenuPrincipal;
const styles = StyleSheet.create({
    botaoVoltarMenuPrincipal: {
        height: 56,
        width: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: '#FFFFFF',
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 4,
    }
});
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class BotaoAdicionadoNovoItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <View>
                
                <TouchableOpacity onPress={this.props.click}>
                    <View style={{ width: 132, height: 60, paddingBottom:0 }}>

                        <LinearGradient
                            colors={['#254DDE', '#00FFFF']}
                            style={styles.linearGradient}
                            useAngle={true}
                            angle={60}
                            angleCenter={{ x: 0.5, y: 0.5 }}
                        >
                            <View style={styles.BotaoAdicionadoNovoItem} >
                                <Text style={{ color: '#FFF' }}>Add</Text>
                            </View>
                        </LinearGradient>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
export default BotaoAdicionadoNovoItem;
const styles = StyleSheet.create({
    BotaoAdicionadoNovoItem: {
        height: 46,
        width: 132,
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
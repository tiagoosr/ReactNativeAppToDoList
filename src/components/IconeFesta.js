import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class IconeFesta extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <TouchableOpacity disabled={this.props.desabilitarTouchableOpacity} onPress={this.props.click}>
                <View>
                    <LinearGradient
                        colors={['#254DDE', '#00FFFF']}
                        style={styles.linearGradient}
                        useAngle={true}
                        angle={60}
                        angleCenter={{ x: 0.4, y: 0.60 }}
                    >
                        <View style={styles.IconeImage} >
                            <Image source={require('../images/icon/icone-festa.png')} />
                        </View>
                    </LinearGradient>
                </View>
            </TouchableOpacity>
        );
    }
}
export default IconeFesta;
const styles = StyleSheet.create({
    IconeImage: {
        height: 28,
        width: 28,
        justifyContent: 'center',
        alignItems: 'center',
    },
    linearGradient: {
        alignSelf: 'flex-start',
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

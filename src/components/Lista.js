import React from 'react';
import { View, TouchableOpacity, Text, SafeAreaView, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { Image } from 'react-native';
import styleGlobal from '../css/styleGlobal';
import axios from 'axios';
import moment from "moment";
import tarefasServices from '../services/tarefasServices';
import 'moment/locale/pt-br';
import LinearGradient from 'react-native-linear-gradient';
import BotaoAdicionadoNovoItem from '../components/BotaoAdicionadoNovoItem';
import IconeFazerCompras from '../components/iconeFazerCompras';
import IconePraticarEsporte from '../components/IconePraticarEsporte';
import IconeLocalizacao from '../components/IconeLocalizacao';
import IconeFesta from '../components/IconeFesta';
import IconeExercicioFisico from '../components/IconeExercicioFisico';
import IconeLazer from '../components/IconeLazer';
export default class Lista extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <SafeAreaView style={{ flex: 1, }}>
                {this.props.showActivityIndicator === true && <ActivityIndicator />}
                <FlatList
                    data={this.props.tarefas}
                    renderItem={({ item, index }) => {
                        return (
                            <LinhaLista
                                tarefa={item}
                                click={() => this.props.click(item, index)}
                                caixaDeSelecao={this.props.caixaDeSelecao}
                                iconeFinalizada={this.props.iconeFinalizada}
                                tarefaSelecionada={this.props.tarefaSelecionada}
                            />
                        )
                    }
                    }

                    // keyExtractor={(item, index) => item.id.toString()}

                />
            </SafeAreaView>
        );
    }

}

const LinhaLista = (props) => {
    const data = moment(props.tarefa.date).locale('pt-br').format('DD MMM');
    const hora = moment(props.tarefa.date).format('H:mm');

    return (

        <TouchableOpacity onPress={props.click}>

            < View style={styleGlobal.containerDaLista} >

                {props.iconeFinalizada != true ?
                    <View>
                        {renderIcone(props.tarefa.icone)}
                    </View>
                    :
                    <View>
                        {renderIconeFianlizada(props.tarefa.icone)}
                    </View>
                }

                <View style={{ width: 210, alignItems: 'center' }}>
                    <Text
                        numberOfLines={1}
                        ellipsizeMode={'tail'}
                        style={{ fontSize: 15 }}>
                        {props.tarefa.descricao}
                    </Text>
                </View>

                {props.caixaDeSelecao === false ?
                    <View>
                        <Text
                            style={styleGlobal.textData}>
                            {data}
                        </Text>

                        <Text
                            style={styleGlobal.textHoras}>
                            {hora}
                        </Text>
                    </View>
                    :
                    <View style={styles.botaoSelecionar}>
                        {props.tarefa.finalizada &&
                            <View>
                                <Image source={require('../images/icone-de-selecao/iconeVDeSelecao.png')} />
                            </View>
                        }
                    </View>

                }
            </View>
        </TouchableOpacity>
    )
}

const renderIcone = (idIcone) => {
    switch (idIcone) {
        case 0:
            return (
                <View>
                    <View style={{ position: 'absolute', bottom: 30, left: -5 }}>
                        <Image source={require('../images/icone-de-selecao/Elipse1.png')} />
                    </View>
                    <IconeFazerCompras desabilitarTouchableOpacity={true} />
                </View>
            );
        case 1:
            return (
                <View>
                    <View style={{ position: 'absolute', bottom: 30, left: -5 }}>
                        <Image source={require('../images/icone-de-selecao/Elipse2.png')} />
                    </View>
                    <IconePraticarEsporte desabilitarTouchableOpacity={true} />
                </View>
            );
        case 2:
            return (
                <View>
                    <View style={{ position: 'absolute', bottom: 30, left: -5 }}>
                        <Image source={require('../images/icone-de-selecao/Elipse3.png')} />
                    </View>
                    <IconeLocalizacao desabilitarTouchableOpacity={true} />
                </View>
            );
        case 3:
            return (
                <View>
                    <View style={{ position: 'absolute', bottom: 30, left: -5 }}>
                        <Image source={require('../images/icone-de-selecao/Elipse4.png')} />
                    </View>
                    <IconeFesta desabilitarTouchableOpacity={true} />
                </View>
            );
        case 4:
            return (
                <View>
                    <View style={{ position: 'absolute', bottom: 30, left: -5 }}>
                        <Image source={require('../images/icone-de-selecao/Elipse5.png')} />
                    </View>
                    <IconeExercicioFisico desabilitarTouchableOpacity={true} />
                </View>
            );
        case 5:
            return (
                <View>
                    <View style={{ position: 'absolute', bottom: 30, left: -5 }}>
                        <Image source={require('../images/icone-de-selecao/Elipse6.png')} />
                    </View>
                    <IconeLazer desabilitarTouchableOpacity={true} />
                </View>
            );
    }
}

const renderIconeFianlizada = (idIcone) => {
    switch (idIcone) {
        case 0:
            return (
                <View>
                    <View style={{ position: 'absolute', bottom: 27, left: -5 }}>
                        <Image source={require('../images/icone-de-selecao/IconeFinalizada1.png')} />
                    </View>
                    <IconeFazerCompras desabilitarTouchableOpacity={true} />
                </View>
            );
        case 1:
            return (
                <View>
                    <View style={{ position: 'absolute', bottom: 27, left: -5 }}>
                        <Image source={require('../images/icone-de-selecao/IconeFinalizada2.png')} />
                    </View>
                    <IconePraticarEsporte desabilitarTouchableOpacity={true} />
                </View>
            );
        case 2:
            return (
                <View>
                    <View style={{ position: 'absolute', bottom: 27, left: -5 }}>
                        <Image source={require('../images/icone-de-selecao/IconeFinalizada3.png')} />
                    </View>
                    <IconeLocalizacao desabilitarTouchableOpacity={true} />
                </View>
            );
        case 3:
            return (
                <View>
                    <View style={{ position: 'absolute', bottom: 27, left: -5 }}>
                        <Image source={require('../images/icone-de-selecao/IconeFinalizada4.png')} />
                    </View>
                    <IconeFesta desabilitarTouchableOpacity={true} />
                </View>
            );
        case 4:
            return (
                <View>
                    <View style={{ position: 'absolute', bottom: 27, left: -5 }}>
                        <Image source={require('../images/icone-de-selecao/IconeFinalizada5.png')} />
                    </View>
                    <IconeExercicioFisico desabilitarTouchableOpacity={true} />
                </View>
            );
        case 5:
            return (
                <View>
                    <View style={{ position: 'absolute', bottom: 27, left: -5 }}>
                        <Image source={require('../images/icone-de-selecao/IconeFinalizada6.png')} />
                    </View>
                    <IconeLazer desabilitarTouchableOpacity={true} />
                </View>
            );
    }
}
const styles = StyleSheet.create({
    ViewBotoes: {
        position: 'absolute',
        bottom: 30,
        minWidth: "100%",
        justifyContent: "space-evenly",
        alignItems: "flex-end",
        flexDirection: "row"
    },
    botaoSelecionar: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 28,
        height: 28,
        borderRadius: 7,
        shadowColor: "#95989A",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 1,
    },
});
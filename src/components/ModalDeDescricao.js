import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Button } from 'react-native';
import { ImageBackground } from 'react-native';
import styleGlobal from '../css/styleGlobal';
import BotaoConfirmarSelecao from '../components/BotaoConfirmarSelecao';
import BotaoFecharSelecao from '../components/BotaoFecharSelecao';
import Lista from '../components/Lista';
import IconeFazerCompras from '../components/iconeFazerCompras';
import IconePraticarEsporte from '../components/IconePraticarEsporte';
import IconeLocalizacao from '../components/IconeLocalizacao';
import IconeFesta from '../components/IconeFesta';
import IconeExercicioFisico from '../components/IconeExercicioFisico';
import IconeLazer from '../components/IconeLazer';
import Modal from 'react-native-modal';
import moment from "moment";
import axios from 'axios';
import tarefasServices from '../services/tarefasServices';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
const ModalDeDescricao = (props) => {

    const { showModal, tarefaSelecionada, fecharModal } = props;
    const data = moment(tarefaSelecionada.date).locale('pt-br').format('DD MMM');
    const hora = moment(tarefaSelecionada.date).format('H:mm');
    return (
        <Modal
            isVisible={showModal}
            backdropOpacity={0.5}
            animationIn={'zoomIn'}
            animationOut={'zoomOut'}
            onBackButtonPress={fecharModal}
            onBackdropPress={fecharModal}
            style={{
                backgroundColor: '#FFF',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                height: 376,
                width: 320,
                marginTop: 80,
                marginBottom: 100,
            }}
        >
            <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', padding: 20 }}>
                {/* Icones */}
                <View style={{}}>
                    {renderIcon(tarefaSelecionada.icone)}
                </View>

                <View style={{ alignItems: 'center', paddingBottom: 15 }}>
                    <View>
                        <Text numberOfLines={1} ellipsizeMode={'tail'} style={{ fontSize: 19, }}>{tarefaSelecionada.nome}</Text>
                    </View>
                    <View style={{flexDirection:'row',paddingTop:3}}>
                        <Text style={{ fontSize: 15,paddingRight:10 }}>{data}</Text>
                        <Text style={{ fontSize: 15,color:'#95989A' }}>{hora}</Text>
                    </View>
                </View>

                <View style={{ paddingTop: 10 }}>
                    <Text style={{ fontSize: 15 }} >Descrição</Text>
                </View>

                <View style={{ height: 107, width: 280, alignItems: 'center',borderColor:'#95989A'}}>
                    <ScrollView>
                        <Text style={{ fontSize: 15, color: '#95989A', textAlign: 'justify' }}>{tarefaSelecionada.descricao}</Text>
                    </ScrollView>
                </View>

                <View>
                    <TouchableOpacity onPress={fecharModal}>
                        <View style={{ width: 132, height: 46 }}>
                            <LinearGradient
                                colors={['#254DDE', '#00FFFF']}
                                style={styles.linearGradient}
                                useAngle={true}
                                angle={60}
                                angleCenter={{ x: 0.4, y: 0.60 }}
                            >
                                <View style={styles.BotaoSelecionar} >
                                    <Text style={{ fontSize: 15, color: '#FFF' }}>Fechar</Text>
                                </View>
                            </LinearGradient>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

export default ModalDeDescricao;


const renderIcon = (idIcone) => {
    switch (idIcone) {
        case 0:
            return <IconeFazerCompras desabilitarTouchableOpacity={true} />
        case 1:
            return <IconePraticarEsporte desabilitarTouchableOpacity={true} />
        case 2:
            return <IconeLocalizacao desabilitarTouchableOpacity={true} />
        case 3:
            return <IconeFesta desabilitarTouchableOpacity={true} />
        case 4:
            return <IconeExercicioFisico desabilitarTouchableOpacity={true} />
        case 5:
            return <IconeLazer desabilitarTouchableOpacity={true} />
    }
}
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
        alignItems: 'center'
    },
});

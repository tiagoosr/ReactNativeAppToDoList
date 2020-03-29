import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
import Modal from 'react-native-modal';
import BotaoAdicionadoNovoItem from '../components/BotaoAdicionadoNovoItem';
import IconeFazerCompras from '../components/iconeFazerCompras';
import IconePraticarEsporte from '../components/IconePraticarEsporte';
import IconeLocalizacao from '../components/IconeLocalizacao';
import IconeFesta from '../components/IconeFesta';
import IconeExercicioFisico from '../components/IconeExercicioFisico';
import IconeLazer from '../components/IconeLazer';
import Data from '../components/Data';
import Horas from '../components/Horas';
import LinearGradient from 'react-native-linear-gradient';

const MenuAdicionarNovaTarefa = (props) => {
    return (
        <Modal
            isVisible={props.isModalVisible}
            backdropOpacity={0.5}
            animationIn={'slideInRight'}
            animationOut={'slideOutRight'}
            animationInTiming={200}
            animationOutTiming={200}
            onBackButtonPress={props.fecharModal}
            // onBackdropPress={() => this.setState({ isModalVisible: false })}
            style={{
                backgroundColor: '#FFF',
                justifyContent: 'space-around',
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
                marginVertical: 0,
                marginRight: 0,
                bottom: 0,
                marginLeft: '18%',
                height:800,
            }}
        >


            {/* header */}
            <ScrollView scrollEnabled={true} persistentScrollbar={true} >
                <View style={styles.ViewStyle}>
                    <Text style={{ fontSize: 18 }}>NOVA TAREFA</Text>
                </View>

                {/* Menu de icone */}
                <View style={styles.ViewStyle}>
                    <View>
                        <Text style={styles.Titulo}>Icone</Text>
                    </View>

                    <View style={styles.ViewIcone}>
                        <View>
                            {props.iconeSelecionado === 0 &&
                                <View style={{ position: 'absolute', bottom: 30 }}>
                                    <Image source={require('../images/icone-de-selecao/Elipse1.png')} />
                                </View>
                            }
                            <IconeFazerCompras click={props.IconeFazerCompras} />

                        </View>

                        <View>
                            {props.iconeSelecionado === 1 &&
                                <View style={{ position: 'absolute', bottom: 30 }}>
                                    <Image source={require('../images/icone-de-selecao/Elipse2.png')} />
                                </View>
                            }
                            <IconePraticarEsporte click={props.IconePraticarEsporte} />
                        </View>
                    
                        <View>
                            {props.iconeSelecionado === 2 &&
                                <View style={{ position: 'absolute', bottom: 30 }}>
                                    <Image source={require('../images/icone-de-selecao/Elipse3.png')} />
                                </View>
                            }
                            <IconeLocalizacao click={props.IconeLocalizacao} />
                        </View>

                        <View>
                            {props.iconeSelecionado === 3 &&
                                <View style={{ position: 'absolute', bottom: 30 }}>
                                    <Image source={require('../images/icone-de-selecao/Elipse4.png')} />
                                </View>
                            }
                            <IconeFesta click={props.IconeFesta} />
                        </View>

                        <View>
                            {props.iconeSelecionado === 4 &&
                                <View style={{ position: 'absolute', bottom: 30 }}>
                                    <Image source={require('../images/icone-de-selecao/Elipse5.png')} />
                                </View>
                            }
                            <IconeExercicioFisico click={props.IconeExercicioFisico} />
                        </View>

                        <View>
                            {props.iconeSelecionado === 5 &&
                                <View style={{ position: 'absolute', bottom: 30 }}>
                                    <Image source={require('../images/icone-de-selecao/Elipse6.png')} />
                                </View>
                            }
                            <IconeLazer click={props.IconeLazer} />
                        </View>
                    </View>
                </View>

                {/* Menu de nome da tarefa*/}
                <View style={styles.ViewStyle}>
                    <View>
                        <Text style={styles.Titulo}>Nome</Text>
                    </View>
                    <View >
                        <LinearGradient
                            colors={['#254DDE', '#FE1E9A']}
                            style={styles.linearGradient}
                            useAngle={true}
                            angle={60}
                            angleCenter={{ x: 0.4, y: 0.60 }}

                        >

                            <TextInput
                                onChangeText={props.novoInputNome}
                                value={props.valueInputNome}
                                style={{ marginBottom: 1, backgroundColor: '#FFF', height: 40 }}
                            />
                        </LinearGradient>

                    </View>
                </View>

                {/* Menu da descrição da tarefa */}
                <View style={styles.ViewStyle}>
                    <View>
                        <Text style={styles.Titulo}>Descrição</Text>
                    </View>
                    <View>

                        <TextInput
                            multiline={true}
                            // maxLength = {40}
                            numberOfLines={4}
                            style={{ borderWidth: 1, textAlignVertical: 'top', marginTop: 10, borderColor: '#95989A', borderRadius: 10, height: 125,}}
                            onChangeText={props.NovaInputDescricao}
                            value={props.valueInputDescricao}

                        />

                    </View>
                </View>

                {/* Menu da data */}
                <View style={styles.ViewStyle}>
                    <View>
                        <Text style={styles.Titulo}>Data</Text>
                    </View>

                    <View style={{ backgroundColor: '#95989A', width: '100%', paddingBottom: 1 }}>
                        <Data date={props.data} atualizarData={props.atualizarData} />
                    </View>
                </View>

                {/* Menu da Hora */}
                <View style={styles.ViewStyle}>
                    <View>
                        <Text style={styles.Titulo}>Hora</Text>
                    </View>
                    <View>
                        <View style={{ backgroundColor: '#95989A', width: '100%', paddingBottom: 1 }}>
                            <Horas date={props.date} atualizarHoras={props.atualizarHoras} />
                        </View>
                    </View>
                </View>

                {/* botão para adicionar */}
                <View style={styles.ViewStyle}>
                    <BotaoAdicionadoNovoItem click={props.botaoAdicionarNovoItem} />
                </View>
            </ScrollView>

        </Modal>
    );
}

export default MenuAdicionarNovaTarefa;

const styles = StyleSheet.create({
    ViewBotoes: {
        position: 'absolute',
        bottom: 30,
        minWidth: "100%",
        justifyContent: "space-evenly",
        alignItems: "flex-end",
        flexDirection: "row",
    },
    ViewStyle: {
        // bottom: 30,
        padding: 20,
        paddingTop: 20,
    },
    botaoAdd: {
        // alignSelf: 'flex-start',
        // left: 20
    },
    Titulo: {
        color: '#95989A',
    },
    ViewIcone: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: 12
    },
    linearGradient: {
        // alignSelf: 'flex-start',
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

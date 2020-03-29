import React from 'react';
import { StyleSheet, View, Image, Text, TextInput, Picker, TouchableOpacity, } from 'react-native';
import { ImageBackground } from 'react-native';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';


import styleGlobal from '../css/styleGlobal';
import BotaoAdicionadoNovoItem from '../components/BotaoAdicionadoNovoItem';


class NovoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: true
    };
  }

  static navigationOptions = () => {
    return {
      title: 'TODO',

    }
  }

  adicionar = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
    this.props.navigation.goBack();
  }

  fecharModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
    this.props.navigation.goBack();
  }
  render() {

    return (
      <ImageBackground source={require('../images/background.png')} style={{ width: '100%', height: '100%' }}>
        <View style={styleGlobal.container} >

          <View>
            <Modal
              isVisible={this.state.isModalVisible}
              backdropOpacity={0.5}
              animationIn={'slideInRight'}
              animationOut={'slideOutRight'}
              animationInTiming={200}
              animationOutTiming={200}
              onBackButtonPress={this.fecharModal}
              onBackdropPress={() => this.setState({ isModalVisible: false })}
              style={{
                backgroundColor: '#FFF',
                justifyContent: 'space-around',
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
                marginVertical: 0,
                marginRight: 0,
                bottom: 0,
                marginLeft: '18%',
              }}
            >
              {/* <ScrollView > */}
              {/* header */}
              <View style={styles.ViewStyle}>
                <Text style={{ fontSize: 18 }}>NOVA TAREFA</Text>
              </View>

              {/* Menu de icone */}
              <View style={styles.ViewStyle}>
                <View>
                  <Text style={styles.Titulo}>Icone</Text>
                </View>

                <View style={styles.ViewIcone}>

                  <TouchableOpacity>
                    <View>
                      <LinearGradient
                        colors={['#FEA64C', '#FE1E9A']}
                        style={styles.linearGradient}
                        useAngle={true}
                        angle={60}
                        angleCenter={{ x: 0.4, y: 0.60 }}
                      >
                        <View style={styles.IconeImage} >
                          <Image source={require('../images/icon/icone-fazer-compra.png')} />
                        </View>
                      </LinearGradient>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <View>
                      <LinearGradient
                        colors={['#FE1E9A', '#254DDE']}
                        style={styles.linearGradient}
                        useAngle={true}
                        angle={60}
                        angleCenter={{ x: 0.4, y: 0.60 }}
                      >
                        <View style={styles.IconeImage} >
                          <Image source={require('../images/icon/icone-praticar-esporte.png')} />
                        </View>
                      </LinearGradient>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <View>
                      <LinearGradient
                        colors={['#254DDE', '#181743']}
                        style={styles.linearGradient}
                        useAngle={true}
                        angle={60}
                        angleCenter={{ x: 0.4, y: 0.60 }}
                      >
                        <View style={styles.IconeImage} >
                          <Image source={require('../images/icon/icone-localizacao.png')} />
                        </View>
                      </LinearGradient>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity>
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

                  <TouchableOpacity>
                    <View>
                      <LinearGradient
                        colors={['#FE1E9A', '#254DDE']}
                        style={styles.linearGradient}
                        useAngle={true}
                        angle={60}
                        angleCenter={{ x: 0.4, y: 0.60 }}
                      >
                        <View style={styles.IconeImage} >
                          <Image source={require('../images/icon/icone-exercicio.png')} />
                        </View>
                      </LinearGradient>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <View>
                      <LinearGradient
                        colors={['#181743', '#88889F']}
                        style={styles.linearGradient}
                        useAngle={true}
                        angle={60}
                        angleCenter={{ x: 0.4, y: 0.60 }}
                      >
                        <View style={styles.IconeImage} >
                          <Image source={require('../images/icon/icone-lazer.png')} />
                        </View>
                      </LinearGradient>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Menu de nome da tarefa*/}
              <View style={styles.ViewStyle}>
                <View>
                  <Text style={styles.Titulo}>Nome</Text>
                </View>
                <View>
                  <TextInput
                    style={{ borderBottomColor: 'red', borderBottomWidth: 1 }}
                  />
                </View>
              </View>

              {/* Menu da descrição da tarefa */}
              <View style={styles.ViewStyle}>
                <View>
                  <Text style={styles.Titulo}>Descrição</Text>
                </View>
                <View>
                  <TextInput
                    style={{ borderWidth: 1 }}
                  />
                </View>
              </View>

              {/* Menu da data */}
              <View style={styles.ViewStyle}>
                <View>
                  <Text style={styles.Titulo}>Data</Text>
                </View>
                <View>
                  <Picker
                    selectedValue={this.state.language}
                    style={{ height: 50 }}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({ language: itemValue })
                    }>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                  </Picker>
                </View>
              </View>

              {/* Menu da Hora */}
              <View style={styles.ViewStyle}>
                <View>
                  <Text style={styles.Titulo}>Hora</Text>
                </View>
                <View>
                  <Picker
                    selectedValue={this.state.language}
                    style={{ height: 50 }}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({ language: itemValue })
                    }>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                  </Picker>
                </View>
              </View>

              {/* botão para adicionar */}
              <View style={styles.botaoAdd}>
                <BotaoAdicionadoNovoItem click={this.adicionar} />
              </View>
              {/* </ScrollView> */}
            </Modal>
          </View>

        </View>
      </ImageBackground>
    );
  }
}
export default NovoItem;
const styles = StyleSheet.create({
  ViewStyle: {
    // bottom: 30,
    padding: 20,
  },
  botaoAdd: {
    alignSelf: 'flex-start',
    left: 20
  },
  Titulo: {
    color: 'red',

  },
  ViewIcone: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 12
  },
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
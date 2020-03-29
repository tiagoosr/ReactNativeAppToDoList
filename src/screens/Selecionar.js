import React from 'react';
import { StyleSheet, View, } from 'react-native';
import { ImageBackground } from 'react-native';


import styleGlobal from '../css/styleGlobal';
import BotaoConfirmarSelecao from '../components/BotaoConfirmarSelecao';
import BotaoFecharSelecao from '../components/BotaoFecharSelecao';
import Lista from '../components/Lista';
import tarefasServices from '../services/tarefasServices';
import axios from 'axios';


class Selecionar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefasNãoFinalizadas: [] = this.props.navigation.getParam('tarefasNãoFinalizadas', 'Lista Vazia'),
      tarefaSelecionada: [],
      caixaMarcada: false
    };
    this.finalizarTarefa = this.finalizarTarefa.bind(this);
  }
  static navigationOptions = () => {
    return {
      title: 'Lista de Tarefas',
    }
  }
  fecharItem = () => {
    this.props.navigation.navigate('ListMode');
  }
  selecionarTarefa = (tarefa, index) => {
    const tarefas = this.state.tarefasNãoFinalizadas;
    tarefas[index].finalizada = !tarefas[index].finalizada;
    this.setState({
      tarefasNãoFinalizadas: tarefas
    });
  }

  finalizarTarefa = () => {
    for (let i = 0; i < this.state.tarefasNãoFinalizadas.length; i++) {
      if (this.state.tarefasNãoFinalizadas[i].finalizada === true) {
        const _id = this.state.tarefasNãoFinalizadas[i]._id
        tarefasServices.atualizarTarefas(_id, {
          _id: this.state.tarefasNãoFinalizadas[i]._id,
          finalizada: this.state.tarefasNãoFinalizadas[i].finalizada,
          nome: this.state.tarefasNãoFinalizadas[i].nome,
          descricao: this.state.tarefasNãoFinalizadas[i].descricao,
          date: this.state.tarefasNãoFinalizadas[i].date,
          icone: this.state.tarefasNãoFinalizadas[i].icone
        })
          .then(response => {
            console.log("tarefas ", response)
            this.props.navigation.navigate('ListMode');
          })
          .catch(error => {
            console.log("Erro ao alterar lista ", error)
          });
      }
    }

  }

  render() {

    return (
      <ImageBackground source={require('../images/background.png')} style={{ width: '100%', height: '100%' }}>
        <View style={styleGlobal.container} >

          <View style={{ paddingTop: 80 }}>
            <Lista
              tarefas={this.state.tarefasNãoFinalizadas}
              click={this.selecionarTarefa}
            />
          </View>

          <View style={styles.ViewBotoes}>
            <BotaoFecharSelecao click={this.fecharItem} />
            <BotaoConfirmarSelecao click={this.finalizarTarefa} />
          </View>

        </View>
      </ImageBackground>
    );
  }
}
export default Selecionar;
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
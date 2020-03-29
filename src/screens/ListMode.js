import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import styleGlobal from '../css/styleGlobal';
import { ImageBackground } from 'react-native';
import BotaoSelecionar from '../components/BotaoSelecionar';
import BotaoCalendario from '../components/BotaoCalendario';
import BotaoAdiconar from '../components/BotaoAdiconar';
import MenuAdicionarNovaTarefa from '../components/MenuAdicionarNovaTarefa';
import Lista from '../components/Lista';
import moment from "moment";
import tarefasServices from '../services/tarefasServices';
import { NavigationEvents } from 'react-navigation';
import ModalDeDescricao from '../components/ModalDeDescricao';
class ListMode extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tarefas: [],
      tarefasFinalizadas: [],
      tarefasNãoFinalizadas: [],
      isModalVisible: false,
      iconeSelecionado: 0,
      nome: '',
      descricao: '',
      date: new Date(),
      hour: new Date(),
      caixaDeSelecao: false,
      showActivityIndicator:false,

      showModalDescricao: false,
      tarefaSelecionada: {},
    };
    this.adicionar = this.adicionar.bind(this);
    this.fecharModal = this.fecharModal.bind(this);
    this.dataAtualizada = this.dataAtualizada.bind(this);
    this.horasAtualizada = this.horasAtualizada.bind(this);
    this.abrirModalDeDescrição = this.abrirModalDeDescrição.bind(this);
  }
  static navigationOptions = () => {
    return {
      title: 'Lista de Tarefas',
    }
  }
  componentWillMount() { 
    this.getListaDeTarefas();

  }

  tarefasNaoFinalizadas = () => {
    const naoEstaFinalizada = (tarefa) => {
      return tarefa.finalizada === false
    }
    let tarefasNaoFinalizadas = this.state.tarefas.filter(naoEstaFinalizada);
    this.setState({ tarefasNaoFinalizadas: this.state.tarefasNãoFinalizadas = tarefasNaoFinalizadas })
    this.props.setTarefasNaoFinalizadas(this.state.tarefasNãoFinalizadas);

  }

  tarefasFinalizadas = () => {
    const estaFinalizada = (tarefa) => {
      return tarefa.finalizada === true
    }
    let tarefasFinalizadas = this.state.tarefas.filter(estaFinalizada);
    this.setState({ tarefasFinalizadas: this.state.tarefasFinalizadas = tarefasFinalizadas })
    this.props.setTarefasFinalizadas(this.state.tarefasFinalizadas);
  }

  getListaDeTarefas = () => {
    this.setState({showActivityIndicator:true})
    tarefasServices.getTarefa()
      .then(response => {
        console.log("tarefas:", response);
        this.setState({ tarefas: response.data.tarefas })
        this.setState({showActivityIndicator:false})
        this.tarefasNaoFinalizadas();
        this.tarefasFinalizadas();
      })
      .catch(error => {
        console.log('Não foi possível buscar as tarefas:', error);
      });

  }
  goSelecionar = () => {
    // debugger;
    this.props.navigation.navigate('Selecionar', {
      pegarTarefas: this.state.tarefas,
      tarefasNãoFinalizadas: this.state.tarefasNãoFinalizadas,
      
    });
    // console.log("Fins", this.state.tarefas)
    // console.log("Fin", this.state.tarefasNãoFinalizadas)

  }
  goCalendario = () => {
    const data = moment(this.state.tarefasNãoFinalizadas.date).locale('pt-br').format('MMM YYYY');
    this.props.navigation.navigate('Calendario',{
      pegardata:data
    });
 
  }

  abriModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }

  abrirModalDeDescrição = (tarefaSelecionada) => {
    this.setState({
      tarefaSelecionada: tarefaSelecionada,
      showModalDescricao: true,
    });
  }

  resetarFormulario = () => {
    this.setState({
      iconeSelecionado: 0,
      nome: '',
      descricao: '',
      date: new Date(),
      hour: new Date(),
    })
  }

  adicionar = () => {
    let date = this.state.date;
    let hora = this.state.hour;
    const dataEhora = new Date(date.getFullYear(), date.getMonth(), date.getDate(), hora.getHours(), hora.getMinutes())
    tarefasServices.cadastrarTarefas({
      nome: this.state.nome,
      descricao: this.state.descricao,
      date: moment(dataEhora).format(),
      icone: this.state.iconeSelecionado,
    })
      .then(response => {
        console.log("Post tarefa", response);
        this.setState({
          tarefas: [response.data.tarefas, ...this.state.tarefas],
          isModalVisible: !this.state.isModalVisible
        })
        this.tarefasNaoFinalizadas();
        this.tarefasFinalizadas();
        this.resetarFormulario();
      })
      .catch(error => {
        console.error(error);
      });
  };

  NovoTextoNome = (text) => {
    this.setState({ nome: text });
  }
  NovaDescricao = (text) => {
    this.setState({ descricao: text });
  }

  dataAtualizada = (data) => {
    this.setState({ date: data });
  }

  horasAtualizada = (hora) => {
    this.setState({ hour: hora });
  }
  selecionarIcone = (codigo) => {
    this.setState({ iconeSelecionado: codigo })
  }

  fecharModal = () => {
    this.setState({
      showModalDescricao: false
    })
  }
  fecharModalAdicionarNovoItem = () => {
    this.setState({
      isModalVisible: false
    });
  }
  render() {
    return (

      <ImageBackground source={require('../images/background.png')} style={{ width: '100%', height: '100%' }}>

        {/* dar um reload na tela */}
        <NavigationEvents
          onDidFocus={() =>
            this.getListaDeTarefas()
          }
        />

        <ModalDeDescricao
          tarefaSelecionada={this.state.tarefaSelecionada}
          showModal={this.state.showModalDescricao}
          fecharModal={this.fecharModal}
        />

        <View style={styleGlobal.container} >
          <View style={{ paddingTop: 80 }}>
            <Lista
              tarefas={this.props.tarefasNaoFinalizadas}//está pegando o valor do mapStateToProps
              click={this.abrirModalDeDescrição}
              caixaDeSelecao={this.state.caixaDeSelecao}
              showActivityIndicator={this.state.showActivityIndicator}
            />
          </View>

          {this.state.isModalVisible != true &&
            <View style={styles.ViewBotoes} >
              <BotaoSelecionar click={this.goSelecionar} />
              <BotaoCalendario click={this.goCalendario} />
              <BotaoAdiconar click={this.abriModal} />
            </View>
          }
          <View>
            <MenuAdicionarNovaTarefa
              isModalVisible={this.state.isModalVisible}
              fecharModal={this.fecharModalAdicionarNovoItem}

              IconeFazerCompras={() => this.selecionarIcone(0)}
              IconePraticarEsporte={() => this.selecionarIcone(1)}
              IconeLocalizacao={() => this.selecionarIcone(2)}
              IconeFesta={() => this.selecionarIcone(3)}
              IconeExercicioFisico={() => this.selecionarIcone(4)}
              IconeLazer={() => this.selecionarIcone(5)}

              iconeSelecionado={this.state.iconeSelecionado}

              //input nome
              novoInputNome={this.NovoTextoNome}
              valueInputNome={this.state.nome}


              //input descrição
              NovaInputDescricao={this.NovaDescricao}
              valueInputDescricao={this.state.descricao}

              //data
              data={this.state.date}
              atualizarData={this.dataAtualizada}

              //hora
              date={this.state.hour}
              atualizarHoras={this.horasAtualizada}

              //botao
              botaoAdicionarNovoItem={this.adicionar}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

//função para ter acesso ao state do reducers
// essa função vai transformar meu state para props
const mapStateToProps = (state) => {
  return {
    tarefasNaoFinalizadas: state.listaReducer.tarefasNaoFinalizadas
  }
}
//função para mudar o valor da state do reducers
// essa função vai pegar o valor e vai despachar(dispath) vai o state do reducer
const mapDispathToProps = (dispath) => {
  return {

    setTarefasNaoFinalizadas: (tarefasNaoFinalizadas) => {
      dispath({ type: 'NAO_FINALIZADA', payload: { tarefasNaoFinalizadas } })
    },

    setTarefasFinalizadas: (tarefasFinalizadas) => {
      dispath({ type: 'ESTA_FINALIZADA', payload: { tarefasFinalizadas } })
    }

  }

}

export default connect(mapStateToProps, mapDispathToProps)(ListMode);
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
    paddingTop: 20
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

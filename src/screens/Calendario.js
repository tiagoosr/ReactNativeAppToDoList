import React from 'react';
import { connect } from 'react-redux';
import { Dimensions } from 'react-native';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-snap-carousel';
import styleGlobal from '../css/styleGlobal';
import { ImageBackground } from 'react-native';
import BotaoSelecionar from '../components/BotaoSelecionar';
import BotaoAdiconar from '../components/BotaoAdiconar';
import BotaoVoltarMenuPrincipal from '../components/BotaoVoltarMenuPrincipal';
import MenuAdicionarNovaTarefa from '../components/MenuAdicionarNovaTarefa';
import Lista from '../components/Lista';
import moment from "moment";
import tarefasServices from '../services/tarefasServices';
import { NavigationEvents } from 'react-navigation';
import ModalDeDescricao from '../components/ModalDeDescricao';
import { TouchableOpacity } from 'react-native-gesture-handler';
const larguratela = Dimensions.get('window').width;
class Calendario extends React.Component {
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
      positionIndexData: 0,
      showModalDescricao: false,
      tarefaSelecionada: {},

      itemSelecionado: {}

    };

    this.adicionar = this.adicionar.bind(this);
    this.fecharModal = this.fecharModal.bind(this);
    this.dataAtualizada = this.dataAtualizada.bind(this);
    this.horasAtualizada = this.horasAtualizada.bind(this);
    this.abrirModalDeDescrição = this.abrirModalDeDescrição.bind(this);
    this.dividirLista = this.dividirLista.bind(this);
  }

  static navigationOptions = ({ navigation }) => {

    return {
      title: navigation.getParam('pegardata', 'A Nested Details Screen'),
    }
  }
  //   moment(dataEhora).format()
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
    tarefasServices.getTarefa()
      .then(response => {
        console.log("tarefas:", response.data.tarefas);
        this.setState({ tarefas: response.data.tarefas })
        this.tarefasNaoFinalizadas();
        this.tarefasFinalizadas();
      })
      .catch(error => {
        console.log('Não foi possível buscar as tarefas:', error);
      });

  }
  goSelecionar = () => {
    this.props.navigation.navigate('Selecionar', {
      pegarTarefas: this.state.tarefas,
      tarefasNãoFinalizadas: this.state.tarefasNãoFinalizadas,
    });

  }
  goBotaoVoltarMenuPrincipal = () => {
    this.props.navigation.goBack();
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
    tarefasServices.getTarefa({
      nome: this.state.nome,
      descricao: this.state.descricao,
      date: moment(dataEhora).format(),
      icone: this.state.iconeSelecionado,
    })
      .then(response => {
        console.log("Post tarefa", response.data.tarefas);
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

  dividirLista = (lista) => {
    console.log("listas", lista)
    const posicao = lista.viewableItems.length / 2;
    const meio = lista.viewableItems[Math.round(posicao-1)]
    console.log('meio', meio)
    console.log('meio', meio.item)
    this.setState({ itemSelecionado: meio.item });
    console.log("teste",this.state.itemSelecionado)
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

          <View style={{ width: '100%', height: 52, backgroundColor: '#FFF', position: 'absolute', top: 95, alignItems: 'center' }}>
            <ItemSelecionado 
              tarefa={this.state.itemSelecionado}
              tarefasPorData={this.tarefasPorData}
            />
            <Carousel
              // viewabilityConfig={{viewAreaCoveragePercentThreshold:0}}

              onViewableItemsChanged={this.dividirLista}

              // horizontal={true}
              data={this.props.tarefasNaoFinalizadas}
              renderItem={({ item, index }) => {
                return <Item 
                  tarefa={item}
                  tarefasPorData={this.tarefasPorData}
                />
              }}
              sliderWidth={larguratela}
              itemWidth={60}
              loop={true}
              loopClonesPerSide={5}
            // keyExtractor={(item, index) => item.id.toString()}

            />
          </View>
          <View style={{ paddingTop: 162 }}>
            <Lista
              tarefas={this.props.tarefasNaoFinalizadas}//está pegando o valor do mapStateToProps
              click={this.abrirModalDeDescrição}
              caixaDeSelecao={this.state.caixaDeSelecao}
            />
          </View>

          {this.state.isModalVisible != true &&
            <View style={styles.ViewBotoes} >
              <BotaoSelecionar click={this.goSelecionar} />
              <BotaoVoltarMenuPrincipal click={this.goBotaoVoltarMenuPrincipal} />
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

const Item = (props) => {
  const data = moment(props.tarefa.date).locale('pt-br').format('DD');
  const semana = moment(props.tarefa.date).format('ddd');

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', paddingRight: 16, paddingLeft: 12, }}>
      <Text style={{ fontSize: 21, }}>{data}</Text>
      <Text style={{ fontSize: 15, }}>{semana}</Text>
    </View>
  )
}
const ItemSelecionado = (props) => {
  const data = moment(props.tarefa.date).locale('pt-br').format('DD');
  const semana = moment(props.tarefa.date).format('ddd');
  return (
    <LinearGradient
      colors={['#254DDE', '#00FFFF']}
      style={{ position: 'absolute', zIndex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue', height: 60, width: 60, top: -4, borderRadius: 5 }}
      useAngle={true}
      angle={45}
      angleCenter={{ x: 0.5, y: 0.5 }}
    >
      <View >
        <Text style={{ fontSize: 21, color: '#FFF' }}>{data}</Text>
        <Text style={{ fontSize: 15, color: '#FFF' }}>{semana}</Text>
      </View>
    </LinearGradient>
  )
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

export default connect(mapStateToProps, mapDispathToProps)(Calendario);
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

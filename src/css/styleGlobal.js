
import { StyleSheet } from 'react-native';

const styleGlobal = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    // backgroundColor: 'red',

  },
  containerDaLista: {
    margin: 16,
    backgroundColor: 'white',
    height: 52,
    width: 320,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    shadowColor: '#707070',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.2,
    elevation: 4,
  },
  textData: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  textHoras: {
    fontSize: 12,
    marginLeft: 10
  }
});

export default styleGlobal;
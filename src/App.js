import React from 'react';
import {View, StyleSheet} from 'react-native';
import Botao from './components/Botao';
import Contador from './components/Contador';
// import Primeiro from './components/Primeiro';
// import Comp, {Comp1, Comp2} from './components/Multi';
// import MinMax from './components/MinMax';
// import Titulo from './components/Titulo';

/*function App() {
  return <Text>Primeiro Componente !!!</Text>;
}
export default App;*/

export default () => {
  return (
    <View style={style.App}>
      <Contador inicial={100} />
    </View>
  );
};

const style = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

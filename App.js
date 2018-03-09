import React, { Component } from 'react';
import firebase from 'firebase';
import {
  View,
  Text,
  Button
} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { pontuacao: 0 }
  }

  componentWillMount() {

    var config = {
      apiKey: "AIzaSyA7a1BxvVJFh-AmgziWQcJZDF8XE0kk-bI",
      authDomain: "configuracaofirebasereac-2cc65.firebaseapp.com",
      databaseURL: "https://configuracaofirebasereac-2cc65.firebaseio.com",
      projectId: "configuracaofirebasereac-2cc65",
      storageBucket: "configuracaofirebasereac-2cc65.appspot.com",
      messagingSenderId: "455916078008"
    };
    firebase.initializeApp(config);

  }

  salvaDados() {
    // let funcionarios = firebase.database().ref("funcionarios");

    // funcionarios.push().set({
    //   nome: "Jamilton Damasceno",
    //   pontuacao: "200"
    // });

  }

  listaDados() {

    let pontuacao = firebase.database().ref("pontuacao");
    pontuacao.on('value', (snapshot) => {
      var pontos = snapshot.val();
      this.setState({ pontuacao: pontos });
    });


  }

  render() {

    let { pontuacao } = this.state;

    return (

      <View style={{ flex: 1 }}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

          <Button
            title="Salvar Dados"
            onPress={
              () => { this.salvaDados(); }}
            color='#841584'
            accessibilityLabel="Salvar Dados"
          />

          <Button
            title="Listar Dados"
            onPress={
              () => { this.listaDados(); }}
            accessibilityLabel="Listar Dados"
          />

          <Text> {pontuacao} </Text>

        </View>

      </View>
    );
  }
}

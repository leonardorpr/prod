import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { onSignIn } from '../../../core/service/auth.service';
import * as firebase from 'firebase';

import style from './style';
import Input from '../../template/input';
import Button from '../../template/button';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      register: {
        name: '',
        email: '',
        password: ''
      }
    }
  }

  createUser = async (email, password) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      const userID = firebase.auth().currentUser.uid;
      onSignIn(userID);
      this.props.navigation.navigate('Home');
    } catch (e) {
      this.setState({ message: 'Oops! Algo deu errado, verifique seus dados.' });
    }
  }

  onInputChange = (field, value) => this.setState((prevState) => ({ register:{ ...prevState.register, [field]: value } }));

  render() {
    const { register, message } = this.state;
    const { name, email, password } = register;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={style.container}>
          <View style={style.form}>
            <Image
              style={style.logo}
              source={require('../../../utils/brands/logo-login.png')}
            />
            <Input
              placeholder='Nome'
              value={name}
              onChange={value => this.onInputChange('name', value)}
            />
            <Input
              placeholder='E-mail'
              value={email}
              onChange={value => this.onInputChange('email', value)}
            />
            <Input
              placeholder='Senha'
              secureTextEntry={true}
              value={password}
              onChange={value => this.onInputChange('password', value)}
            />
            <Button
              text='Cadastrar'
              submit={() => this.createUser(email, password)}
            />
            <Text style={style.message}>{message}</Text>
            <KeyboardSpacer/>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default Register;

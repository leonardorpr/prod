import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, Image, Text } from 'react-native';
import { onSignIn } from '../../../core/service/auth.service';
import * as firebase from 'firebase';

import style from './style';
import Input from '../../template/input';
import Button from '../../template/button';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      email: '',
      password: ''
    }
  }

  login = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      const userID = firebase.auth().currentUser.uid;
      onSignIn(userID);
      this.props.navigation.navigate('Home');
    } catch (e) {
      this.setState({ message: 'Oops! Algo deu errado, verifique seus dados.' });
    }
  }

  onInputChange = (field, value) => this.setState({ [field]: value });

  render() {
    const { email, password, message } = this.state;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={style.container}>
          <View style={style.data}>
            <Image
              style={style.logo}
              source={require('../../../utils/brands/logo-login.png')}
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
            <Text style={style.message}>{message}</Text>
            <Button
              text='Entrar'
              submit={() => this.login(email, password)}
            />
            <Button
              text='Quero me cadastar!'
              styles={style.socialButtons}
              submit={() => this.props.navigation.navigate('Register')}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default Login;

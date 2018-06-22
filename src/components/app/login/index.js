import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
import { connect } from 'react-redux';

import style from './style';
import Input from '../../template/input';
import Button from '../../template/button';
import SocialButton from '../../template/social-button';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      password: ''
    }
  }

  onInputChange = (field, value) => this.setState({ [field]: value });

  render() {
    const { user, password } = this.state;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={style.container}>
          <View style={style.data}>
            <Image
              style={style.logo}
              source={require('../../../utils/brands/logo-login.png')}
            />
            <Input
              placeholder='Usuário'
              value={user}
              onChange={value => this.onInputChange('user', value)}
            />
            <Input
              placeholder='Senha'
              secureTextEntry={true}
              value={password}
              onChange={value => this.onInputChange('password', value)}
            />
            <Button
              text='Entrar'
              //submit={}
            />
            <SocialButton
              title='Entrar com o Facebook'
              type='facebook'
              //onPress={}
            />
            <SocialButton
              title='Entrar com o Twitter'
              type='twitter'
              //onPress={}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default Login;

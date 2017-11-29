import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { FormLabel, FormInput, Button, Header } from 'react-native-elements';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, confirmPasswordChanged, createUser } from '../actions';

class NewUserLogin extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text){
    this.props.passwordChanged(text);
  }

  onConfirmPassWordChange(text){
    this.props.confirmPasswordChanged(text);
  }

  onButtonPress() {
    const { email, password, confirmPassword } = this.props;

    if(password === confirmPassword && email) {
      this.props.createUser(email, password)
      let nav = this.props.navigation
      nav.navigate('newUserForm')
    } else {
      console.log('bum bum buuuuuum')
    }
  }

  render () {

    const { headerStyle, continueButtonStyle } = styles;
    console.log('new user login props', this.props)

    return (
      <View>

        <FormLabel>Email</FormLabel>
        <FormInput
          placeholder="Please enter your email"
          onChangeText={this.onEmailChange.bind(this)}
          />

        <FormLabel>Password</FormLabel>
          <FormInput
            secureTextEntry
            placeholder="Please enter a password"
            onChangeText={this.onPasswordChange.bind(this)}
            />

          <FormLabel>Confirm password</FormLabel>
          <FormInput
            secureTextEntry
            placeholder="Please confirm your password"
            onChangeText={this.onConfirmPassWordChange.bind(this)}
            />


          <View style={continueButtonStyle}>
            <Button
              raised
              backgroundColor="#1994FB"
              title='Create Account'
              onPress={this.onButtonPress.bind(this)}
            />
          </View>
      </View>
    )
  }
}

const styles = {
  headerStyle : {
    color: '#fff',
    fontSize: 20
  },
  continueButtonStyle: {
    marginTop: 20,
    marginBottom: 100
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, confirmPassword, user } = auth;

  return { email, password, confirmPassword, user }
}

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  confirmPasswordChanged,
  createUser
}) (NewUserLogin);

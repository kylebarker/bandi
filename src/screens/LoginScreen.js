import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import Card from '../components/common/Card';
import CardSection from '../components/common/CardSection';
import Input from '../components/common/Input';
import { emailChanged, passwordChanged } from '../actions';
import { StackNavigator } from 'react-navigation';


class LoginScreen extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text){
    this.props.passwordChanged(text);
  }

  onLoginButtonPress(){
    this.props.navigation.navigate('main')
    console.log('login props buton', this.props)
  }


  render(){
    console.disableYellowBox = true;

    const { titleTextStyle, sloganTextStyle, titleViewStyle, loginButtonView, signupButtonView } = styles;

    return (
      <View>
        <View style={titleViewStyle}>
          <Text style={titleTextStyle}>BANDI</Text>
        </View>

        <View style={{alignItems:'center'}}>
          <Text style={sloganTextStyle}>Let's make some music</Text>
        </View>

        <FormLabel>Email</FormLabel>
        <FormInput
          placeholder="Please enter your email"
          onChangeText={this.onEmailChange.bind(this)}
        />

        <FormLabel>Password</FormLabel>
        <FormInput
          placeholder="Please enter your password"
          onChangeText={this.onPasswordChange.bind(this)}
        />

        <View style={loginButtonView}>
          <Button
            raised
            backgroundColor="#44BBA4"
            title='Log in'
            onPress={() => this.onLoginButtonPress()}
          />
        </View>

        <View style={signupButtonView}>
          <Button
            raised
            backgroundColor="#44BBA4"
            title='Not a user? Click here to sign up'
            onPress={() => this.props.navigation.navigate('newUserLogin')}
          />
        </View>

      </View>
    )
  }
}

const styles = {
  titleTextStyle: {
    color: '#393E41',
    alignItems: 'center',
    fontSize: 90,
    fontFamily: 'MarkerFelt-Wide',
  },
  sloganTextStyle: {
    color: '#393E41',
    fontSize: 20
  },

  titleViewStyle: {
    marginTop: 50,
    alignItems: 'center',
  },
  loginButtonView: {
    marginTop: 25
  },

  signupButtonView: {
    marginTop: 125,
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password } = auth;

  return { email, password }
}

export default connect(mapStateToProps, {emailChanged, passwordChanged})(LoginScreen);

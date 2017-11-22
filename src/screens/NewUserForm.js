import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { FormLabel, FormInput, Button, Header } from 'react-native-elements';
import { connect } from 'react-redux';
import { firstNameChanged, ageChanged, cityChanged, zipCodeChanged, descriptionChanged, influencesChanged, getNewUser, fetchUserGenres, fetchGenres, fetchInstruments, updateUser } from '../actions';


class NewUserForm extends Component {

  componentDidMount() {
    console.log('new user form props did mount', this.props)
    console.log('trying to find id', this.props.users.auth)
    this.props.fetchGenres()
    this.props.fetchInstruments()



  }




  onFirstNameChange(text) {
    this.props.firstNameChanged(text);
  }

  onAgeChange(text) {
    this.props.ageChanged(text);
  }

  onCityChange(text) {
    this.props.cityChanged(text);
  }

  onZipCodeChange(text){
    this.props.zipCodeChanged(text);
  }

  onDescriptionChange(text){
    this.props.descriptionChanged(text);
  }

  onInfluencesChange(text){
    this.props.influencesChanged(text);
  }

  onInstrumentButtonPress(){
    this.props.navigation.navigate('instruments')

  }

  onGenreButtonPress(){
    this.props.navigation.navigate('genres')
  }

  onContinueButtonPress(){
    const userid = this.props.users.auth.user;
    const firstName = this.props.users.users.firstName;
    const age = this.props.users.users.age;
    const city = this.props.users.users.city;
    const zipCode = this.props.users.users.zipCode;
    const description = this.props.users.users.description;
    const influences = this.props.users.users.influences;

    this.props.updateUser(userid, firstName, age, city, zipCode, description, influences)

    this.props.navigation.navigate('login')
  }

  render () {

    const { textStyle, continueButtonStyle } = styles;

    console.log('new user form props', this.props)



    return (
      <View>
        <ScrollView>
          {console.log(this.props)}
          <FormLabel>First Name</FormLabel>
          <FormInput
            placeholder="Please enter your first name"
            onChangeText={this.onFirstNameChange.bind(this)}
            defaultValue={this.props.firstName}
            />

          <FormLabel>Age</FormLabel>
          <FormInput
            placeholder="Please enter your age"
            onChangeText={this.onAgeChange.bind(this)}
            defaultValue={this.props.age}
            />

          <FormLabel>City</FormLabel>
          <FormInput
            placeholder="Please enter your city"
            onChangeText={this.onCityChange.bind(this)}
            defaultValue={this.props.city}
            />

          <FormLabel>Zip Code</FormLabel>
          <FormInput
            placeholder="Please enter your zip code"
            onChangeText={this.onZipCodeChange.bind(this)}
            defaultValue={this.props.zipCode}

            />

          <FormLabel>Description</FormLabel>
          <FormInput
            placeholder="Tell users about yourself and your search"
            onChangeText={this.onDescriptionChange.bind(this)}
            defaultValue={this.props.description}
            />

          <FormLabel>Influences</FormLabel>
          <FormInput
            placeholder="Please enter your influeces"
            onChangeText={this.onInfluencesChange.bind(this)}
            defaultValue={this.props.influences}
            />


          <FormLabel>Instruments you play</FormLabel>
          <Text style={textStyle}>This is where the instrument selections will be</Text>
          <Button
            raised
            backgroundColor="#44BBA4"
            title='Select the instruments you play'
            onPress={() => this.onInstrumentButtonPress()}
          />

          <FormLabel>Favorite genres of music</FormLabel>
          <Text style={textStyle}>This is where the genre selections will be</Text>
          <Button
            raised
            backgroundColor="#44BBA4"
            title='Select your favorite genres'
            onPress={() => this.onGenreButtonPress()}

          />

          <View style={continueButtonStyle}>
            <Button
              raised
              backgroundColor="#44BBA4"
              title='Now go log in when finished'
              onPress={() => this.onContinueButtonPress()}
            />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = {
  textStyle: {
    marginTop: 10,
    paddingLeft: 20,
    color: '#393E41',
    marginBottom: 10
  },
  continueButtonStyle: {
    marginTop: 40,
    marginBottom: 20
  }
}

const mapStateToProps = state => {



  return { genres: state, users:state, instruments: state }

}


export default connect(mapStateToProps, {
  firstNameChanged,
  ageChanged,
  cityChanged,
  zipCodeChanged,
  descriptionChanged,
  influencesChanged,
  getNewUser,
  fetchUserGenres,
  fetchGenres,
  fetchInstruments,
  updateUser
}) (NewUserForm);

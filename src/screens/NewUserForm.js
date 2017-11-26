import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { FormLabel, FormInput, Button, Header } from 'react-native-elements';
import { connect } from 'react-redux';
import { firstNameChanged, ageChanged, cityChanged, zipCodeChanged, descriptionChanged, influencesChanged, fetchGenres, fetchInstruments, updateUser, getUser, getUserInstruments, getUserGenres } from '../actions';


class NewUserForm extends Component {

  componentDidMount() {
    console.log('cdm props', this.props)
    this.props.fetchGenres()
    this.props.fetchInstruments()
    this.props.getUser(this.props.users.auth.email)

    if(this.props.users.auth){
      this.props.getUserInstruments(this.props.users.auth.user)
      // this.props.getUserGenres(this.props.users.auth.user)
    }
  }

  componentDidUpdate(prevProps, prevState){
    this.props.getUser(this.props.users.auth.email)

    console.log('prev props', prevProps)
    console.log('cdu props', this.props)
    if(prevProps.instruments.instruments.userInstruments === this.props.instruments.instruments.userInstruments){
      this.props.getUserInstruments(this.props.users.auth.user)
    }

    // if(prevProps.genres.genres.userGenres === this.props.genres.genres.userGenres){
    //   this.props.getUserGenres(this.props.users.auth.user)
    // }
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

  renderInstrumentStr(){
    let userInstruments = this.props.instruments.instruments.userInstruments
    if(userInstruments[0]){
      return userInstruments.map(instrument => {
        return(
          <View key={instrument.id} style={{paddingLeft: 20, marginTop:5, marginBottom: 5}}>
            <Text>{instrument.instrument}</Text>
          </View>
        )
      })
    }
  }

  // renderGenreStr(){
  //   let userGenres = this.props.genres.genres.userGenres
  //   if(userGenres[0]){
  //     return userGenres.map(genre => {
  //       return(
  //         <View key={genre.id} style={{paddingLeft: 20, marginTop:5, marginBottom: 5}}>
  //           <Text>{genre.genre}</Text>
  //         </View>
  //       )
  //     })
  //   }
  // }

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
          {this.renderInstrumentStr()}
          <View style={{marginTop: 5}}>
            <Button
              raised
              backgroundColor="#44BBA4"
              title='Select the instruments you play'
              onPress={() => this.onInstrumentButtonPress()}
            />
          </View>
          <FormLabel>Favorite genres of music</FormLabel>
          {/*  {this.renderGenreStr()} */}
          <View style={{marginTop: 5}}>
            <Button
              raised
              backgroundColor="#44BBA4"
              title='Select your favorite genres'
              onPress={() => this.onGenreButtonPress()}
            />
          </View>

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
  fetchGenres,
  fetchInstruments,
  updateUser,
  getUser,
  getUserInstruments,
  getUserGenres,
}) (NewUserForm);

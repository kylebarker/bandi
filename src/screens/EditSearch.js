import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { FormLabel, FormInput, Button, Header } from 'react-native-elements';
import { connect } from 'react-redux';
import { getUsers, cityChanged, zipCodeChanged } from '../actions';


class EditSearch extends Component {

  onCityChange(text) {
    this.props.cityChanged(text);
  }

  onZipCodeChange(text){
    this.props.zipCodeChanged(text);
  }

  onSearchButtonPress(id, city, zipCode){
    if(this.props.editSearch.users.city){
      this.props.getUsers(id, city, zipCode)
    }
  }


  render () {
    console.log('edit search props', this.props)
    const { textStyle, continueButtonStyle } = styles;

    let userInfo = this.props.editSearch.auth.user

    if(userInfo){
      if(userInfo[0]){
        let city = userInfo[0].city;
        let zipCode = userInfo[0].zip_code.toString();
        let userid = userInfo[0].id;
        console.log('edit search city and zip', city, zipCode)

        if(this.props.editSearch.foreignUsers.users.length === 0){
          this.props.getUsers(userid, city, zipCode);
        }

        return (
          <View style={{flex: 1, marginTop:30}}>
            <ScrollView>
              <FormLabel>City</FormLabel>
              <FormInput
                placeholder={city}
                onChangeText={this.onCityChange.bind(this)}
                />

              <FormLabel>Zip Code</FormLabel>
              <FormInput
                placeholder={zipCode}
                onChangeText={this.onZipCodeChange.bind(this)}
                />

              <View style={continueButtonStyle}>
                <Button
                  raised
                  backgroundColor="#1994FB"
                  title='Submit new search criteria'
                  onPress={ () => this.onSearchButtonPress(userid, this.props.editSearch.users.city,this.props.editSearch.users.zipCode) }
                  />
              </View>
            </ScrollView>
          </View>
        )
      } else {
        return (
          <View><Text>Something went wrong</Text></View>
        )
      }
    } else {
      return (
        <View><Text>Something went really wrong</Text></View>
      )
    }
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
  return { editSearch: state }
};

export default connect(mapStateToProps, {getUsers, cityChanged, zipCodeChanged}) (EditSearch);

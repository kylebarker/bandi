import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { FormLabel, FormInput, Button, Header } from 'react-native-elements';
import { connect } from 'react-redux';


class EditSearch extends Component {

  render () {

    const { textStyle, continueButtonStyle } = styles;

    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <FormLabel>City</FormLabel>
          <FormInput
            placeholder="Search by city"
            />

          <FormLabel>Zip Code</FormLabel>
          <FormInput
            placeholder="Search by zip code"
            />

          <FormLabel>Influences</FormLabel>
          <FormInput
            placeholder="Search by influences"
            />


          <FormLabel>Instruments</FormLabel>
          <Text style={textStyle}>Search by instruments</Text>
          <Button
            raised
            backgroundColor="#44BBA4"
            title='Select instruments to search by'
          />

          <FormLabel>Genres</FormLabel>
          <Text style={textStyle}>Search by genres</Text>
          <Button
            raised
            backgroundColor="#44BBA4"
            title='Search by genres to search by'

          />

          <View style={continueButtonStyle}>
            <Button
              raised
              backgroundColor="#44BBA4"
              title='Now go log in when finished'
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

export default connect(null) (EditSearch);

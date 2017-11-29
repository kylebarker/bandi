import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { FormLabel, FormInput, Button, Header } from 'react-native-elements';
import { connect } from 'react-redux';
import Card from '../components/common/Card';
import CardSection from '../components/common/CardSection';


class UserProfile extends Component {

  render () {
    const { profileTextStyle} = styles;
    let user = this.props.loginScreen.auth.user;

    if(user[0]){
      let firstName = user[0].first_name;
      let age = user[0].age;
      let city = user[0].city;
      let zipCode = user[0].zip_code;
      let influences = user[0].influences;
      let description = user[0].description;
      let instruments = '';

      user.map(instrument => {
        instruments = instruments + instrument.instrument + " "
      })

      return (
        <View style={{flex: 1, marginTop: 30}}>
          <ScrollView>
            <Card>
              <CardSection>
                <Text style={{fontSize: 24}}>{firstName}, {age}</Text>
              </CardSection>

              <CardSection>
                <Text style={profileTextStyle}>{city}</Text>
              </CardSection>

              <CardSection>
                <Text style={profileTextStyle}>{zipCode}</Text>
              </CardSection>

              <CardSection>
                <Text style={profileTextStyle}>{instruments}</Text>
              </CardSection>

              <CardSection>
                <Text style={profileTextStyle}>{influences}</Text>
              </CardSection>

              <CardSection>
                <Text style={profileTextStyle}>{description}</Text>
              </CardSection>
            </Card>
          </ScrollView>

        </View>
      )

    } else {
      return (
        <View><Text>Something went wrong</Text></View>
      )
    }


  }
}

const styles = {
  profileTextStyle : {
    fontSize: 17
  }
}

const mapStateToProps = state => {

  return { loginScreen: state }

}


export default connect(mapStateToProps, {}) (UserProfile);

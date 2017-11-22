import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { FormLabel, FormInput, Button, Header } from 'react-native-elements';
import { connect } from 'react-redux';
import Card from '../components/common/Card';
import CardSection from '../components/common/CardSection';


class UserProfile extends Component {

  render () {
    const { headerStyle, profileTextStyle} = styles;

    return (
      <View style={{flex: 1}}>
        <Header
          backgroundColor='#393E41'
          leftComponent={{icon: 'eject', color: '#fff'}}
          centerComponent={{text: 'PROFILE', style:headerStyle }}
          rightComponent={{icon: 'edit', color: '#fff' }}
          statusBarProps={{barStyle: 'light-content'}}
        />

        <ScrollView>
          <Card>
            <CardSection>
              <Text style={{fontSize: 24}}>Roger, 35</Text>
            </CardSection>

            <CardSection>
              <Text style={profileTextStyle}>Phoenix</Text>
            </CardSection>

            <CardSection>
              <Text style={profileTextStyle}>Guitar, Bass, Drums</Text>
            </CardSection>

            <CardSection>
              <Text style={profileTextStyle}>Rock, Alternative Rock</Text>
            </CardSection>

            <CardSection>
              <Text style={profileTextStyle}>Led Zeppelin, The Rolling Stones, The Who</Text>
            </CardSection>

            <CardSection>
              <Text style={profileTextStyle}>I am primarily a drummer who has some experience drumming in a alternative rock band. I just moved to the area and would like to join a new band. If you like what I have listed in the influences, go ahead a message me!</Text>
            </CardSection>
          </Card>

          <View style={{marginTop:15}}>
            <Button
              raised
              backgroundColor="#44BBA4"
              title='Delete Account'
              />
          </View>
        </ScrollView>

      </View>
    )
  }
}

const styles = {
  headerStyle : {
    color: '#fff',
    fontSize: 20
  },
  profileTextStyle : {
    fontSize: 17
  }
}


export default connect(null, {}) (UserProfile);

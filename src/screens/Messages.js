import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Card from '../components/common/Card';
import CardSection from '../components/common/CardSection';


class Messages extends Component {

  render () {

    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <Card>
            <CardSection>
              <Text>Messages</Text>
            </CardSection>
          </Card>
        </ScrollView>

      </View>
    )
  }
}

export default connect(null, {}) (Messages);

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import Card from '../components/common/Card';
import CardSection from '../components/common/CardSection';
import Deck from '../components/Deck';
import { getUsers } from '../actions';

class SearchScreen extends Component {


  componentWillMount() {
    console.log('SearchScreen component did mount', this.props)
    this.props.getUsers()
  }

  renderCard(item) {
    return (
      <Card key={item.id}>
        <CardSection>
          <Text style={{fontSize: 24}}>{item.first_name}, {item.age}</Text>
        </CardSection>
        <CardSection>
          <Text style={{fontSize: 17}}>{item.city}</Text>
        </CardSection>
        <CardSection>
          <Text style={{fontSize: 17}}>{item.influences}</Text>
        </CardSection>
        <CardSection>
          <Text style={{fontSize: 17}}>{item.description}</Text>
        </CardSection>
      </Card>
    )
  }

  renderNoMoreCards(){
    return (
      <Card>
        <CardSection>
          <Text style={{fontSize: 20}}>No more users with given search criteria</Text>
        </CardSection>
      </Card>
    )
  }

  render () {
    const users = this.props.foreignUsers.users.data
    if(users){
      console.log(users[0])
    }

    return (
      <View style={{marginTop: 5}}>
        <Deck
          dataUsers={users}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          />
      </View>
    )
  }
}


const mapStateToProps = state => {
  return { foreignUsers: state.foreignUsers }
};

export default connect(mapStateToProps, {getUsers})(SearchScreen);

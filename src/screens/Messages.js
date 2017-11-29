import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Card from '../components/common/Card';
import CardSection from '../components/common/CardSection';
import { List, ListItem } from 'react-native-elements';
import { getMatchedUsers } from '../actions';



class Messages extends Component {
  componentDidUpdate(prevProps, prevState){
    if(prevProps.messageList.auth.user !== this.props.messageList.auth.user){
      this.props.getMatchedUsers(this.props.messageList.auth.user[0].id)
    }
    // if(prevProps.messageList.foreignUsers.users.data){
      // if(this.props.messageList.foreignUsers.users.data.length > 0){
      //   if(prevProps.messageList.foreignUsers.users.data.length !== this.props.messageList.foreignUsers.users.data.length){
      //     console.log("UNIXOENA");
      //     this.props.getMatchedUsers(this.props.messageList.auth.user[0].id)
      //   }
      // }
    // }
  }

  render () {
    //Need to conditional render
    let matchedUsers = this.props.messageList.foreignUsers.matched.data

    if(matchedUsers){
      renderListItems = matchedUsers.map(match => {
        console.log('message list match map', match)
        let instrumentsStr = '';
        renderItemInstruments = match.instruments.map(instrument => {
          return (
            instrumentsStr = instrument + ' '
          )
        })

        return(
          <ListItem
            onPress={() => this.props.navigation.navigate('messageRoom', {matchInfo: match})}
            title={match.first_name}
            subtitle={
              <View style={styles.subtitleView}>
                <Text style={styles.ratingText}>{renderItemInstruments}</Text>
              </View>
            }
            matchInfo={match}
          />
        )
      })

      return (
        <View style={{flex: 1}}>
          <ScrollView>
            <List containerStyle={{marginTop: 0}}>
              {renderListItems}
            </List>
          </ScrollView>

        </View>
      )
    } else {
      return(
        <View><Text>Something went horribly wrong</Text></View>
      )
    }

  }
}

const mapStateToProps = state => {

  return { messageList:state }

}

styles = {
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  }
}

export default connect(mapStateToProps, { getMatchedUsers }) (Messages);

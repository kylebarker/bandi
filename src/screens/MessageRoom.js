import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { GiftedChat } from 'react-native-gifted-chat';
import axios from 'axios';

class MessageRoom extends Component {

  state = {
    messages: [],
  };

  componentDidMount() {
    console.log("BOOOOOOOOOOOOOO: ", this.props);
    axios.get(`http://localhost:3000/users/${this.props.messageRoom.auth.user[0].id}/message/${this.props.navigation.state.params.matchInfo.id}`).then(messages => {
      console.log("UNICORNS: ", this)
      this.setState({
        messages: messages.data,
      });
    })
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));

    console.log('on send state', messages)

    axios.post(`http://localhost:3000/users/${this.props.messageRoom.auth.user[0].id}/message/${this.props.navigation.state.params.matchInfo.id}`, {message: messages[0].text})
  }


  render() {
    console.log('message room props', this.props)
    console.log('MEZZAGEZZ: ', this.state.messages);
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: this.props.messageRoom.auth.user[0].id,
        }}
      />
    );
  }
}

const mapStateToProps = state => {
  return { messageRoom:state }
}


export default connect(mapStateToProps) (MessageRoom);

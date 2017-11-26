import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { CheckBox } from 'react-native-elements';

class SelectionList extends Component {
  state = {
    checked: false
  }


  onButtonPress() {
    this.props.push()
    this.setState({checked: !this.state.checked})
  }

  render () {
    return (
        <CheckBox
          title={this.props.title}
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checkedColor='#44BBA4'
          checked={this.state.checked}
          onPress={() => this.onButtonPress()}
        />
    )
  }
}
export default SelectionList;

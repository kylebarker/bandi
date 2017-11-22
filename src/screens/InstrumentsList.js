import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import SelectionList from '../components/SelectionList';
import { CheckBox, Button } from 'react-native-elements';
import { fetchInstruments, updateUserInstruments } from '../actions';
import { NavigationActions } from 'react-navigation';



class InstrumentsList extends Component {
  state = {
    instrumentsArray: []
  }


  pushInstrumentId(userid, instrumentid) {
    this.state.instrumentsArray.push({user_id: userid, instrument_id: instrumentid})
  }

  onSubmit(uid, instruments) {
    this.props.updateUserInstruments(uid, instruments)
    this.props.navigation.goBack()
  }


  render () {
    const instrumentList = this.props.instruments.instruments.instruments;
    const userid = this.props.users.auth.user;
    let renderCheckboxes

    if(instrumentList[0]){
      renderCheckboxes = instrumentList.map(instrument => {
        return(
          <SelectionList
            key={instrument.id}
            title={instrument.name}
            push={() => this.pushInstrumentId(userid, instrument.id)}
          />
        )
      })
    }



    return (
      <View style={{marginTop: 5, marginBottom: 5}}>
        <ScrollView>
          {renderCheckboxes}
          <View style={{marginTop:10, marginBottom:10}}>
            <Button
              raised
              backgroundColor="#44BBA4"
              title='Submit'
              onPress={() => this.onSubmit(userid, this.state.instrumentsArray)}
            />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return { instruments: state, users:state }
};

export default connect(mapStateToProps, {fetchInstruments, updateUserInstruments})(InstrumentsList);

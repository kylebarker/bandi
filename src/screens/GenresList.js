import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import SelectionList from '../components/SelectionList';
import { CheckBox, Button } from 'react-native-elements';
import { fetchGenres, updateUserGenres } from '../actions';
import { NavigationActions } from 'react-navigation';

class GenresList extends Component {

  state = {
    genresArray: []
  }

  pushGenreId(userid, genreid){
    this.state.genresArray.push({user_id: userid, genre_id: genreid})
  }

  onSubmit(uid, genres){
    this.props.updateUserGenres(uid, genres)
    this.props.navigation.goBack()

  }

  render () {
    const genreList = this.props.genres.genres.genres.data;
    const userid = this.props.users.auth.user;
    let renderCheckboxes


    if(genreList){

      renderCheckboxes = genreList.map(genre => {
        const genreid = genre.id;
        const genreName = genre.name;

        return(
          <SelectionList
            key={genreid}
            title={genreName}
            push={() => this.pushGenreId(userid, genreid)}
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
              onPress={() => this.onSubmit(userid, this.state.genresArray)}
            />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return { genres: state, users:state }
}

export default connect(mapStateToProps, {updateUserGenres})(GenresList);

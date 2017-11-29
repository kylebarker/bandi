import React, { Component } from 'react';
import {
  View,
  Text,
  Animated,
  PanResponder,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import { matchUsers } from '../actions';
import Spinner from './common/Spinner';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

class Deck extends Component {
  static defaultProps = {
    onSwipeRight: () => {
      console.log('swiped right')
    },
    onSwipeLeft: () => {
      console.log('swiped left')
    }
  }

  constructor(props){
    super(props);

    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({x: gesture.dx, y: gesture.dy})
      },
      onPanResponderRelease: (event, gesture) => {
        if(gesture.dx > SWIPE_THRESHOLD){
          this.forceSwipe('right');
        } else if(gesture.dx < -SWIPE_THRESHOLD){
          this.forceSwipe('left');
        } else {
          this.resetPosition()
        }
      }
    })
    this.state = { panResponder, position, index: 0 };
  }

  forceSwipe(direction){
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;

    Animated.timing(this.state.position, {
      toValue: { x, y: 0 },
      duration: SWIPE_OUT_DURATION
    }).start(() => this.onSwipeComplete(direction));
  }

  onSwipeComplete(direction){
    const { onSwipeLeft, onSwipeRight, dataUsers } = this.props;
    const user = dataUsers[this.state.index];


    direction === 'right' ? onSwipeRight(user) : onSwipeLeft(user);

    if(direction === 'right'){
      let userid = this.props.deckProps.auth.user[0].id;
      let matchid = user.id;

      console.log('swiped right', userid, matchid)
      this.props.matchUsers(userid, matchid)
    }


    this.state.position.setValue({ x: 0, y: 0});
    this.setState({index: this.state.index + 1});
  }

  resetPosition(){
    Animated.spring(this.state.position, {
      toValue: { x: 0, y: 0 }
    }).start();
  }

  getCardStyle(){
    const { position } = this.state;
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5 ,0,SCREEN_WIDTH * 1.5],
      outputRange:  ['-120deg', '0deg', '120deg']
    })

    return {
      ...position.getLayout(),
      transform: [{ rotate }]
    }
  }

  render() {
    const data = this.props.dataUsers;
    console.log('deck data', data)
    console.log('deck props', this.props)

    if(data){
      if (this.state.index >= data.length){
        return this.props.renderNoMoreCards();
      }

      return data.map((user, i) => {
        if(i < this.state.index) { return null }

        if(i === this.state.index){
          return (
            <Animated.View
              key={user.id}
              style={[this.getCardStyle(), styles.cardStyle]}
              {...this.state.panResponder.panHandlers}
            >
              {this.props.renderCard(user)}
            </Animated.View>
          )
        }

        return (
          <Animated.View style={styles.cardStyle}>
            {this.props.renderCard(user)}
          </Animated.View>
        )
      }).reverse()
    } else {
      return (
        <View style={{marginTop: 100}}>
          <Spinner />
        </View>
      )
    }
  }
}

const styles = {
  cardStyle: {
    position: 'absolute',
    width: SCREEN_WIDTH,
  }
}


const mapStateToProps = state => {
  return { deckProps: state }
};

export default connect(mapStateToProps, { matchUsers })(Deck);

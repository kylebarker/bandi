import React, { Component } from 'react';
import {
  Text,
  View,
  Animated,
  PanResponder,
  Dimensions,
  LayoutAnimation,
  UIManager } from 'react-native';
import { connect } from 'react-redux';

import Card from '../components/common/Card';
import CardSection from '../components/common/CardSection';


const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;


class SearchScreen extends Component {

  static defaultProps = {
    onSwipeRight: () => {},
    onSwipeLeft: () => {}
  }

  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy })
      },
      onPanResponderRelease: (event, gesture) => {
        if(gesture.dx > SWIPE_THRESHOLD){
          console.log('swipe right!')
          this.forceSwipe('right');
        } else if (gesture.dx < -SWIPE_THRESHOLD){
          console.log('swipe left!')
          this.forceSwipe('left');
        } else {
          this.resetPosition();
        }
      }
    })
    this.state = { panResponder, position, index: 0 }
  }

  componentWillUpdate(){
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.spring()
  }

  forceSwipe(direction) {
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;

    Animated.timing(this.state.position, {
      toValue: { x, y: 0},
      duration: SWIPE_OUT_DURATION
    }).start(() => this.onSwipeComplete(direction));
  }

  resetPosition() {
    Animated.spring(this.state.position, {
      toValue: { x: 0, y: 0 }
    }).start();
  }

  getCardStyle(){
    const { position } = this.state;
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5 , 0 , SCREEN_WIDTH * 1.5],
      outputRange: ['-120deg', '0deg', '120deg']
    })
    return{
      ...position.getLayout(),
      transform: [{ rotate }]
    }
  }

  renderCards() {
    return (
      <Animated.View>
        <Card>
          <CardSection>
            <Text style={{fontSize: 24}}>Steve, 20</Text>
          </CardSection>

          <CardSection>
            <Text style={styles.profileTextStyle}>Chicago</Text>
          </CardSection>

          <CardSection>
            <Text style={styles.profileTextStyle}>Producer, DJ</Text>
          </CardSection>

          <CardSection>
            <Text style={styles.profileTextStyle}>Hip-Hop</Text>
          </CardSection>

          <CardSection>
            <Text style={styles.profileTextStyle}>Kanye West, Beastie Boys, A Tribe Called Quest</Text>
          </CardSection>

          <CardSection>
            <Text style={styles.profileTextStyle}>I am a producer making beats of all types</Text>
          </CardSection>
        </Card>
      </Animated.View>  
    )
  }


  render () {

    return (
      <View style={{marginTop: 5}}>
        {this.renderCards()}
      </View>
    )
  }
}


const styles = {
  profileTextStyle : {
    fontSize: 17
  }
}


export default connect(null)(SearchScreen);

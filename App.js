import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Store from './store';
import  reducers  from './src/reducers';

import LoginScreen from './src/screens/LoginScreen';
import NewUserLogin from './src/screens/NewUserLogin';
import NewUserForm from './src/screens/NewUserForm';
import InstrumentsList from './src/screens/InstrumentsList';
import UserProfile from './src/screens/UserProfile';
import SearchScreen from './src/screens/SearchScreen';
import Messages from './src/screens/Messages';
import EditSearch from './src/screens/EditSearch';
import MessageRoom from './src/screens/MessageRoom';


export default class App extends React.Component {
  render() {

    // WHEN YOU ARE DONE WORKING ON SOMETHING, ADD TO THE NAVIGATOR
    const MainNavigator = StackNavigator({
      login: {
        screen: LoginScreen,
        navigationOptions: {
          header: null
        }
      },
      newUserLogin: {
        screen: NewUserLogin,
        navigationOptions: {
          headerTitle: 'Create Account',
          //Just to show how to add an icon
          headerRight: <View style={{marginRight: 10}}><Icon name='menu' color='#fff'/></View>,
          headerStyle: {backgroundColor: '#393E41'},
          headerTitleStyle: { color: '#fff'},
          headerTintColor: '#fff'
        }
      },
      newUserForm: {
        screen: NewUserForm,
        navigationOptions: {
          headerTitle: 'Create User Info',
          headerStyle: {backgroundColor: '#393E41'},
          headerTitleStyle: {color: '#fff'},
          headerTintColor: '#fff',
          headerLeft: null
        }
      },
      instruments: {
        screen: InstrumentsList,
        navigationOptions: {
          headerTitle: 'Instruments',
          headerStyle: {backgroundColor: '#393E41'},
          headerTitleStyle: {color: '#fff'},
          headerTintColor: '#fff'
        }
      },
      main: {
        screen: TabNavigator({
          search: {
            screen: SearchScreen,
            navigationOptions: {
              header: null,
              tabBarLabel: 'Bandi',
              tabBarIcon: () => (
                <Icon name='music-note' color='#393E41'/>
              )
            }
          },
          userProfile: {
            screen: UserProfile,
            navigationOptions: {
              header: null,
              tabBarLabel: 'User',
              tabBarIcon: () => (
                <Icon name='account-box' color='#393E41'/>
              )
            }
          },
          messages: {screen: StackNavigator({
                    matches: {
                      screen: Messages,
                      navigationOptions:{
                        headerTitle: 'Bands',
                        headerStyle: {backgroundColor: '#393E41'},
                        headerTitleStyle: {color: '#fff'},
                        headerTintColor: '#fff',
                        headerLeft: null,
                      },
                    },
                    messageRoom: {
                      screen: MessageRoom,
                      navigationOptions:{
                        headerTitle: 'Message',
                        headerStyle: {backgroundColor: '#393E41'},
                        headerTitleStyle: {color: '#fff'},
                        headerTintColor: '#fff',
                      }
                    }
                  }),
                  navigationOptions: {
                    header: null,
                    tabBarIcon: () => (
                      <Icon name='message' color='#393E41'/>
                    )
                  }
          },
          editSearch: {
            screen: EditSearch,
            navigationOptions: {
              header: null,
              tabBarLabel: 'Edit Search',
              tabBarIcon: () => (
                <Icon name='edit' color='#393E41'/>
              )
            }
          },
        })

      }
    })


    return (
      <Provider store={Store()}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

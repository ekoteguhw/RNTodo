import React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation'
import { HomeScreen, LoginScreen, RegisterScreen } from './screens/Index'

const navigationOptions = {
  headerStyle: {
    backgroundColor: '#a066ca',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  }
}

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
}, {
    initialRouteName: 'Login', navigationOptions: navigationOptions
  })

const AppStack = createStackNavigator({
  Home: HomeScreen
}, {
    initialRouteName: 'Home', navigationOptions: navigationOptions
  })

const Navigator = createSwitchNavigator({
  Auth: AuthStack,
  App: AppStack
}, {
    initialRouteName: 'Auth'
  })

const App = () => (<Navigator />)
export default App

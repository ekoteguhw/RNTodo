import React from 'react';
import { createStackNavigator } from 'react-navigation'
import HomeScreen from './screens/Home'

const RootStack = createStackNavigator({
  Home: HomeScreen
}, { initialRouteName: 'Home' })

const App = () => (<RootStack />)
export default App

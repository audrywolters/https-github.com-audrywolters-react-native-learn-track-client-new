import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import AccountScreen from './src/screens/AccountScreen'
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import TrackListScreen from './src/screens/TrackListScreen'
import { Provider as AuthProvider } from './src/context/AuthContext'

// AUDRY - if making a new app
//         sort out pages into files and create navigation code first
//         it will isolate all the pages so we don't end up having to move code around

// everything is nested inside a switch (fast) navigator
const switchNavigator = createSwitchNavigator({
  // then organized into differnet nests
	loginFlow: createStackNavigator({
    // this is the landing page
		Signup: SignupScreen,
		Signin: SigninScreen
	}),
	mainFlow: createBottomTabNavigator({
		trackListFlow: createStackNavigator({
			TrackList: TrackListScreen,
			TrackDetail: TrackDetailScreen
		}),
		TrackCreate: TrackCreateScreen,
		Account: AccountScreen
	})
})

const App = createAppContainer(switchNavigator)

export default () => {
	return (
		<AuthProvider>
			<App />
		</AuthProvider>
	)
}

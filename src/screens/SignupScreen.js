import React, { useState, useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'

const SignupScreen = ({ navigation }) => {
	// get App state and Auth signup function
	const { state, signup } = useContext(AuthContext)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	// console.log(`Sign up Screen-> authContext-> state: ${state.errorMessage}`)

	return (
		<View style={styles.container}>
			<Spacer>
				<Text h3>Sign Up for Tracker</Text>
			</Spacer>

			<Spacer>
				{/* using rn-elements here to add a label w/o writing it out */}
				{/* value is the state */}
				{/* onChangeText is the setState */}
				<Input
					label="Email"
					value={email}
					onChangeText={setEmail}
					// below is longhand
					// onChangeText={(newEmail) => setEmail(newEmail)}
					autoCapitalize="none"
					autoCorrect={false}
				/>
			</Spacer>

			<Spacer>
				<Input
					secureTextEntry // hide the password text
					label="Password"
					value={password}
					onChangeText={setPassword}
					autoCapitalize="none"
					autoCorrect={false}
				/>
			</Spacer>

			{/* if auth reducer sets an error message in state, show it */}
			{state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}

			<Spacer>
				{/* signup action comes from AuthContext */}
				<Button title="Sign Up" onPress={() => signup({ email, password })} />
			</Spacer>
		</View>
	)
}

SignupScreen.navigationOptions = () => {
	return {
		// hide the topmost bit, headery piece
		// can be written as assigning an object
		// SignupScreen.navigationOptions = {
		// 	headerShown: false
		// }
		header: () => false
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginBottom: 200
	},
	errorMessage: {
		fontSize: 16,
		color: 'red',
		marginLeft: 20
	}
})

export default SignupScreen

import React from 'react'
import { View, StyleSheet } from 'react-native'

// whatever is sent to this component (children)
// will have the css wrapped around it
const Spacer = ({ children }) => {
	return <View style={styles.spacer}>{children}</View>
}

const styles = StyleSheet.create({
	spacer: {
		margin: 20
	}
})

export default Spacer

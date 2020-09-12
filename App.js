import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

export default function App() {
	return (
		<View style={styles.screen}>
			<View style={styles.inputContainer}>
				<TextInput placeholder="Write your Goal!" style={styles.textInput} />
				<Button title="  +  " />
			</View>
			<View></View>
			<StatusBar style="auto" />
		</View>
	)
}

const styles = StyleSheet.create({
	screen: {
		padding: 50,
	},
	inputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	textInput: {
		borderColor: 'black',
		borderWidth: 1,
		padding: 10,
		width: '80%',
	},
})

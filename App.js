import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

export default function App() {
	const [enteredGoal, setEnteredGoal] = useState('')
	const [goals, setGoals] = useState([])

	const addGoalHandler = () => console.log(enteredGoal)

	return (
		<View style={styles.screen}>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Write your Goal!"
					style={styles.textInput}
					onChangeText={(enteredText) => setEnteredGoal(enteredText)}
					value={enteredGoal}
				/>
				<Button title="  +  " onPress={addGoalHandler} />
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

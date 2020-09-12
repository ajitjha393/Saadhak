import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, TextInput, Button } from 'react-native'

export default function App() {
	return (
		<View style={{ padding: 50 }}>
			<View>
				<TextInput
					placeholder="Write your Goal!"
					style={{
						borderBottomColor: 'black',
						borderBottomWidth: 1,
						padding: 10,
					}}
				/>
				<Button title="Add" />
			</View>
			<View></View>
			<StatusBar style="auto" />
		</View>
	)
}

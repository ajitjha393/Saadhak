import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, TextInput, Button } from 'react-native'

export default function App() {
	return (
		<View style={{ padding: 50 }}>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<TextInput
					placeholder="Write your Goal!"
					style={{
						borderColor: 'black',
						borderWidth: 1,
						padding: 10,
						width: '80%',
					}}
				/>
				<Button title="  +  " />
			</View>
			<View></View>
			<StatusBar style="auto" />
		</View>
	)
}

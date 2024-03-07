//App.js

import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import ChatbotApp from './ChatbotApp';

const App = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>

			<Text
				style={{
					marginLeft: 23,
					fontSize: 20,
					marginTop: 10,
					fontWeight: 'bold',
					color: 'black',
					backgroundColor: 'white',
					marginRight: 30
				}}>
				 Chat</Text>

			<ChatbotApp />
		</SafeAreaView>
	);
};

export default App;

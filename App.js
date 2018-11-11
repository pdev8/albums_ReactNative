// Import a library to help create a component
import * as Expo from 'expo';
import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
// Need to call the API as soon as the view renders
// Lifecycle methods are functions that will be called at some point
// during its lifecycle
class App extends React.Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<Header headerText={'Albums'} />
				<AlbumList />
			</View>
		);
	}
}

// Render it to the device
Expo.registerRootComponent(App);

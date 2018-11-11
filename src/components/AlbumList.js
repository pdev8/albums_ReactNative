import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// Use class based components when we want to use React to fetch data
// A requirement of a class base component is that a single method called
// render() is defined and returns some JSX
class AlbumList extends Component {
	state = { albums: [] };

	componentWillMount() {
		axios
			.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then((response) => this.setState({ albums: response.data }));
	}

	renderAlbums() {
		return this.state.albums.map((album) => 
			<AlbumDetail key={album.title} album={album} />);
	}

	render() {
		console.log(this.state);

		return <ScrollView>{this.renderAlbums()}</ScrollView>;
	}
}

export default AlbumList;

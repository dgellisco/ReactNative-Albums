import React, { Component } from 'react';
import { View } from 'react-native';

import axios from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = {
        albums: []
    };
    
    componentWillMount() {
        // Axios http request (inherently asynchronous)
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            // Returned promise.  Request handler calls 'setState'.
            .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album =>
            // set key, ideally an ID, but the album title is sufficiently unique
            <AlbumDetail key={album.title} albumData={album} />
        );
    }
    
    render() {
        console.log(this.state);

        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

const styles = {

};

export default AlbumList;

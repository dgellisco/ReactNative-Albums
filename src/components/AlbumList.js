import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

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
    
    render() {
        console.log(this.state);

        return (
            <View>
                <Text>AlbumList!!!</Text>
            </View>
        );
    }
}

const styles = {

};

export default AlbumList;

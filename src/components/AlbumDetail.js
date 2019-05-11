import React from 'react';
import { Image, Text, View } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ albumData }) => {

    const { title, artist, thumbnail_image } = albumData;
    const {
        thumbnailContainerStyle,
        thumbnailStyle,
        titleContainerStyle,
        titleTextStyle
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
                </View>
                <View style={titleContainerStyle}>
                    <Text style={titleTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            {/* <Text>{url}</Text> */}
            {/* <Text>{image}</Text> */}
        </Card>
    );
};

const styles = {
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 20
    },
    titleContainerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    titleTextStyle: {
        fontSize: 18
    }
};

export default AlbumDetail;

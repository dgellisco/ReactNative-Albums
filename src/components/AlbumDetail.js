import React from 'react';
import { Image, Text, View } from 'react-native';

import Button from './Button';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ albumData }) => {

    // Album data from JSON
    const { title, artist, thumbnail_image } = albumData;
    // Styles
    const {
        imageStyle,
        thumbnailContainerStyle,
        thumbnailStyle,
        titleContainerStyle,
        titleTextStyle
    } = styles;

    return (
        <Card>

            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={titleContainerStyle}>
                    <Text style={titleTextStyle}>{title}</Text>
                    <Text>
                        {artist}
                    </Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    style={imageStyle}
                    source={{ uri: albumData.image }}
                />
            </CardSection>

            <CardSection>
                <Button onPressFunction={() => console.log('hey whattup nice press')} />
            </CardSection>
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
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;

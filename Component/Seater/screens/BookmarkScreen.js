import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const BookmarkScreen = () =>
{
    return(
    <view style={StyleSheet.container}>
            <text>Explore Screen</text>
            <Button
            title= "Go Details Screen"
            onPress={()=> navigation.navigate("Details")}
            />
            </view>
    );
};
export default BookmarkScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'

    },
});
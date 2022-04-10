import React, { Component } from 'react';
import { StyleSheet, Pressable , Text, useWindowDimensions, TextInput} from 'react-native';

const CustomButton = ({onPress,text, type, bgColor, fgColor}) => {
    return(
        <Pressable 
            onPress = {onPress} 
            style = {[
                styles.container, 
                styles[`container_${type}`],
                bgColor? {backgroundColor: bgColor} : {}]}>
             <Text 
                style={[
                    styles.text, 
                    styles[`text_${type}`],
                    fgColor ? {color: fgColor} : {}]}>{text}
            </Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    container:{
        width: '80%',
        padding: 10,
        margin: 10,
        alignItems: 'center',
        borderRadius: 5,
    },
    container_primary:{
        backgroundColor: "#3B71F3"
    },
    container_tertiary:{

    },
    container_secondary:{
        borderColor: "#3B7153",
        borderWidth: 2
    },
    text_primary: {
        fontWeight: 'bold',
        color: 'white'
    },
    text_secondary: {
        color: "#3B71F3"
    },
    text_tertiary: {
        fontWeight: 'bold',
        color: 'grey'
    }
});
export default CustomButton;
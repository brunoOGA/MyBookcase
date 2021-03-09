import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

class ButtonIcon extends Component {

    render() {
        const { type, ...props } = this.props;
        let colorButton;
        let iconButton;
        let iconSizeButton;
        let backgroundColorButton;

        if(type == 'change') {
            colorButton = '#4C33CC'
            iconButton = 'pencil'
            backgroundColorButton = '#F4B740'
            iconSizeButton = 34
        } else if( type == 'delete') {
            colorButton='#4C33CC'
            iconButton= 'trash'
            backgroundColorButton = '#ED2E7E'
            iconSizeButton = 34
        } else if( type == 'cancel') {
            colorButton = '#ED2E7E'
            iconButton = 'times-circle'
            backgroundColorButton = '#FFFFFF'
            iconSizeButton = 40
        } else if( type == 'camera') {
            colorButton = '#FFFFFF'
            iconButton = 'camera'
            backgroundColorButton = '#1CC8EE'
            iconSizeButton = 28
        }

        const button = {
            borderRadius: 22,
            backgroundColor: backgroundColorButton,
            alignItems: 'center',
            justifyContent: 'center',
            height: 44,
            width: 44,
            margin: 4,
            elevation: 1
        }
        return (
            <TouchableOpacity {...props} style={button}>
                <Icon name={iconButton} size={iconSizeButton} color={colorButton}/>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: '#FCFCFC',
        fontSize: 20
    }
})

export default ButtonIcon;
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

class ButtonText extends Component {

    render() {
        const { label, color, ...props } = this.props;
        let auxColor;
        if(color == 'yellow') {
            auxColor = '#F4B740'
        } else {
            auxColor = '#00BA88'
        }

        const button = {
            borderRadius: 4,
            backgroundColor: auxColor,
            alignItems: 'center',
            justifyContent: 'center',
            height: 56,
            elevation: 1
        }
        return (
            <TouchableOpacity {...props} style={button}>
                <Text style={styles.text}>{label}</Text>
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

export default ButtonText;
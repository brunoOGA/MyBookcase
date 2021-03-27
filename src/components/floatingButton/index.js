import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import addBook from '../../assets/addBook.png';
import addNote from '../../assets/addNote.png';

Icon.loadFont();

export default class FloatingButton extends React.Component {

    render() {
        const { type, ...props } = this.props;
        const button = {
            position: 'absolute',
            bottom: 30,
            right: 30,
            borderRadius: 30,
            backgroundColor: '#00BA88',
            alignItems: 'center',
            justifyContent: 'center',
            height: 60,
            width: 60,
            elevation: 3
        }
        return (
            <TouchableOpacity {...props} style={button}>
                {
                    type == 'book' ? 
                    <Image source={addBook} />
                    :
                    <Image source={addNote} />
                }
                
            </TouchableOpacity>
        );
    }
}
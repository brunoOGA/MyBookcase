import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Line extends React.Component{
    render() {
        const {children, label} = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.text}>{children}</Text>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%'
    },
    label: {
        color: '#14142B',
        fontSize: 22,
        marginBottom: 8,
        fontWeight: 'bold'
    },
    text: {
        color: '#14142B',
        fontSize: 22,
        marginBottom: 8
    },
    
});
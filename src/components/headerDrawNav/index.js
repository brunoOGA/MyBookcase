import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


Icon.loadFont();

export default class HeaderDrawNav extends React.Component {
    
    render() {
        const {title, navigation} = this.props;
        
        return (
            <View style={styles.container}>
                <View style={styles.containerButton}>
                    <TouchableOpacity  style={styles.button} onPress={()=>{
                        navigation.openDrawer()
                    }}>
                        <Icon name="bars" size={38} color="#F7F7FC" />
                    </TouchableOpacity>
                </View>
                <View  style={styles.containerTitle}>
                    <Text  style={styles.text}>{title}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#2A00A2',  
        alignItems: 'center',
    },
    button: {
    },
    text: {
        color: '#F7F7FC',
        fontSize: 32,
    },
    containerTitle: {
        width: '100%'
    },
    containerButton: {
        backgroundColor: '#2A00A2',
        marginHorizontal: 30,
        marginVertical: 16,
        
    }
})
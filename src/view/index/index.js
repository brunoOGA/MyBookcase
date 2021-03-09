import * as React from 'react';
import {View, Text, StatusBar, Image, StyleSheet, TouchableOpacity} from 'react-native';
import logo from '../../assets/logo1.png';

export default class Index extends React.Component {

    render() {
        return (
            <>
            <StatusBar backgroundColor='#2A00A2' barStyle="light-content" />
            <View style={styles.container}>
                <View style={{alignItems: 'center', marginHorizontal: 30}}>
                    <Image source={logo} style={styles.image}/>
                    <View style={styles.containerTexts}>
                        <Text style={styles.text}>Seja</Text>
                        <Text style={styles.text}>Bem-vindo</Text>
                    </View>
                </View>
                <View style={styles.containerButtons}>
                    <TouchableOpacity style={[styles.btn, {
                        borderWidth: 1,
                        backgroundColor: '#2A00A2',
                        borderColor: '#FCFCFC',
                    }]} onPress={() => this.props.navigation.navigate('Register')}>
                        <Text style={{color: '#FCFCFC', fontSize: 22}}>Cadastro</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, {
                        backgroundColor: '#ED2E7E',
                    }]} onPress={() => this.props.navigation.navigate('Login')} >
                        <Text style={{color: '#FCFCFC', fontSize: 22}}>Login</Text>
                    </TouchableOpacity>                    
                </View>            
            </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2A00A2',
        flex: 1,
        justifyContent: 'space-between',
    },
    image: {
        marginTop: 16
    },
    containerTexts: {
        margin: 30,
        width: '100%',
        alignItems: 'flex-start'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 40,
        color: '#FCFCFC'
    },
    containerButtons: {
        margin: 30,
        marginBottom: 100
    },
    btn: {
        borderRadius: 28,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16
    }
})
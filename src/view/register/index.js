import * as React from 'react';
import {View, Text, Image, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import logo from '../../assets/logo2.png';
import ButtonText from '../../components/buttonText';
import InputIcon from '../../components/inputIcon';

import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

export default class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            mail: "",
            password: ""
        }
    }

    onChangeHandler(field, value) {
        this.setState({
            [field]: value
        })
    }


    render() {
        return (
            <>
            <StatusBar backgroundColor='#FCFCFC' barStyle="dark-content" />
            
            <View style={styles.container}>
                <TouchableOpacity style={styles.btnBack} onPress={() => {this.props.navigation.pop()}}>
                    <Icon  name='chevron-left' size={22} color='#2A00A2'/>
                </TouchableOpacity>
                <View style={{alignItems: 'center', marginHorizontal: 30}}>
                    <Image source={logo} style={styles.image}/>
                    <View style={styles.containerTexts}>
                        <Text style={styles.textTitle}>Cadastro</Text>
                    </View>
                </View>

                <View  style={styles.form}>
                    <Text style={styles.text}>Crie sua conta para </Text>
                    <Text style={styles.text}>acessar o gerenciador de leitura</Text>
                    <View style={{marginBottom: 40}}>
                        <InputIcon 
                            label='E-mail' 
                            icon="envelope" 
                            value={this.state.email}
                            onChangeText={value => { this.onChangeHandler('email', value) }}
                        />
                        <InputIcon 
                            label='Senha' 
                            icon="lock" 
                            value={this.state.password}
                            onChangeText={value => { this.onChangeHandler('password', value) }}
                        />
                    </View>
                    <ButtonText label="Cadastrar" onPress={() => {
                        console.log('teste')
                    }} />
                </View>
            </View>
            </>
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FCFCFC',
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
    textTitle: {
        fontWeight: 'bold',
        fontSize: 40,
        color: '#2A00A2'
    },
    form: {
        marginHorizontal: 30,
        marginBottom: 100
    },
    text: {
        fontSize: 16,
        color: '#6E7191',
        lineHeight: 19,
        fontWeight: '500'
    },
    btnBack: {
        position: 'absolute',
        top: 30,
        left: 30
    }
})
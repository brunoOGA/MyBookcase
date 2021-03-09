import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, ActivityIndicator, Alert, StatusBar } from 'react-native';
import ButtonText from '../../components/buttonText';
import InputIcon from '../../components/inputIcon';

import Icon from 'react-native-vector-icons/FontAwesome';
// import firebase from 'firebase';

Icon.loadFont();

import logo from '../../assets/logo2.png';

export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            isLoading: false,
            message: ""
        }
    }
    /*
        componentDidMount() {
            var firebaseConfig = {
                apiKey: "AIzaSyDbw2xXqgWbLt_IhvsFVbStUizDXygKqkM",
                authDomain: "minhasseries-de2e6.firebaseapp.com",
                projectId: "minhasseries-de2e6",
                storageBucket: "minhasseries-de2e6.appspot.com",
                messagingSenderId: "539316043739",
                appId: "1:539316043739:web:dfdd111ea84d2a460271fe",
                measurementId: "G-6P3JTF4TNB"
            };
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);
    
        }
    */
    onChangeHandler(field, value) {
        this.setState({
            [field]: value
        })
    }

    processLogin(props) {
        /*
                this.setState({
                    isLoading: true,
                })
                const { email, password } = this.state;
        
                const loginUserSucess = user => {
                   
                }
        
                const loginUserFailed = error => {
                    this.setState({
                        message: this.getMessageByError(error.code)
                    });
                }
        */
        props.navigation.navigate('Menu')
        /* 
               firebase.auth()
                    .signInWithEmailAndPassword(email, password)
                    .then( props.navigation.navigate('Menu'))
                    .catch(error => {
                        if (error.code == "auth/user-not-found") {
                            Alert.alert(
                                "Usuário não encontrado",
                                "Deseja criar um novo usuário?",
                                [{
                                    text: "Não",
                                    onPress: () => {
                                        console.log('Usuário não quis criar nova conta.')
                                    }
                                }, {
                                    text: "Sim",
                                    onPress: () => {
                                        firebase
                                            .auth()
                                            .createUserWithEmailAndPassword(email, password)
                                            .then(loginUserSucess)
                                            .catch(loginUserFailed)
                                    }
                                }],
                                { cancelable: false }
                            );
                        }
                        loginUserFailed(error)
                    })
                    .then(() => {
                        this.setState({ isLoading: false })
                    })
        */
    }

    getMessageByError(code) {
        switch (code) {
            case "auth/user-not-found":
                return "Email inexistente."
            case "auth/wrong-password":
                return "Senha incorreta"
            default:
                return "Erro desconhecido"
        }
    }

    renderButton(props) {
        if (this.state.isLoading)
            return <ActivityIndicator />

        return (
            <ButtonText label="Entrar" onPress={() => this.processLogin(props)} />
        )

    }

    renderMessage() {
        const { message } = this.state;

        if (!message)
            return null;

        return (
            <View>
                <Text>{message}</Text>
            </View>
        )
    }

    render() {
        return (
            <>
                <StatusBar backgroundColor='#FCFCFC' barStyle="dark-content" />

                <View style={styles.container}>
                    <TouchableOpacity style={styles.btnBack} onPress={() => { this.props.navigation.pop() }}>
                        <Icon name='chevron-left' size={22} color='#2A00A2' />
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center', marginHorizontal: 30 }}>
                        <Image source={logo} style={styles.image} />
                        <View style={styles.containerTexts}>
                            <Text style={styles.textTitle}>Login</Text>
                        </View>
                    </View>

                    <View style={styles.form}>
                        <Text style={styles.text}>Faça seu login para</Text>
                        <Text style={styles.text}>começar a gerenciar sua leitura.</Text>
                        <View >
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

                        <View style={{
                            width: '100%', 
                            flexDirection: 'row', 
                            justifyContent: 'center', 
                            alignItems: 'center',
                            height: 40,
                            marginBottom: 8
                        }}>
                            <Text style={{
                                fontSize: 16,
                                color: '#06070D'
                            }}>Não possui conta? </Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                                <Text style={{
                                fontSize: 16,
                                color: '#2A00A2'
                            }}>Cadastra-se</Text>
                            </TouchableOpacity>
                        </View>

                        { this.renderButton(this.props)}
                        {this.renderMessage()}
                        
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
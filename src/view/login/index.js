import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, StatusBar, TouchableWithoutFeedback } from 'react-native';
import ButtonText from '../../components/buttonText';
import InputIcon from '../../components/inputIcon';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'firebase';

Icon.loadFont();

import logo from '../../assets/logo2.png';

export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            isLoading: false,
            message: "",
            secureText: true,
        }
    }



    onChangeHandler(field, value) {
        this.setState({
            [field]: value
        })
    }

    processLogin() {
        this.setState({ isLoading: true, message: '' })

        const { email, password } = this.state;

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(user => {
                this.props.navigation.navigate("Menu");
            })
            .catch(error => {
                this.setState({ message:  this.getMessageByError(error.code), password: '' })
            })
            .finally(() => {
                this.setState({ isLoading: false })
            })


    }

    getMessageByError(code) {
        switch(code) {
            case 'auth/user-not-found':
                return 'Suas credenciais de login não coincidem com uma conta em nosso sistema.';
            case 'auth/wrong-password':
                return 'Suas credenciais de login não coincidem com uma conta em nosso sistema.';
            default:
                return 'Erro desconhecido.'
        }
    }

    renderButton() {

        if (this.state.isLoading)
            return <ActivityIndicator size='large' color="#00BA88" style={{ height: 56 }} />

        return (
            <ButtonText label="Entrar" onPress={() => this.processLogin()} />
        )

    }

    renderMessage() {
        const { message } = this.state;

        if (!message)
            return null;

        return (
            <View>
                <Text style={{ color: '#ED2E7E' }}>{message}</Text>
            </View>
        )
    }

    render() {
        let emailRef, passwordRef;

        return (
            <>
                <KeyboardAwareScrollView>
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
                                    autoCorrect={false}
                                    autoCapitalize="none"
                                    keyboardType="email-address"
                                    label='E-mail'
                                    icon="envelope"
                                    value={this.state.email}
                                    onChangeText={value => { this.onChangeHandler('email', value) }}
                                    returnKeyType="next"
                                    inputRef={ref => emailRef = ref}
                                    type={'email'}
                                    onSubmitEditing={() => {
                                        passwordRef.focus()
                                    }}
                                />

                                <View style={{ position: 'relative' }}>
                                    <InputIcon
                                        label='Senha'
                                        icon="lock"
                                        value={this.state.password}
                                        autoCorrect={false}
                                        secureTextEntry={this.state.secureText}
                                        onChangeText={value => { this.onChangeHandler('password', value) }}
                                        inputRef={ref => passwordRef = ref}
                                        returnKeyType="send"
                                        onSubmitEditing={() => {
                                            this.processLogin();
                                        }}
                                        marginRight={50}
                                    />
                                    <View style={{ position: 'absolute', top: 16, right: 16 }}>
                                        <TouchableWithoutFeedback onPress={() => {
                                            this.onChangeHandler('secureText', !this.state.secureText)
                                        }} >
                                            {this.state.secureText ?
                                                <Icon name='eye' size={22} color='#2A00A2' />
                                                :
                                                <Icon name='eye-slash' size={22} color='#2A00A2' />
                                            }
                                        </TouchableWithoutFeedback>
                                    </View>

                                </View>
                                {this.renderMessage()}
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



                            {this.renderButton()}


                        </View>


                    </View>
                </KeyboardAwareScrollView>

            </>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FCFCFC',
        flexGrow: 1,
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
        marginBottom: 100,
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
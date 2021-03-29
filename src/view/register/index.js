import * as React from 'react';
import { View, Text, Image, StyleSheet, StatusBar, TouchableOpacity, ActivityIndicator, TouchableWithoutFeedback } from 'react-native';
import logo from '../../assets/logo2.png';
import ButtonText from '../../components/buttonText';
import InputIcon from '../../components/inputIcon';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import firebase from 'firebase';

import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

export default class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            confirmPassword: "",
            message: "",
            secureText: true,
            secureConfirmText: true
        }
    }

    onChangeHandler(field, value) {
        this.setState({
            [field]: value
        })
    }

    processRegister() {
        this.setState({ isLoading: true, message: '' })

        const { email, password, confirmPassword } = this.state;

        if(password != confirmPassword) {
            this.setState({  isLoading: false, message: 'Campo confirmar senha diferente do campo de senha.', confirmPassword: '' });
        } else {
            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(user => {
                    this.props.navigation.navigate("Login");
                })
                .catch(error => {
                    this.setState({ message: 'Erro no cadastro.', email: '', password: '', confirmPassword: '' })
                })
                .finally(() => {
                    this.setState({ isLoading: false })
                })
        }


    }

    renderButton() {

        if (this.state.isLoading)
            return <ActivityIndicator size='large' color="#00BA88" style={{ height: 56 }} />

        return (
            <ButtonText label="Cadastrar" onPress={() => this.processRegister()} />
        )

    }

    renderMessage() {
        const { message } = this.state;

        if (!message)
            return null;

        return (
            <View style={{marginBottom: 0}}>
                <Text style={{ color: '#ED2E7E' }}>{message}</Text>
            </View>
        )
    }


    render() {
        let emailRef, passwordRef, confirmPasswordRef;

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
                                <Text style={styles.textTitle}>Cadastro</Text>
                            </View>
                        </View>

                        <View style={styles.form}>
                            <Text style={styles.text}>Crie sua conta para </Text>
                            <Text style={styles.text}>acessar o gerenciador de leitura</Text>
                            <View style={{ marginBottom: 40 }}>
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
                                <View style={{position: 'relative'}}>
                                    <InputIcon
                                        label='Senha'
                                        icon="lock"
                                        value={this.state.password}
                                        secureTextEntry={this.state.secureText}
                                        onChangeText={value => { this.onChangeHandler('password', value) }}
                                        inputRef={ref => passwordRef = ref}
                                        returnKeyType="next"
                                        autoCorrect={false}
                                        onSubmitEditing={() => {
                                            confirmPasswordRef.focus()
                                        }}
                                        marginRight={50}
                                    />
                                    <View style={{position: 'absolute', top: 16, right: 16}}>
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

                                <View style={{position: 'relative'}}>
                                    <InputIcon
                                        label='Confirmar Senha'
                                        icon="lock"
                                        value={this.state.confirmPassword}
                                        secureTextEntry={this.state.secureConfirmText}
                                        onChangeText={value => { this.onChangeHandler('confirmPassword', value) }}
                                        inputRef={ref => confirmPasswordRef = ref}
                                        returnKeyType="send"
                                        autoCorrect={false}
                                        onSubmitEditing={() => {
                                            this.processRegister();
                                        }}
                                        marginRight={50}
                                    />
                                    <View style={{position: 'absolute', top: 16, right: 16}}>
                                        <TouchableWithoutFeedback onPress={() => {
                                            this.onChangeHandler('secureConfirmText', !this.state.secureConfirmText)
                                        }} >
                                            {this.state.secureConfirmText ?
                                                <Icon name='eye' size={22} color='#2A00A2' />
                                                :
                                                <Icon name='eye-slash' size={22} color='#2A00A2' />
                                            }
                                        </TouchableWithoutFeedback>
                                    </View>
                                    
                                </View>
                                {this.renderMessage()}
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
        paddingBottom: 50
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
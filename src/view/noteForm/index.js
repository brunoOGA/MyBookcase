import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import ButtonText from '../../components/buttonText';
import InputLabel from '../../components/inputLabel'
import Header from '../../components/header';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class NoteForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: '',
            note: {
                initialPage: '',
                finalPage: '',
                quote: '',
                note: '',
                title: ''
            }
        }
    }
    componentDidMount() {
        const { type, title } = this.props.route.params;
        if (type == 'update') {
            this.setState({
                type: 'update',
                note: {
                    ...this.props.route.params.note,
                    title
                }
            });
        } else {
            const { initialPage } = this.props.route.params;
            this.setState({
                note: {
                    ...this.state.note,
                    initialPage,
                    title
                }
            });
        }
    }

    onChangeHandler(field, value) {
        this.setState({
            note: {
                ...this.state.note,
                [field]: value
            }
        })
    }

    render() {
        let quoteRef, initialPageRef, finalPageRef, noteRef;

        return (
            
            <>
                <KeyboardAwareScrollView>
                    <StatusBar backgroundColor='#2A00A2' barStyle="light-content" />
                    <View style={{ zIndex: 10 }}>
                        {
                            this.state.type == 'update' ?
                                <Header title="Alterar Anotação" onPressItem={() => {
                                    this.props.navigation.pop()
                                }} />
                                :
                                <Header title="Nova Anotação" onPressItem={() => {
                                    this.props.navigation.pop()
                                }} />
                        }
                    </View>

                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>

                        <Text style={{ alignItems: 'flex-start', width: '100%', paddingHorizontal: 60, paddingBottom: 12, lineHeight: 30, fontSize: 26, fontWeight: 'bold' }}>{this.state.note.title}</Text>

                        <InputLabel label='Citação'
                            value={this.state.note.quote}
                            type="default"
                            onChangeText={value => this.onChangeHandler('quote', value)}
                            height={100}
                            textArea={true}
                            returnKeyType="next"
                            inputRef={ref => quoteRef = ref}
                            onSubmitEditing={() => {
                                initialPageRef.focus()
                            }}
                        />
                        <View style={{ width: 311 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                <InputLabel label='Página Inicial'
                                    value={this.state.note.initialPage}
                                    type="numeric"
                                    onChangeText={value => this.onChangeHandler('initialPage', value)}
                                    returnKeyType="next"
                                    inputRef={ref => initialPageRef = ref}
                                    onSubmitEditing={() => {
                                        finalPageRef.focus()
                                    }}
                                />
                                <InputLabel label='Página Final'
                                    value={this.state.note.finalPage}
                                    type="numeric"
                                    onChangeText={value => this.onChangeHandler('finalPage', value)}
                                    returnKeyType="next"
                                    inputRef={ref => finalPageRef = ref}
                                    onSubmitEditing={() => {
                                        noteRef.focus()
                                    }}
                                />
                            </View>
                            <InputLabel label='Observação'
                                value={this.state.note.note}
                                type="default"
                                onChangeText={value => this.onChangeHandler('note', value)}
                                height={280}
                                textArea={true}
                                returnKeyType="send"
                                inputRef={ref => noteRef = ref}
                                onSubmitEditing={() => {
                                    console.log('teste')
                                }}
                            />

                            {this.state.type == 'update' ?
                                <ButtonText label="Alterar" color="yellow" onPress={() => {
                                    console.log('teste')
                                }} />
                                :
                                <ButtonText label="Adicionar" style={{ width: 311 }} onPress={() => {
                                    console.log('teste')
                                }} />
                            }
                        </View>

                    </View>
                </KeyboardAwareScrollView>
            </>
        )
    }

}
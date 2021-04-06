import * as React from 'react';
import { View, Text, StatusBar, Alert } from 'react-native';
import ButtonText from '../../components/buttonText';
import InputLabel from '../../components/inputLabel'
import Header from '../../components/header';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { setField, saveAnnotation, setAllFields, resetForm } from '../../actions/annotation';
import { connect } from 'react-redux';

class NoteForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: '',
        }
    }
    
    async componentDidMount() {
        const { setAllFields, resetForm } = this.props;

        if (this.props.route.params && this.props.route.params.note) {
            console.log(this.props.route.params.note)
            this.setState({ type: 'update' })
            setAllFields(this.props.route.params.note)
        } else {
            resetForm(this.props.route.params.book);
        }

    }
/*
    onChangeHandler(field, value) {
        this.setState({
            note: {
                ...annotationForm,
                [field]: value
            }
        })
    }
*/

    render() {
        let quoteRef, initialPageRef, finalPageRef, noteRef;
        const { annotationForm, setField, saveAnnotation, navigation } = this.props;
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

                        <Text style={{ alignItems: 'flex-start', width: '100%', paddingHorizontal: 60, paddingBottom: 12, lineHeight: 30, fontSize: 26, fontWeight: 'bold' }}>{this.props.route.params.book.title}</Text>

                        <InputLabel label='Citação'
                            value={annotationForm.quote}
                            type="default"
                            onChangeText={value => setField('quote', value)}
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
                                    value={annotationForm.initialPage}
                                    type="numeric"
                                    onChangeText={value => setField('initialPage', value)}
                                    returnKeyType="next"
                                    inputRef={ref => initialPageRef = ref}
                                    onSubmitEditing={() => {
                                        finalPageRef.focus()
                                    }}
                                />
                                <InputLabel label='Página Final'
                                    value={annotationForm.finalPage}
                                    type="numeric"
                                    onChangeText={value => setField('finalPage', value)}
                                    returnKeyType="next"
                                    inputRef={ref => finalPageRef = ref}
                                    onSubmitEditing={() => {
                                        noteRef.focus()
                                    }}
                                />
                            </View>
                            <InputLabel label='Observação'
                                value={annotationForm.note}
                                type="default"
                                onChangeText={value => setField('note', value)}
                                height={280}
                                textArea={true}
                                returnKeyType="send"
                                inputRef={ref => noteRef = ref}
                                onSubmitEditing={async () => {
                                    try {
                                        await saveAnnotation(this.props.route.params.book, annotationForm);
                                        navigation.pop()
                                    } catch (error) {
                                        Alert.alert('Erro', error.message);
                                    }
                                }}
                            />

                            {this.state.type == 'update' ?
                                <ButtonText label="Alterar" color="yellow" onPress={async () => {
                                    try {
                                        await saveAnnotation(this.props.route.params.book, annotationForm);
                                        navigation.pop()
                                    } catch (error) {
                                        Alert.alert('Erro', error.message);
                                    }
                                }} />
                                :
                                <ButtonText label="Adicionar" style={{ width: 311 }} onPress={async () => {
                                  
                                    try {
                                        await saveAnnotation(this.props.route.params.book, annotationForm);
                                        navigation.pop()
                                    } catch (error) {
                                        Alert.alert('Erro', error.message);
                                    }
                                }} />
                            }
                        </View>

                    </View>
                </KeyboardAwareScrollView>
            </>
        )
    }

}


const mapStateToProps = (state) => {
    return ({
        annotationForm: state.annotationForm
    })
}

const mapDispatchToProps = {
    setField,
    saveAnnotation,
    setAllFields,
    resetForm
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
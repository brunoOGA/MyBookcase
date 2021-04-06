import * as React from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image, Alert, StyleSheet } from 'react-native';
import ButtonIcon from '../../components/buttonIcon';
import ButtonText from '../../components/buttonText';
import HeaderDrawNav from '../../components/headerDrawNav';
import InputLabel from '../../components/inputLabel';


import { RNCamera } from 'react-native-camera';

import { connect } from 'react-redux';
import { setField, saveBook, setAllFields, resetForm } from '../../actions';



class BookFormDraw extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: '',
            isLoading: false,
            isCamera: false,
        }
    }

    componentDidMount() {
        const { resetForm } = this.props;

        resetForm();
    }


    async requestExternalStorageAccess() {
        try {
            const permission = await PermissionsAndroid
                .request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);

            if (permission !== PermissionsAndroid.RESULTS.GRANTED) {
                Alert.alert('Permissão negada');
            }

        } catch (err) {
            console.log(err);
        }
    }

    viewCamera() {
        return (
            <View style={styles.container}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'Nós precisamos de sua permissão para usar a câmera',
                        buttonPositive: 'Aceito',
                        buttonNegative: 'Cancelar'
                    }}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permission to record audio',
                        message: 'Nós precisamos de sua permissão para gravar áudio',
                        buttonPositive: 'Aceito',
                        buttonNegative: 'Cancelar'
                    }}
                />
                <View>
                    <TouchableOpacity
                        style={styles.capture}
                        onPress={this.takePicture.bind(this)}>
                        <Text>Tirar foto!</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

    takePicture = async () => {
        if (this.camera) {
            const options = { quality: 0.5, base64: true, forceUpOrientation: true, fixOrientation: true };
            const data = await this.camera.takePictureAsync(options);

            if (data) {
                this.props.setField('cover', data.base64);

                this.setState({
                    isCamera: false,
                })
            }
        }
    }

    viewForm() {
        const { bookForm, setField, saveBook, navigation } = this.props;
        let titleRef, literaryGenreRef, authorRef, totalPagesRef, yearRef;

        return (
            <>
                <StatusBar backgroundColor='#2A00A2' barStyle="light-content" />
                <HeaderDrawNav title="Novo Livro" navigation={this.props.navigation} />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                    {
                        bookForm.cover ?
                            <TouchableOpacity onPress={() => {

                                Alert.alert(
                                    'Captura de imagem',
                                    'Abrir câmera?',
                                    [
                                        {
                                            text: "Não",
                                            style: "cancel",
                                        },
                                        {
                                            text: 'Sim',
                                            onPress: () => {
                                                this.setState({
                                                    isCamera: true,
                                                })
                                            }
                                        }
                                    ]
                                )

                            }}>
                                <View style={{ position: 'relative', bottom: 12 }}>
                                    <Image source={{ uri: `data:image/jpeg;base64,${bookForm.cover}` }} style={{ width: 121, height: 167, marginVertical: 6, marginLeft: 12, borderRadius: 4 }} />

                                    <View style={{ position: 'absolute', bottom: -8, right: -16 }}>
                                        <ButtonIcon type="camera" onPress={() => {

                                            Alert.alert(
                                                'Captura de imagem',
                                                'Abrir câmera?',
                                                [
                                                    {
                                                        text: "Não",
                                                        style: "cancel",
                                                    },
                                                    {
                                                        text: 'Sim',
                                                        onPress: () => {
                                                            this.setState({
                                                                isCamera: true,
                                                            })
                                                        }
                                                    }
                                                ]
                                            )

                                        }} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => {

                                Alert.alert(
                                    'Captura de imagem',
                                    'Abrir câmera?',
                                    [
                                        {
                                            text: "Não",
                                            style: "cancel",
                                        },
                                        {
                                            text: 'Sim',
                                            onPress: () => {
                                                this.setState({
                                                    isCamera: true,
                                                })
                                            }
                                        }
                                    ]
                                )

                            }}>
                                <View style={{ position: 'relative', bottom: 12 }}>
                                    <View style={{ width: 121, height: 167, marginVertical: 6, marginLeft: 12, borderRadius: 4, backgroundColor: '#EFF0F6', alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ color: '#A0A3BD', fontSize: 16 }}>Capa</Text>
                                    </View>

                                    <View style={{ position: 'absolute', bottom: -8, right: -16 }}>
                                        <ButtonIcon type="camera" onPress={() => {

                                            Alert.alert(
                                                'Captura de imagem',
                                                'Abrir câmera?',
                                                [
                                                    {
                                                        text: "Não",
                                                        style: "cancel",
                                                    },
                                                    {
                                                        text: 'Sim',
                                                        onPress: () => {
                                                            this.setState({
                                                                isCamera: true,
                                                            })
                                                        }
                                                    }
                                                ]
                                            )

                                        }} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                    }
                    <InputLabel label='Título'
                        value={bookForm.title}
                        type="default"
                        onChangeText={value => setField('title', value)}
                        returnKeyType="next"
                        inputRef={ref => titleRef = ref}
                        onSubmitEditing={() => {
                            literaryGenreRef.focus()
                        }}
                    />
                    <InputLabel label='Gênero literário'
                        value={bookForm.literaryGenre}
                        type="default"
                        onChangeText={value => setField('literaryGenre', value)}
                        returnKeyType="next"
                        inputRef={ref => literaryGenreRef = ref}
                        onSubmitEditing={() => {
                            authorRef.focus()
                        }}
                    />
                    <InputLabel label='Autor'
                        value={bookForm.author}
                        type="default"
                        onChangeText={value => setField('author', value)}
                        returnKeyType="next"
                        inputRef={ref => authorRef = ref}
                        onSubmitEditing={() => {
                            totalPagesRef.focus()
                        }}
                    />
                    <View style={{ width: 311 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                            <InputLabel label='Nº de Páginas'
                                value={bookForm.totalPages}
                                type="numeric"
                                onChangeText={value => setField('totalPages', value)}
                                returnKeyType="next"
                                inputRef={ref => totalPagesRef = ref}
                                onSubmitEditing={() => {
                                    yearRef.focus()
                                }}
                            />
                            <InputLabel label='Ano'
                                value={bookForm.year}
                                type="numeric"
                                onChangeText={value => setField('year', value)}
                                returnKeyType="send"
                                inputRef={ref => yearRef = ref}
                                onSubmitEditing={async () => {
                                    this.setState({ isLoading: true })
                                    try {
                                        await saveBook(bookForm);
                                        navigation.replace('Menu');
                                    } catch (error) {
                                        Alert.alert('Erro', error.message);
                                    } finally {
                                        this.setState({ isLoading: false })
                                    }
                                }}
                            />
                        </View>

                        {this.state.isLoading ?
                            <ActivityIndicator size='large' color="#2A00A2" style={{ height: 56 }} />
                            :
                            <ButtonText label="Adicionar" onPress={async () => {
                                this.setState({ isLoading: true })
                                try {
                                    await saveBook(bookForm);
                                    navigation.replace('Menu');
                                } catch (error) {
                                    Alert.alert('Erro', error.message);
                                } finally {
                                    this.setState({ isLoading: false })
                                }

                            }} />
                        }
                    </View>

                </View>

            </>
        )
    }


    render() {

        if (this.state.isCamera) {
            return (this.viewCamera())
        }

        return (this.viewForm())


    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20
    }
});

const mapStateToProps = (state) => {
    return ({
        bookForm: state.bookForm
    })
}

const mapDispatchToProps = {
    setField,
    saveBook,
    setAllFields,
    resetForm
}

export default connect(mapStateToProps, mapDispatchToProps)(BookFormDraw);
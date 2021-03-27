import * as React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import ButtonIcon from '../../components/buttonIcon';
import ButtonText from '../../components/buttonText';
import HeaderDrawNav from '../../components/headerDrawNav';
import InputLabel from '../../components/inputLabel';


export default class BookFormDraw extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: '',
            book: {
                title: '',
                author: '',
                totalPages: '',
                year: '',
                literaryGenre: '',
                cover: ''
            }
        }
    }

    onChangeHandler(field, value) {
        this.setState({
            book: {
                ...this.state.book,
                [field]: value
            }
        })
    }

    render() {


        return (
            <>
                <StatusBar backgroundColor='#2A00A2' barStyle="light-content" />
                <HeaderDrawNav title="Novo Livro" navigation={this.props.navigation}/>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                    <TouchableOpacity onPress={() => { console.log("OLA") }}>
                        <View style={{ position: 'relative', bottom: 12 }}>
                            <View style={{ width: 121, height: 167, marginVertical: 6, marginLeft: 12, borderRadius: 4, backgroundColor: '#EFF0F6', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: '#A0A3BD', fontSize: 16 }}>Capa</Text>
                            </View>

                            <View style={{ position: 'absolute', bottom: -8, right: -16 }}>
                                <ButtonIcon type="camera" onPress={() => { console.log("OLA") }} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <InputLabel label='Título'
                        value={this.state.book.title}
                        type="default"
                        onChangeText={value => this.onChangeHandler('title', value)}
                    />
                    <InputLabel label='Gênero literário'
                        value={this.state.book.literaryGenre}
                        type="default"
                        onChangeText={value => this.onChangeHandler('literaryGenre', value)}
                    />
                    <InputLabel label='Autor'
                        value={this.state.book.author}
                        type="default"
                        onChangeText={value => this.onChangeHandler('author', value)}
                    />
                    <View style={{ width: 311 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                            <InputLabel label='Nº de Páginas'
                                value={this.state.book.totalPages}
                                type="numeric"
                                onChangeText={value => this.onChangeHandler('totalPages', value)}
                            />
                            <InputLabel label='Ano'
                                value={this.state.book.year}
                                type="numeric"
                                onChangeText={value => this.onChangeHandler('year', value)}
                            />
                        </View>

                        <ButtonText label="Adicionar" style={{ width: 311 }} onPress={() => {
                            console.log('teste')
                        }} />
                    </View>

                </View>

            </>
        )
    }

}
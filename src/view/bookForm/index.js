import * as React from 'react';
import { View, Text, Button, TouchableOpacity, StatusBar, Image } from 'react-native';
import BookDetails from '../../components/bookDetails';
import BookList from '../../components/bookList';
import ButtonIcon from '../../components/buttonIcon';
import ButtonText from '../../components/buttonText';
import FloatingButton from '../../components/floatingButton';
import HeaderDrawNav from '../../components/headerDrawNav';
import InputIcon from '../../components/inputIcon';
import InputLabel from '../../components/inputLabel'
import BookListItem from '../../components/BookListItem';
import Note from '../../components/note';
import Notes from '../../components/notes';
import Header from '../../components/header';
import capa from '../../assets/livro.png';


export default class BookForm extends React.Component {
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
                cover: 'https://ik.imagekit.io/nfoyn1wc6g/livro_JY15bTJA0.png'
            }
        }
    }
    componentDidMount() {
        const { type } = this.props.route.params;
        if (type == 'update') {
            this.setState({
                type: 'update',
                book: this.props.route.params.book
            });
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
                {
                    this.state.type == 'update' ?
                        <Header title="Alterar Livro" onPressItem={() => {
                            this.props.navigation.pop()
                        }} />
                        :
                        <Header title="Novo Livro" onPressItem={() => {
                            this.props.navigation.pop()
                        }} />
                }
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                {
                    this.state.type == 'update' ?
                    <TouchableOpacity onPress={() => { console.log("OLA") }}>
                        <View style={{ position: 'relative', bottom: 12 }}>
                            <Image source={{ uri: this.state.book.cover }} style={{ width: 121, height: 167, marginVertical: 6, marginLeft: 12, borderRadius: 4 }} />

                            <View style={{ position: 'absolute', bottom: -8, right: -16 }}>
                                <ButtonIcon type="camera" onPress={() => { console.log("OLA") }} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={() => { console.log("OLA") }}>
                        <View style={{ position: 'relative', bottom: 12 }}>
                            <View style={{ width: 121, height: 167, marginVertical: 6, marginLeft: 12, borderRadius: 4, backgroundColor: '#EFF0F6', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{color: '#A0A3BD', fontSize: 16}}>Capa</Text>
                            </View>

                            <View style={{ position: 'absolute', bottom: -8, right: -16 }}>
                                <ButtonIcon type="camera" onPress={() => { console.log("OLA") }} />
                            </View>
                        </View>
                    </TouchableOpacity>
                }
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

            </>
        )
    }

}
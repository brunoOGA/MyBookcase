import * as React from 'react';
import {View, Text, Button, ScrollView, StatusBar} from 'react-native';
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


export default class Lixo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            genero: "",
            titulo: "",
            paginaInicial: "",
            results: {
                books: [
                {
                    id: '1',
                    title: 'O livro',
                    author: 'Fulano Primeiro',
                    totalPages: '100',
                    currentPage: '100',
                    annotations: '5',
                    year: '2015',
                    literaryGenre: 'Romance'
                },
                {
                    id: '2',
                    title: 'O livro',
                    author: 'Fulano Primeiro',
                    totalPages: '100',
                    currentPage: '75',
                    annotations: '3',
                    year: '2015',
                    literaryGenre: 'Romance'
                },
                {
                    id: '3',
                    title: 'O livro',
                    author: 'Fulano Primeiro',
                    totalPages: '100',
                    currentPage: '50',
                    annotations: '2',
                    year: '2015',
                    literaryGenre: 'Romance'
                },
                {
                    id: '4',
                    title: 'O livro',
                    author: 'Fulano Primeiro',
                    totalPages: '100',
                    currentPage: '25',
                    annotations: '1',
                    year: '2015',
                    literaryGenre: 'Romance'
                },
                {
                    id: '5',
                    title: 'O livro',
                    author: 'Fulano Primeiro',
                    totalPages: '100',
                    currentPage: '0',
                    annotations: '0',
                    year: '2015',
                    literaryGenre: 'Romance'
                }
            ]},
            book: {
                title: 'O livro',
                author: 'Fulano Primeiro',
                totalPages: '100',
                currentPage: '20',
                annotations: '1',
                year: '2015',
                literaryGenre: 'Romance'
            }
            
        }
    }



    onChangeHandler(field, value) {
        this.setState({
            [field]: value
        })
    }

    render() {
        return (
            <View style={{backgroundColor: '#00FF7F'}}>
                <StatusBar backgroundColor='#2A00A2' barStyle="light-content" />
                <HeaderDrawNav title="Cart" navigation={this.props.navigation}/>
                <ScrollView>
                <View style={{backgroundColor: '#00FF7F',  margin: 30, marginBottom: 500}}>
                   <Text> TESTE </Text>
                   
                </View>
                </ScrollView>
                <FloatingButton type="book"/>
            </View>
        )
    }
    
}
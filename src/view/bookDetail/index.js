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
import Notes from '../../components/notes';
import Header from '../../components/header';


export default class BookDetail extends React.Component {


    render() {
        
        const { book } = this.props.route.params;

        const {currentPage, title} = book;

        return (
            <>
                <StatusBar backgroundColor='#2A00A2' barStyle="light-content" />
                <Header title="Livro" onPressItem={() => {
                    this.props.navigation.pop()
                }} />
                
                <ScrollView>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <BookDetails book={book} navigation={this.props.navigation} />
                    <Notes notes={book.annotations} navigation={this.props.navigation} title={title} />
                </View>
                
                </ScrollView>
                
                <FloatingButton type="note" onPress={() => {
                    this.props.navigation.navigate('NoteForm', {type: 'create', initialPage: currentPage, title})
                }}/>
            </>
        )
    }
    
}
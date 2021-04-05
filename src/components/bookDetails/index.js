import React from 'react';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ButtonIcon from '../buttonIcon';
import Line from '../line'
import CurrentPage from '../currentPage';

Icon.loadFont();

export default class BookDetails extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        const { book, navigation, ...props } = this.props;

        return (
            <View {...props} style={styles.card}>
                <View style={styles.header}>
                    <Text style={styles.title}>{book.title}</Text>
                    <View style={styles.buttons}>
                        <ButtonIcon type="change" onPress={() => {
                            navigation.navigate('BookForm', {type: 'update', book})
                        }} />
                        <ButtonIcon type="delete" onPress={() => {
                             Alert.alert(
                                "Confirmação",
                                "Tem certeza que deseja excluir?",
                                [
                                  {
                                    text: "Não",
                                    onPress: () => console.log('n'),
                                    style: "cancel",
                                  },
                                  {
                                    text: "Sim",
                                    onPress: () => console.log('remover'),
                                  },
                                ],
                              );
                        }} />
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={{ uri: `data:image/jpeg;base64,${book.cover}` }} style={{width: 121, height: 167, marginVertical: 8, borderRadius: 4}}/>
                    </View>
                    <Line label={'Gênero literário: '}>
                        {book.literaryGenre}
                    </Line>
                    <Line label={'Autor: '}>
                        {book.author}
                    </Line>
                    <Line label={'Nº de Páginas: '}>
                        {book.totalPages}
                    </Line>
                    <Line label={'Ano: '}>
                        {book.year}
                    </Line>
                    <CurrentPage currentPage={book.currentPage} totalPages={book.totalPages} />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#2A00A2',
        width: '100%',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16
    },
    card: {
        width: 356,
        borderRadius: 16,
        backgroundColor: '#FFFFFF',
        elevation: 1,
        alignItems: 'center',
        marginVertical: 8
    },
    content: {
        margin: 12,
    },
    text: {
        color: '#14142B',
        fontSize: 22,
        marginBottom: 8
    },
    title: {
        fontWeight: 'bold',
        fontSize: 28,
        marginVertical: 8,
        color: '#ffffff',
        marginLeft: 16
    },
    buttons: {
        flexDirection: 'row'
    }
});

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

export default class BookListItem extends React.Component {

    render() {
        const { book, onPressItem, ...props } = this.props;
        const percentage = {
            fontSize: 16
        }
        let percentageText;
        const aux = Math.round((book.currentPage / book.totalPages) * 100);

        if (aux == 0) {
            percentage.color = '#C30052',
                percentageText = 'Não lido'
        } else if (aux < 50) {
            percentage.color = '#C30052',
                percentageText = aux + '%'
        }
        else if (aux < 75) {
            percentage.color = '#946200',
                percentageText = aux + '%'
        } else if (aux == 100) {
            percentage.color = '#00966D',
                percentageText = 'Finalizado'
        } else {
            percentage.color = '#00966D',
                percentageText = aux + '%'
        }

        return (
            <TouchableOpacity {...props} style={styles.button} onPress={() => {
                onPressItem({book})
            }}>
                <Image source={{ uri: `data:image/jpeg;base64,${book.cover}` }} style={{ width: 90, height: 126, marginVertical: 6, marginLeft: 12, borderRadius: 4 }} />
                <View style={styles.content}>
                    <Text style={styles.title}>{book.title}</Text>
                    <Text style={styles.text}>{book.author}</Text>
                    {
                        /*
                        book.annotations.length == 1 ?
                            <Text style={styles.text}>{book.annotations.length} anotação</Text>
                            :
                            <Text style={styles.text}>{book.annotations.length} anotações</Text>
                        */
                    }
                    <Text style={percentage}>{percentageText}</Text>
                </View>
                <Icon name='chevron-right' size={16} color='#4E4B66' style={{ marginRight: 40 }} />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        width: 356,
        height: 138,
        borderRadius: 16,
        backgroundColor: '#FFFFFF',
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8
    },
    content: {
        margin: 12,
        flex: 2
    },
    text: {
        color: '#838386',
        fontSize: 16,
        marginBottom: 8
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 8
    }
});

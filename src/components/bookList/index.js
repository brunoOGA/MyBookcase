import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import BookListItem from '../BookListItem';

export default class BookList extends React.Component {

    render() {
        const { books, onPressItem } = this.props;
        
        return (
                <FlatList 
                    style={styles.container} 
                    data={books}
                    renderItem={ ({item}) => (
                        <BookListItem book={item} onPressItem={onPressItem}/>
                    )}
                    keyExtractor={ (item) => item.id}
                />
        );
    }  
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7F7FC',
    }
})

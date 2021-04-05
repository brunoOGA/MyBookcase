import React from 'react';
import { StyleSheet, View } from 'react-native';
import Note from '../note';

export default class Notes extends React.Component {
    renderList(lista, navigation, book) {
        const notes = lista.map(item => {
            return <Note note={item} key={item.id} navigation={navigation} book={book}/>
        })

        return notes;
    }
    

    render() {
        const { notes, navigation, book } = this.props;
         /*
        <FlatList 
        style={styles.container} 
        data={notes}
        renderItem={ ({item}) => (
            <Note note={item} />
        )}
        keyExtractor={ (item) => item.id}
        />
        */
    
        
        return (
             <View>
                 {this.renderList(notes, navigation, book)}
             </View>
        );
    }  
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7F7FC',
    }
})

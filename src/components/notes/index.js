import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Note from '../note';

export default class Notes extends React.Component {
    renderList(lista, navigation, title) {
        const notes = lista.map(item => {
            return <Note note={item} key={item.id} navigation={navigation} title={title}/>
        })

        return notes;
    }
    

    render() {
        const { notes, navigation, title } = this.props;
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
                 {this.renderList(notes, navigation, title)}
             </View>
        );
    }  
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7F7FC',
    }
})
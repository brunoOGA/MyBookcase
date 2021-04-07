import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import Note from '../note';

export default class Notes extends React.Component {

    render() {
        const { notes, navigation, book } = this.props;
        return (
            <FlatList
                style={styles.container}
                data={notes}
                renderItem={({ item }) => (
                    <Note note={item} navigation={navigation} book={book} />
                )}
                keyExtractor={(item) => item.id}
            />



        );
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7F7FC',
    }
})

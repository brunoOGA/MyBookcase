import * as React from 'react';
import { View, StatusBar, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import BookList from '../../components/bookList';
import FloatingButton from '../../components/floatingButton';
import HeaderDrawNav from '../../components/headerDrawNav';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import { watchBooks } from '../../actions';

Icon.loadFont();

class Bookcase extends React.Component {


     componentDidMount() {
         this.props.watchBooks();
    }


    onChangeHandler(field, value) {
        this.setState({
            [field]: value
        })
    }

    render() {
        return (
            <>
                <StatusBar backgroundColor='#2A00A2' barStyle="light-content" />
                <HeaderDrawNav title="Estante" navigation={this.props.navigation}
                />
                <View style={styles.container} >
                    
                    <BookList
                        books={this.props.books}
                        onPressItem={(parameters) => {
                            this.props.navigation.navigate('BookDetail', parameters)
                        }}
                    />
                </View>
                <FloatingButton type="book" onPress={() => {
                    /* this.setState({
                         auxBooks: this.props.books,
                     }) */
                    this.props.navigation.navigate('BookForm', { type: 'create' })
                }} />
            </>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7F7FC',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 16,
    },
    input: {
        borderRadius: 4,
        color: '#06070D',
        fontSize: 16,
        backgroundColor: '#fff',
        elevation: 3,
        height: 56,
        flex: 1,
        paddingHorizontal: 20
    },
    button: {
        width: 56,
        height: 56,
        backgroundColor: '#1CC8EE',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        marginLeft: 4
    }
})

const mapStateToProps = state => {
    const { listaBooks } = state;

    if (listaBooks === null) {
        return { books: listaBooks };
    }

    const keys = Object.keys(listaBooks);
    const listaBooksWidhId = keys.map(key => {
        return { ...listaBooks[key], id: key }
    })

    return { books: listaBooksWidhId };
}

export default connect(mapStateToProps, { watchBooks })(Bookcase);
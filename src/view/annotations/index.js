import * as React from 'react';
import { View, StatusBar, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';

import FloatingButton from '../../components/floatingButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import Notes from '../../components/notes';
import Header from '../../components/header';

import { connect } from 'react-redux';
import { watchAnnotations } from '../../actions/annotation';

Icon.loadFont();

class Annotations extends React.Component {

    componentDidMount() {
        this.props.watchAnnotations(this.props.route.params.book);
    }



    render() {

        const { book } = this.props.route.params;

        return (
            <>
                <StatusBar backgroundColor='#2A00A2' barStyle="light-content" />
                <Header title="Anotações" onPressItem={() => {
                    this.props.navigation.pop();
                }} />
                <View style={styles.container} >
                    {this.props.annotations &&
                        <Notes notes={this.props.annotations} navigation={this.props.navigation} book={book} />
                    }
                </View>
                <FloatingButton type="note" onPress={() => {
                    this.props.navigation.navigate('NoteForm', { type: 'create', book })
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
    const { listaAnnotations } = state;

    if(listaAnnotations === null) {
        return {annotations: listaAnnotations};
    }

    const keys = Object.keys(listaAnnotations);
    const listaAnnotationsWidhId = keys.map(key => {
        return { ...listaAnnotations[key], id: key }
    })

    return { annotations: listaAnnotationsWidhId };
}

export default connect(mapStateToProps, { watchAnnotations })(Annotations);
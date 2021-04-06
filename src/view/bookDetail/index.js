import * as React from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
import BookDetails from '../../components/bookDetails';
import FloatingButton from '../../components/floatingButton';
import Notes from '../../components/notes';
import Header from '../../components/header';

import { connect } from 'react-redux';
import { watchAnnotations } from '../../actions/annotation';


class BookDetail extends React.Component {

    componentDidMount() {
        this.props.watchAnnotations(this.props.route.params.book);
    }

    render() {

        const { book } = this.props.route.params;

        return (
            <>
                <StatusBar backgroundColor='#2A00A2' barStyle="light-content" />
                <Header title="Livro" onPressItem={() => {
                    this.props.navigation.replace('Menu');
                }} />

                <ScrollView>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <BookDetails book={book} navigation={this.props.navigation} />
                        {this.props.annotations &&
                            <Notes notes={this.props.annotations} navigation={this.props.navigation} book={book} />
                        }
                    </View>

                </ScrollView>

                <FloatingButton type="note" onPress={() => {
                    this.props.navigation.navigate('NoteForm', { type: 'create', book })
                }} />
            </>
        )
    }

}

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

export default connect(mapStateToProps, { watchAnnotations })(BookDetail);
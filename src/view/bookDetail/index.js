import * as React from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
import BookDetails from '../../components/bookDetails';
import Header from '../../components/header';

import { connect } from 'react-redux';
import { watchAnnotations } from '../../actions/annotation';
import ButtonText from '../../components/buttonText';


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
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                        <BookDetails book={book} navigation={this.props.navigation} />
                    </View>
                    <View style={{  paddingHorizontal: 32}} >
                    <ButtonText label="Anotações" onPress={() => {
                            this.props.navigation.navigate('Annotations', { book });
                        }} />
                    </View>
                    
                </ScrollView>



            </>
        )
    }

}

const mapStateToProps = state => {
    const { listaAnnotations } = state;

    if (listaAnnotations === null) {
        return { annotations: listaAnnotations };
    }

    const keys = Object.keys(listaAnnotations);
    const listaAnnotationsWidhId = keys.map(key => {
        return { ...listaAnnotations[key], id: key }
    })

    return { annotations: listaAnnotationsWidhId };
}

export default connect(mapStateToProps, { watchAnnotations })(BookDetail);
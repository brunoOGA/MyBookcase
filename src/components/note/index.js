import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import ButtonIcon from '../buttonIcon';

import {connect} from 'react-redux';
import {deleteAnnotation} from '../../actions/annotation';

Icon.loadFont();

class Note extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
        }
    }

    render() {
        
        const { note, navigation, book } = this.props;

        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => {
                    this.setState({
                        open: !this.state.open
                    })
                }}>
                    <View >
                        <View style={{width: '100%'}}>
                            <View style={styles.header}>
                                <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 12}}>
                                    <Icon name='sticky-note' size={32} color='#fff' />
                                    <Text style={styles.title}>p. {note.initialPage}{note.finalPage && -note.finalPage}</Text>
                                </View>
                                <View style={styles.buttons}>
                                    <ButtonIcon type="change" onPress={() => {
                                         navigation.navigate('NoteForm', {type: 'update', book, note})
                                    }} />
                                    <ButtonIcon type="delete" onPress={async () => {
                                       await this.props.deleteAnnotation(book, note);
                                    }} />
                                </View>
                            </View>
                            <View style={{margin: 15}}>
                                <Text style={styles.heading}>Citação: </Text>
                                <Text style={styles.citacao}>{note.quote}</Text>
                                <View style={{width: '100%', alignItems: 'center', marginTop: 8}}>
                                    {
                                        this.state.open ?
                                        <Icon name='chevron-up' size={16} color='#4E4B66' />
                                        :
                                        <Icon name='chevron-down' size={16} color='#4E4B66' />
                                    }
                                </View>
                            </View>
                            
                        </View>
                        
                        { this.state.open && <View style={{marginHorizontal: 15, position: 'relative', top: -15}}>
                            <Text style={styles.heading}>Observação: </Text>
                            <Text style={styles.body}>
                                {note.note}
                            </Text>
                        </View>}
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#fff',
        marginVertical: 8,
        borderRadius: 16 ,
        width: 356
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#2A00A2',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        width: '100%'
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
    },
    heading: {
        fontSize: 22,
        fontWeight: '500',
        color: '#1CC8EE',
        marginLeft: 15
    },
    citacao: {
        fontSize: 22,
        fontStyle: 'italic',
        width: 272,
        borderLeftWidth: 4,
        borderColor: '#C4C4C4',
        paddingLeft: 20,
        marginLeft: 15
    },
    body: {
        fontSize: 22,
        marginHorizontal: 15,
        textAlign: 'justify'
    },


})

export default connect(null, {deleteAnnotation})(Note);
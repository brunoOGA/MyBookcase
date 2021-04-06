import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { setField, saveCurrentPage, setAllFields } from '../../actions';


Icon.loadFont();

class CurrentPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentPage: '0',
        }
    }

    componentDidMount() {
        this.setState({
            currentPage: this.props.currentPage
        })

        this.props.setAllFields(this.props.book)
    }
    

    onChangeHandler(value) {
        this.setState({
            currentPage: value
        })
    }

    async onChangeMinusTen(value) {
        let aux = Number(value) - 10;
        if(aux < 0)
            aux = 0;

        this.setState({
            currentPage: String(aux)
        })
        
        await this.props.setField('currentPage', String(aux));
        await this.props.saveCurrentPage(this.props.bookForm);
    }

    async onChangeMinusOne(value) {
        let aux = Number(value) - 1;
        if(aux < 0)
            aux = 0;

        this.setState({
            currentPage: String(aux)
        })
        
        await this.props.setField('currentPage', String(aux));
        await this.props.saveCurrentPage(this.props.bookForm);
    }

    async onChangePlusTen(value) {
        let aux = Number(value) + 10;
        if(aux > this.props.totalPages)
            aux = this.props.totalPages;

        this.setState({
            currentPage: String(aux)
        })
        
        await this.props.setField('currentPage', String(aux));
        await this.props.saveCurrentPage(this.props.bookForm);
    }
s
    async onChangePlusOne(value) {
        let aux = Number(value) + 1;
        if(aux > this.props.totalPages)
            aux = this.props.totalPages;

        this.setState({
            currentPage: String(aux)
        })

        await this.props.setField('currentPage', String(aux));
        await this.props.saveCurrentPage(this.props.bookForm);
    }

    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 22, fontWeight: 'bold', marginBottom: 8}}>Página Atual</Text>
                <View style={{flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity style={styles.buttonSubtraction} onPress={async () => {this.onChangeMinusTen(this.state.currentPage)}} >
                        <Text style={styles.buttonText}>-10</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.buttonSubtraction}onPress={async () => {this.onChangeMinusOne(this.state.currentPage)}} >
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                    <TextInput 
                        style={styles.textInput} 
                        value={this.state.currentPage}
                        onChangeText={value => { this.onChangeHandler(value) }}
                        editable={false}
                    />
                    <TouchableOpacity style={styles.buttonPlus} onPress={async () => {this.onChangePlusOne(this.state.currentPage)}}  >
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.buttonPlus} onPress={async () => {this.onChangePlusTen(this.state.currentPage)}} >
                        <Text style={styles.buttonText}>+10</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonText: {
        color: '#14142B',
        fontSize: 20,
        fontWeight: 'bold'
    },
    buttonSubtraction: {
        borderRadius: 22,
        backgroundColor: '#FF84B7',
        alignItems: 'center',
        justifyContent: 'center',
        height: 44,
        width: 44,
        marginRight: 8,
        elevation: 1
    },
    buttonPlus: {
        borderRadius: 22,
        backgroundColor: '#34EAB9',
        alignItems: 'center',
        justifyContent: 'center',
        height: 44,
        width: 44,
        marginLeft: 8,
        elevation: 1
    },
    textInput: {
        backgroundColor: "#EFF0F6", 
        borderRadius: 4, 
        width: 54, 
        height: 40,
        fontSize: 16,
        color: '#14142B',
        paddingLeft: 12
      }
})

const mapStateToProps = (state) => {
    return ({
        bookForm: state.bookForm
    })
}

const mapDispatchToProps = {
    setField,
    saveCurrentPage,
    setAllFields
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentPage);
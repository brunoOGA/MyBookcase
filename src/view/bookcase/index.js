import * as React from 'react';
import {View, StatusBar, TextInput, TouchableOpacity, StyleSheet, Keyboard} from 'react-native';
import BookList from '../../components/bookList';
import FloatingButton from '../../components/floatingButton';
import HeaderDrawNav from '../../components/headerDrawNav';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import { watchBooks } from '../../actions';

Icon.loadFont();

class Bookcase extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            filter: '',
            auxBooks: [],
            results: {
                books: [
                {
                    id: '1',
                    title: 'O livro 1',
                    author: 'Fulano Primeiro',
                    totalPages: '100',
                    currentPage: '100',
                    year: '2015',
                    literaryGenre: 'Romance',
                    cover: 'https://ik.imagekit.io/nfoyn1wc6g/livro_JY15bTJA0.png',
                    annotations: [
                        {
                            id: '1',
                            initialPage: '11',
                            finalPage: '12',
                            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis porta ex. Integer est mauris, ornare sed euismod vitae, posuere vel arcu. Curabitur sodales efficitur nulla eget bibendum. Fusce vulputate purus non sem vehicula malesuada. Sed vehicula euismod velit, sodales blandit metus molestie in. Nunc at viverra dolor.',
                            note: 'Integer mi justo, convallis in euismod ac, mattis nec justo. Nunc in varius mauris, id dapibus orci. Suspendisse finibus molestie libero id aliquam. Donec quis elit quis ex efficitur eleifend at quis arcu. In rutrum metus in varius laoreet. Donec nec massa nec sem aliquet volutpat ac in turpis. Integer sodales est nec auctor accumsan. Pellentesque feugiat volutpat ante, sit amet pharetra purus viverra sit amet. Cras sit amet rutrum erat. Aenean aliquet ex felis, a euismod turpis vestibulum et.'  
                        },
                        {
                            id: '2',
                            initialPage: '20',
                            finalPage: '22', 
                            quote: 'Donec egestas nulla vitae turpis dapibus, a ullamcorper risus finibus. Quisque mattis turpis non nulla tempor posuere. Praesent efficitur vitae enim eget tempor. Nullam varius vitae augue non tincidunt. In efficitur dolor tortor, vel porta eros porta sit amet. Vivamus tempus vitae diam ac vulputate.',
                            note: 'Proin diam odio, lacinia sed nulla eget, ornare facilisis est. Sed nec arcu in nulla ultrices placerat. Praesent ultricies vel tellus ac hendrerit. Phasellus tristique sem at magna congue maximus. Suspendisse vitae risus ante. Nam nisl ante, maximus eget orci eu, sagittis rhoncus ante. Mauris massa neque, porta sit amet purus sed, ultricies sagittis est.'
                        },
                        {
                            id: '3',
                            initialPage: '80',
                            finalPage: '',
                            quote: 'Nullam eu nibh vulputate, bibendum tellus vel, sagittis ex. Sed auctor, tortor et commodo efficitur, purus ligula dapibus libero, ut consequat augue metus in nisl. Morbi et erat eget mauris ornare condimentum vel vel turpis. Morbi auctor vehicula vulputate. Nullam blandit ultricies viverra. Maecenas sed viverra turpis. ',
                            note: 'Etiam lacus lectus, lacinia id accumsan id, faucibus id arcu. Nulla et ultrices est. Aliquam vitae augue ultrices, viverra sapien euismod, elementum libero. Quisque enim lacus, scelerisque a condimentum sit amet, mattis nec velit. Cras molestie suscipit nisi, eu auctor ligula eleifend eu. Pellentesque velit neque, pulvinar a egestas dignissim, pellentesque quis diam. Curabitur nec vestibulum ligula. Donec auctor imperdiet est, et accumsan turpis fringilla at. Quisque vel tempor nulla. Aliquam dapibus euismod nunc, eget facilisis purus tristique id. Etiam id interdum tortor, ut posuere nulla. Sed vel velit ut elit auctor sagittis at in libero. Sed a lorem leo. Praesent id nibh at urna placerat volutpat eu a nibh.'
                        }
                    ]
                },
                {
                    id: '2',
                    title: 'O livro 2',
                    author: 'Fulano Primeiro',
                    totalPages: '100',
                    currentPage: '75',
                    year: '2015',
                    literaryGenre: 'Romance',
                    cover: 'https://ik.imagekit.io/nfoyn1wc6g/livro_JY15bTJA0.png',
                    annotations: [
                        {
                            id: '1',
                            initialPage: '11',
                            finalPage: '12',
                            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis porta ex. Integer est mauris, ornare sed euismod vitae, posuere vel arcu. Curabitur sodales efficitur nulla eget bibendum. Fusce vulputate purus non sem vehicula malesuada. Sed vehicula euismod velit, sodales blandit metus molestie in. Nunc at viverra dolor.',
                            note: 'Integer mi justo, convallis in euismod ac, mattis nec justo. Nunc in varius mauris, id dapibus orci. Suspendisse finibus molestie libero id aliquam. Donec quis elit quis ex efficitur eleifend at quis arcu. In rutrum metus in varius laoreet. Donec nec massa nec sem aliquet volutpat ac in turpis. Integer sodales est nec auctor accumsan. Pellentesque feugiat volutpat ante, sit amet pharetra purus viverra sit amet. Cras sit amet rutrum erat. Aenean aliquet ex felis, a euismod turpis vestibulum et.'  
                        },
                        {
                            id: '2',
                            initialPage: '20',
                            finalPage: '22', 
                            quote: 'Donec egestas nulla vitae turpis dapibus, a ullamcorper risus finibus. Quisque mattis turpis non nulla tempor posuere. Praesent efficitur vitae enim eget tempor. Nullam varius vitae augue non tincidunt. In efficitur dolor tortor, vel porta eros porta sit amet. Vivamus tempus vitae diam ac vulputate.',
                            note: 'Proin diam odio, lacinia sed nulla eget, ornare facilisis est. Sed nec arcu in nulla ultrices placerat. Praesent ultricies vel tellus ac hendrerit. Phasellus tristique sem at magna congue maximus. Suspendisse vitae risus ante. Nam nisl ante, maximus eget orci eu, sagittis rhoncus ante. Mauris massa neque, porta sit amet purus sed, ultricies sagittis est.'
                        },
                        {
                            id: '3',
                            initialPage: '80',
                            finalPage: '',
                            quote: 'Nullam eu nibh vulputate, bibendum tellus vel, sagittis ex. Sed auctor, tortor et commodo efficitur, purus ligula dapibus libero, ut consequat augue metus in nisl. Morbi et erat eget mauris ornare condimentum vel vel turpis. Morbi auctor vehicula vulputate. Nullam blandit ultricies viverra. Maecenas sed viverra turpis. ',
                            note: 'Etiam lacus lectus, lacinia id accumsan id, faucibus id arcu. Nulla et ultrices est. Aliquam vitae augue ultrices, viverra sapien euismod, elementum libero. Quisque enim lacus, scelerisque a condimentum sit amet, mattis nec velit. Cras molestie suscipit nisi, eu auctor ligula eleifend eu. Pellentesque velit neque, pulvinar a egestas dignissim, pellentesque quis diam. Curabitur nec vestibulum ligula. Donec auctor imperdiet est, et accumsan turpis fringilla at. Quisque vel tempor nulla. Aliquam dapibus euismod nunc, eget facilisis purus tristique id. Etiam id interdum tortor, ut posuere nulla. Sed vel velit ut elit auctor sagittis at in libero. Sed a lorem leo. Praesent id nibh at urna placerat volutpat eu a nibh.'
                        }
                    ]
                },
                {
                    id: '3',
                    title: 'O livro 3',
                    author: 'Fulano Primeiro',
                    totalPages: '100',
                    currentPage: '50',
                    year: '2015',
                    literaryGenre: 'Romance',
                    cover: 'https://ik.imagekit.io/nfoyn1wc6g/livro_JY15bTJA0.png',
                    annotations: [
                        {
                            id: '1',
                            initialPage: '11',
                            finalPage: '12',
                            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis porta ex. Integer est mauris, ornare sed euismod vitae, posuere vel arcu. Curabitur sodales efficitur nulla eget bibendum. Fusce vulputate purus non sem vehicula malesuada. Sed vehicula euismod velit, sodales blandit metus molestie in. Nunc at viverra dolor.',
                            note: 'Integer mi justo, convallis in euismod ac, mattis nec justo. Nunc in varius mauris, id dapibus orci. Suspendisse finibus molestie libero id aliquam. Donec quis elit quis ex efficitur eleifend at quis arcu. In rutrum metus in varius laoreet. Donec nec massa nec sem aliquet volutpat ac in turpis. Integer sodales est nec auctor accumsan. Pellentesque feugiat volutpat ante, sit amet pharetra purus viverra sit amet. Cras sit amet rutrum erat. Aenean aliquet ex felis, a euismod turpis vestibulum et.'  
                        },
                        {
                            id: '2',
                            initialPage: '20',
                            finalPage: '22', 
                            quote: 'Donec egestas nulla vitae turpis dapibus, a ullamcorper risus finibus. Quisque mattis turpis non nulla tempor posuere. Praesent efficitur vitae enim eget tempor. Nullam varius vitae augue non tincidunt. In efficitur dolor tortor, vel porta eros porta sit amet. Vivamus tempus vitae diam ac vulputate.',
                            note: 'Proin diam odio, lacinia sed nulla eget, ornare facilisis est. Sed nec arcu in nulla ultrices placerat. Praesent ultricies vel tellus ac hendrerit. Phasellus tristique sem at magna congue maximus. Suspendisse vitae risus ante. Nam nisl ante, maximus eget orci eu, sagittis rhoncus ante. Mauris massa neque, porta sit amet purus sed, ultricies sagittis est.'
                        },
                    ]
                },
                {
                    id: '4',
                    title: 'O livro 4',
                    author: 'Fulano Primeiro',
                    totalPages: '100',
                    currentPage: '25',
                    year: '2015',
                    literaryGenre: 'Romance',
                    cover: 'https://ik.imagekit.io/nfoyn1wc6g/livro_JY15bTJA0.png',
                    annotations: [
                        {
                            id: '1',
                            initialPage: '11',
                            finalPage: '12',
                            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis porta ex. Integer est mauris, ornare sed euismod vitae, posuere vel arcu. Curabitur sodales efficitur nulla eget bibendum. Fusce vulputate purus non sem vehicula malesuada. Sed vehicula euismod velit, sodales blandit metus molestie in. Nunc at viverra dolor.',
                            note: 'Integer mi justo, convallis in euismod ac, mattis nec justo. Nunc in varius mauris, id dapibus orci. Suspendisse finibus molestie libero id aliquam. Donec quis elit quis ex efficitur eleifend at quis arcu. In rutrum metus in varius laoreet. Donec nec massa nec sem aliquet volutpat ac in turpis. Integer sodales est nec auctor accumsan. Pellentesque feugiat volutpat ante, sit amet pharetra purus viverra sit amet. Cras sit amet rutrum erat. Aenean aliquet ex felis, a euismod turpis vestibulum et.'  
                        }
                    ]
                },
                {
                    id: '5',
                    title: 'The Book',
                    author: 'Fulano Primeiro',
                    totalPages: '100',
                    currentPage: '0',
                    year: '2015',
                    literaryGenre: 'Romance',
                    cover: 'https://ik.imagekit.io/nfoyn1wc6g/livro_JY15bTJA0.png',
                    annotations: []
                }
            ]},
            
        }
    }
/*
    componentDidMount() {
        this.setState({
            auxBooks: this.state.results.books,
        })
    }
*/
componentDidMount() {
    this.props.watchBooks();
    this.setState({
        auxBooks: this.props.books,
    })
}


    onChangeHandler(field, value) {
        this.setState({
            [field]: value
        })
    }

    onFilter(value) {
        let filtro = this.state.results.books.filter(item => item.title.toUpperCase().includes(value.toUpperCase()));

        this.setState({
            auxBooks: filtro,
            filter: ''
        });
    }

    render() {
        return (
            <>
                <StatusBar backgroundColor='#2A00A2' barStyle="light-content" />
                <HeaderDrawNav title="Estante" navigation={this.props.navigation}/>
                <View style={styles.container} >
                    <View style={{flexDirection: 'row', marginHorizontal: 30, marginVertical: 12}}>
                        <TextInput 
                            placeholder='Buscar por livro' 
                            style={styles.input}
                            value={this.state.filter}
                            blurOnSubmit
                            onChangeText={value => { this.onChangeHandler('filter', value) }}
                            returnKeyType="send"
                            onSubmitEditing={() => {
                                this.onFilter(this.state.filter)
                            }}
                        />
                        <TouchableOpacity style={styles.button} onPress={() => {
                            this.onFilter(this.state.filter)
                            Keyboard.dismiss()
                        }}>
                            <Icon name='search' size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                    <BookList 
                        books={/* this.state.auxBooks */this.props.books}
                        onPressItem={(parameters) =>  this.props.navigation.navigate('BookDetail', parameters)}
                    />
                
                </View>
                <FloatingButton type="book" onPress={() => {
                    this.props.navigation.navigate('BookForm', {type: 'create'})
                }}/>
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
    const { listaBooks } = state;

    if(listaBooks === null) {
        return {books: listaBooks};
    }

    const keys = Object.keys(listaBooks);
    const listaBooksWidhId = keys.map(key => {
        return { ...listaBooks[key], id: key }
    })

    return { books: listaBooksWidhId };
}

export default connect(mapStateToProps, { watchBooks })(Bookcase);
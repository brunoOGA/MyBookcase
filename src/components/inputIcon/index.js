import React, { Component } from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  TextInput,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

class InputIcon extends Component {
  state = {
    isFocused: false,
  };

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });

  render() {
    const { label, value, icon, ...props } = this.props;
    const { isFocused } = this.state;

    const textInput = {
        backgroundColor: "#EFF0F6", 
        borderRadius: 4, 
        marginBottom: 12, 
        flexDirection: 'row', 
        alignItems: 'center',
        borderColor: '#2A00A2',
        borderWidth: !isFocused ? 0 : 1
    };

    const iconStyle = {
        marginHorizontal: 16,
        // 1-cinza 2- verde 3-roxo
        color: !isFocused ? !!!value ? '#A0A3BD' : '#00BA88' : '#4C33CC'
    };

    return (
      <View style={textInput}>
        <Icon style={iconStyle} name={icon} size={20} />
        <Text style={styles.barra}>|</Text>
        <TextInput
          {...props}
          style={{height: 56,  marginLeft: 16, fontSize: 16, color: '#14142B'}}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          placeholder={label}
          blurOnSubmit
          value={value}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    textInput: { 
        backgroundColor: "#EFF0F6", 
        borderRadius: 4, 
        marginHorizontal: 50, 
        marginBottom: 12, 
        flexDirection: 'row', 
        alignItems: 'center' ,
    },
    icon: {
        marginHorizontal: 16,
        color: '#A0A3BD'
    },
    barra: {
        fontSize: 24,
        color: '#A0A3BD'
    }
})


export default InputIcon;

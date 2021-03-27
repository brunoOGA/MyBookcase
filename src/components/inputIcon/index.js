import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TextInputProps
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

export default class InputIcon extends React.Component {
  state = {
    isFocused: false,
  };

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });

  render() {
    const { label, value, icon, inputRef, type='', marginRight = 16, ...props } = this.props;
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

    let iconStyle;

    if(type === 'email') {
      iconStyle = {
        marginHorizontal: 16,
        color: !isFocused ? !!!value ? '#A0A3BD' : /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi.test(value) ? '#2A00A2' : '#ED2E7E' : '#2A00A2'
      };
    } else {
      iconStyle = {
        marginHorizontal: 16,
                              // 1-cinza 2- verde 3-roxo
        color: !isFocused ? !!!value ? '#A0A3BD' : '#2A00A2' : '#2A00A2'
      };
    }
    

    return (
      <View style={textInput}>
        <Icon style={iconStyle} name={icon} size={20} />
        <Text style={styles.barra}>|</Text>
        <TextInput
          {...props}
          style={{ height: 56, marginLeft: 16, fontSize: 16, color: '#14142B', flex: 1, marginRight }}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          placeholder={label}
          value={value}
          blurOnSubmit={true}
          ref={inputRef}
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
    alignItems: 'center',
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

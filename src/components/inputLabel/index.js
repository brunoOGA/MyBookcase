import React, { Component } from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  TextInput,
  Text,
} from 'react-native';

class InputLabel extends Component {
  state = {
    isFocused: false,
  };

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });

  render() {
    const { height=56, label, value, type, textArea=false, ...props } = this.props;
    const { isFocused } = this.state;
    const labelStyle = {
      marginLeft: 20,
      position: 'absolute',
      left: 0,
      top: !isFocused ? !!!value ? 13 : -13 : -13,
      fontSize: 18,
       // 1-cinza 2- verde 3-roxo
       color: !isFocused ? !!!value ? '#A0A3BD' : '#1CC8EE' : '#1CC8EE'
    };

    const  textInput = {
      backgroundColor: "#EFF0F6", 
      borderRadius: 4, 
      marginBottom: 12,
      height: height,
      width: (type === "numeric") ? 149.5 : 311, 
    }

    return (
      <View style={textInput}>
        <Text style={labelStyle}>
          {label}
        </Text>
        <TextInput
          {...props}
          style={{flex: 1, fontSize: 20, color: '#14142B', marginHorizontal: 20}}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          value={value}
          keyboardType={type}
          multiline={textArea}
          blurOnSubmit
        />
      </View>
    );
  }
}

export default InputLabel;

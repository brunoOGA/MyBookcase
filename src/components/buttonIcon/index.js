import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

export default class ButtonIcon extends React.Component {

    render() {
        const { type, ...props } = this.props;
        let colorButton;
        let iconButton;
        let iconSizeButton;
        let backgroundColorButton;

        if(type == 'change') {
            colorButton = '#2A00A2'
            iconButton = 'pencil'
            backgroundColorButton = '#F4B740'
            iconSizeButton = 34
        } else if( type == 'delete') {
            colorButton='#2A00A2'
            iconButton= 'trash'
            backgroundColorButton = '#ED2E7E'
            iconSizeButton = 34
        } else if( type == 'cancel') {
            colorButton = '#ED2E7E'
            iconButton = 'times-circle'
            backgroundColorButton = '#FFFFFF'
            iconSizeButton = 40
        } else if( type == 'camera') {
            colorButton = '#FFFFFF'
            iconButton = 'camera'
            backgroundColorButton = '#1CC8EE'
            iconSizeButton = 28
        }

        const button = {
            borderRadius: 22,
            backgroundColor: backgroundColorButton,
            alignItems: 'center',
            justifyContent: 'center',
            height: 44,
            width: 44,
            margin: 4,
            elevation: 1
        }
        return (
            <TouchableOpacity {...props} style={button}>
                <Icon name={iconButton} size={iconSizeButton} color={colorButton}/>
            </TouchableOpacity>
        );
    }
}

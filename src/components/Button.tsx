import React from 'react';

import {
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps,
    Text
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({title, ...rest}: ButtonProps){
    return (
        <TouchableOpacity 
        style={style.button} 
        activeOpacity={.7} 
        {...rest}
        >
            <Text 
            style={style.buttonText}>
              {title}
            </Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    button: {
        backgroundColor: '#5C63EF',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16
    }, 
    buttonText: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold'
    }
})



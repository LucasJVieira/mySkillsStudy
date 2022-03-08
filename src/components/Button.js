import React from 'react';

import {
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';

export function Button({onPress}){
    return (
        <TouchableOpacity 
        style={style.button} 
        activeOpacity={.7} 
        onPress={onPress}
        >
            <Text 
            style={style.buttonText}>
                Add new skill
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



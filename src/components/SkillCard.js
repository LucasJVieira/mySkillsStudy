import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';

export const SkillCard = ({skill}) => (
    <TouchableOpacity 
    style={style.buttonSkills} >
        <Text 
        style={style.textSkill}>
            {skill}
        </Text>
	</TouchableOpacity>
)

const style = StyleSheet.create({
    textSkill: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold'
    },
    buttonSkills: {
        backgroundColor: '#1F1E25',
        padding: 16,
        borderRadius: 56,
        alignItems: 'center',
        margin: 8
    }
})
import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps,
    Text
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
    skill: string;
}

export const SkillCard = ({skill, ...rest} : SkillCardProps) => (
    <TouchableOpacity 
    style={style.buttonSkills} 
    {...rest}
    >
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
import React, {useState, useEffect} from 'react';

import { 
	View, 
	Text, 
	StyleSheet, 
	TextInput,
	Platform,
	FlatList
} from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home(){
	const [newSkill, setNewSkill] = useState('');
	const [mySkills, setMySkills] = useState([]);
	const [gretting, setGretting] = useState('');

	function handleAddNewSkill(){
		setMySkills(oldState => [...oldState, newSkill]);
	}


	useEffect(() => {
		const currentHour = new Date().getHours();
		if (currentHour < 12 ){
			setGretting('Good morning');
		} else if (currentHour >= 12 && currentHour < 18){
			setGretting('Good evening');
		} else {
			setGretting('Good night');
		}
			
	}, [])

	return (

		<View style={styles.container}>

			<Text style={styles.title}> Welcome, Lucas! </Text>

			<Text style={styles.gretting}>{gretting}</Text> 

			<TextInput 
			style={styles.input} 
			placeholder="New skill" 
			placeholderTextColor="#555" 
			onChangeText={setNewSkill}/>

			<Button onPress={handleAddNewSkill} />

			<Text 
			style={[styles.title,
			{marginVertical: 48}]}> 
				My Skills 
			</Text>

			<FlatList 
			data = {mySkills}
			keyExtractor= { item => item }
			renderItem={({ item })=> (
				<SkillCard skill={item}/>
			)}
			
			/>	
		</View>
		)
	}
	
	const styles = StyleSheet.create({
		container: {
			flex: 1, 
			backgroundColor: '#06070D', 
			paddingVertical: 72,
			paddingHorizontal: 32
		},
		title: {
			color: '#FFF',
			fontSize: 24,
			fontWeight: 'bold'
			
		},
		input: {
			backgroundColor: '#1F1E25',
			color: '#FFF',
			fontSize: 18,
			padding: Platform.OS === 'ios' ? 15 : 10,
			marginTop: 32,
			borderRadius: 8
		},
		gretting : {
			color: '#FFF',
			fontSize: 20,
			marginStart: 8
			
		}
	});
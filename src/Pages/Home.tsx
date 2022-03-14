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

interface SkillData {
	id: string;
	name: string;
}

export function Home(){
	const [newSkill, setNewSkill] = useState('');
	const [mySkills, setMySkills] = useState<SkillData[]>([]);
	const [gretting, setGretting] = useState('');

	function handleAddNewSkill(){
		const data = {
			id: String(new Date().getTime()),
			name: newSkill
		}

		setMySkills(oldState => [...oldState, data]);
	}

	function handRemoveSkill(id: string){
		setMySkills(oldState => oldState.filter(
			skill => skill.id !== id
		))
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

			<Button 
			onPress={handleAddNewSkill} 
			title={'Add new Skill'}
			/>

			<Text 
			style={[styles.title,
			{marginVertical: 48}]}>  
			</Text>

			<FlatList 
			data = {mySkills}
			keyExtractor= { item => item.id }
			renderItem={({ item })=> (
				<SkillCard 
				skill={item.name}
				onPress = {() => handRemoveSkill(item.id)}
				/>
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
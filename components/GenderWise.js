import React from 'react';
import {Image, StyleSheet, Text, View } from 'react-native';
import PageHeader from './PageHeader.js';
import men from './../assets/men.png';
import women from './../assets/women.png';

const genders = [
	{
		image: men,
		title: 'Men'
	},
	{
		image: women,
		title: 'Women'
	}
]


function Gender(props) {
	return <View style={styles.gender}>
				<Image source={props.gen.image} style={styles.genderImage}/>
			<View style={styles.titleWrapper}>
				<Text style={styles.title}>{props.gen.title}</Text>
			</View>
		</View>
}

export default function GenderWise() {
	return <View style={styles.container}>
				<PageHeader heading={'FOR ALL GENDERS'} subHeading={'Shop our most-loved brands!'}/>
		<View style={styles.genderWrapper}>
			{genders.map( gen => <Gender gen={gen}/>)}
		</View>
	</View>
}

const styles = StyleSheet.create({
  container: {
  	padding: '20px'
  },
  genderWrapper: {
  	flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: '20px'
  },
  gender: {
  	width: '48%',
  	flexDirection: 'column',
  	marginBottom: '20px',
  	borderRadius: '16px',
  	shadowColor: '#8f9bb3',
  	shadowOffset: {
  		width: 0,
  		height: 3
  	},
  	shadowOpacity: 0.5,
  	shadowRadius: 2,
  	textAlign: 'center',
  	justifyContent: 'center'
  },
  genderImage: {
  	height: '200px',
  	width: '100%',
  	borderTopLeftRadius: '16px',
  	borderTopRightRadius: '16px'
  },
  titleWrapper: {
  	padding: '14px',
  	borderRadius: '16px'
  },
  title: {
  	fontSize: '16px',
  	fontWeight: '500',
  	color: '#040e35'
  }
})

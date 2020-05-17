import React from 'react';
import {Image, StyleSheet, Text, View } from 'react-native';
import PageHeader from './PageHeader.js';
import hoodie from './../assets/hoodie.png';
import woolenhoodie from './../assets/woolen_hoodie.png';
import sweatshirt from './../assets/sweatshirt.png';
import roundneck from './../assets/round_neck.png';

const types = [
	{
		image: hoodie,
		title: 'Hoodie'
	},
	{
		image: woolenhoodie,
		title: 'Woolen Hoodie'
	},
	{
		image: sweatshirt,
		title: 'Sweatshirt'
	},
	{
		image: roundneck,
		title: 'Round neck'
	},
]

function Type(props) {
	return <View style={styles.type}>
		<View style={styles.typeImageWrapper}>
		<Image source={props.type.image} style={styles.typeImage}/>
		</View>
		<Text style={styles.title}>{props.type.title}</Text>
	</View>
}

export default function TypeWise() {
	return<View>
			<View style={styles.head}>
				<PageHeader heading={'Shop by type'} subHeading={'Shop our most-loved brands!'}/>
			</View>
			<View style={styles.typeWrapper}>
				{types.map(type => <Type type={type} />)}
			</View>
	</View>
}

const styles = StyleSheet.create({
  head: {
  	padding: '20px',
  	backgroundColor: '#e9fef7',
  	paddingBottom: '70px'
  },
  typeWrapper: {
  	flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: '-44px',
    paddingLeft: '20px',
    paddingRight: '20px' 
  },
  type: {
  	width: '50%',
  	flexDirection: 'column',
  	marginBottom: '20px',
  	textAlign: 'center',
  	justifyContent: 'center'
  },
  typeImageWrapper: {
  	width:'96px', 
  	padding: '2px', 
  	margin:'auto', 
  	borderWidth: '2px', 
  	borderColor: '#7ae0be', 
  	borderStyle: 'dotted', 
  	borderRadius: '50%'
  },
  typeImage: {
  	height: '88px',
  	width: '88px',
  	flex: 1,
  	border: '2px dotted #7ae0be'
  },
  title: {
  	fontSize: '14px',
  	fontWeight: '500',
  	color: '#040e35',
  	marginTop: '10px'
  }
})


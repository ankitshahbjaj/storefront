import React from 'react';
import {Image, StyleSheet, Text, View } from 'react-native';
import PageHeader from './PageHeader.js';
import tommy from './../assets/tommy.png';
import nike from './../assets/nike.png';
import american from './../assets/american.png';
import adidas from './../assets/adidas.png';
import puma from './../assets/puma.png';
import zara from './../assets/zara.png';

const brandsData = [
	{
		image: tommy,
		name: 'Tommy Hilfiger',
		copyType: 'First Copy'
	},
	{
		image: nike,
		name: 'Nike',
		copyType: 'First Copy'
	},
	{
		image: american,
		name: 'American Eagle',
		copyType: 'First Copy'
	},
	{
		image: adidas,
		name: 'Adidas',
		copyType: 'First Copy'
	},
	{
		image: puma,
		name: 'Puma',
		copyType: 'First Copy'
	},
	{
		image: zara,
		name: 'Zara',
		copyType: 'First Copy'
	},
]

function Brand(props) {
	return <View style={styles.brand}>
		<View style={styles.brandImageWrapper}>
			<Image resizeMode={'cover'} style={styles.brandImage} source={props.val.image}/>
		</View>
		<Text style={styles.brandName}>{props.val.name}</Text>
		<Text style={styles.copyType}>{props.val.copyType}</Text>
	</View>
}

export default function Brands() {
	return <View style={styles.brandWrapper}>
		<PageHeader heading={'BRANDS to crush on'} subHeading={'Shop our most-loved brands!'}/>
		<View style={styles.brandValWrapper}>
			{brandsData.map( br => <Brand val={br}/>)}
		</View>
	</View>
}

const styles = StyleSheet.create({
  brandWrapper: {
  	padding: '20px'
  },
  brandValWrapper: {
  	flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  brand: {
  	width: '32%',
  	flexDirection: 'column',
  	marginBottom: '20px'
  },
  brandImageWrapper: {
  	borderRadius: '16px',
  	padding: '10px',
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
  brandImage: {
  	width: '74px',
  	height: '56px'
  },
  brandName: {
  	color: '#040e35',
  	fontSize: '14px',
  	textAlign: 'center',
  	marginTop: '15px'
  },
  copyType: {
  	backgroundColor: '#7ae0be',
  	color: '#fff',
  	fontSize: '8px',
  	padding: '3px',
  	borderRadius: '6px',
  	textAlign: 'center',
  	margin: 'auto'
  }
})


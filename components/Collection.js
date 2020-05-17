import React from 'react';
import {Image, StyleSheet, Text, View } from 'react-native';
import PageHeader from './PageHeader.js';
import product from './../assets/product.png';

const items = [
	{
		image: product,
		title: 'Rayon Slub Navy Blue Designer Top',
		price: '₹ 1299',
		oldPrice: '₹ 1799'
	},
	{
		image: product,
		title: 'Rayon Slub Off White Designer',
		price: '₹ 1299',
		oldPrice: '₹ 1799'
	},
	{
		image: product,
		title: 'Rayon Slub Yellow Designer Top',
		price: '₹ 1299',
		oldPrice: '₹ 1799'
	},
	{
		image: product,
		title: 'Rayon Slub Light Green Designer…',
		price: '₹ 1299',
		oldPrice: '₹ 1799'
	}
]

function Item(props) {
	return <View style={styles.colllection}>
				<Image source={props.item.image} style={styles.collectionImage}/>
			<View style={styles.titleWrapper}>
				<Text style={styles.title}>{props.item.title}</Text>
				<Text style={styles.price}>{props.item.price} <Text style={styles.oldPrice}>{props.item.oldPrice} </Text></Text>
			</View>
		</View>
}

export default function Collection() {
	return <View style={styles.container}>
			<PageHeader heading={'Collections to crush on'} subHeading={'Shop our most-loved brands!'}/>
			<View style={styles.collectionWrapper}>
				{items.map(item => <Item item={item} />)}
			</View>
		</View>
}

const styles = StyleSheet.create({
  container: {
  	padding: '20px'
  },
  collectionWrapper: {
  	flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: '20px'
  },
  colllection: {
  	width: '48%',
  	flexDirection: 'column',
  	marginBottom: '20px',
  	textAlign: 'center',
  	justifyContent: 'center',
  	borderRadius: '16px',
  	shadowColor: '#8f9bb3',
  	shadowOffset: {
  		width: 0,
  		height: 3
  	},
  	shadowOpacity: 0.5,
  	shadowRadius: 2,
  },
  collectionImage: {
  	height: '150px',
  	width: '100%',
  	borderTopLeftRadius: '16px',
  	borderTopRightRadius: '16px'
  },
  titleWrapper: {
  	padding: '12px',
  	textAlign: 'center'
  },
  title: {
  	fontSize: '16px',
  	fontWeight: '500',
  	lineHeight: '20px',
  	color: '##040e35'
  },
  price: {
  	fontSize: '14px',
  	lineHeight: '18px',
  	textAlign: 'left',
  	fontWeight: '500',
  	marginTop: '5px'
  },
  oldPrice: {
  	color: '#8f9bb3',
  	textDecorationLine: 'line-through'
  }
})

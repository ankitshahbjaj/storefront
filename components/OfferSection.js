import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import PageHeader from './PageHeader.js';

const offers = [
	{
		heading: 'Skirts Under',
		subHeading: '₹ 299'
	},
	{
		heading: 'Skirts Under',
		subHeading: '₹ 1,499'
	},
	{
		heading: 'Skirts Under',
		subHeading: '50% off'
	},
]

function Offer(props) {
	return <View style={styles.offer}>
		<Text style={styles.offerHead}>{props.offer.heading}</Text>
		<Text style={styles.offerSubHead}>{props.offer.subHeading}</Text>
	</View>
}

export default function OfferSection() {
	return <View>
		<View style={styles.head}>
			<PageHeader heading={'FOR ALL GENDERS'} subHeading={'Shop our most-loved brands!'} inverted={true}/>
		</View>
		<View style={styles.offerWrapper}>
			{offers.map(offer => <Offer offer={offer} />)}
		</View>
	</View>
}

const styles = StyleSheet.create({
  head: {
  	padding: '20px',
  	backgroundColor: '#040e35',
  	paddingBottom: '70px'
  },
  offerWrapper: {
  	flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: '-50px',
    paddingLeft: '20px',
    paddingRight: '20px' 
  },
  offer: {
  	width: '30%',
  	paddingTop: '23px',
  	paddingBottom: '23px',
  	flexDirection: 'column',
  	marginBottom: '20px',
  	textAlign: 'center',
  	justifyContent: 'center',
  	backgroundColor: '#7ae0be',
  	borderRadius: '16px',
  	shadowColor: '#8f9bb3',
  	shadowOffset: {
  		width: 0,
  		height: 3
  	},
  	shadowOpacity: 0.5,
  	shadowRadius: 2,
  },
  offerHead: {
  	fontSize: '14px',
  	fontWeight: '400',
  	lineHeight: '18px',
  	color: '#fff'
  },
  offerSubHead: {
  	fontSize: '22px',
  	fontWeight: '500',
  	lineHeight: '32px',
  	color: '#fff',
  }
})


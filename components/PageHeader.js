import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default function PageHeader(props) {
	return <View>
		<Text style={props.inverted ? styles.pageHeadingWhite : styles.pageHeading}>{props.heading}</Text>
		<Text style={props.inverted ? styles.pagSubeHeadingWhite : styles.pagSubeHeading}>{props.subHeading}</Text>
	</View>
}

const styles = StyleSheet.create({
  pageHeading: {
  	color: '#040e35',
  	fontSize: '16px',
  	fontWeight: '600'
  },
  pagSubeHeading: {
  	color: '#8f9bb3',
  	fontSize: '12px',
  	fontWeight: '300'
  },
  pageHeadingWhite: {
  	color: '#ffffff',
  	fontSize: '16px',
  	fontWeight: '600'
  },
  pagSubeHeadingWhite: {
  	color: '#ffffff',
  	fontSize: '12px',
  	fontWeight: '300'
  }
})

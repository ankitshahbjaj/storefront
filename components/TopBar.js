import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TopBar() {
	return <View style={styles.topBar}>
			<Text style={styles.barText}>Sweatshirt Store</Text>
		</View>
}

const styles = StyleSheet.create({
  topBar: {
  	padding: '20px'
  },
  barText: {
  	color: '#040e35',
  	fontSize: '18px',
  	fontWeight: 600
  }
})



import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import bg from './../assets/bg.png';
import product from './../assets/product.png';

export default function TopBar() {
	return <View>
			   <ImageBackground source={bg} style={styles.image}>
          <View style={{height: '100vw', paddingTop: '27px'}}>
            <Text style={styles.headtext}>New</Text>
            <Text style={styles.headtext}>Collection</Text>
            <Image source={product} style={styles.prodImage} />
            <View style={styles.offerTextWrapper}>
            <Text style={styles.offerText}>SAVE UP TO</Text>
            <Text style={styles.offerText}><Text style={{fontSize: '24px', fontWeight: '600'}}>45% </Text>OFF</Text>
            </View>
          </View>
        </ImageBackground>
		</View>
}

const styles = StyleSheet.create({
  headtext: {
    color: '#040e35',
    fontSize: '30px',
    fontWeight: '300',
    textAlign: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    height:'100vw'
  },
  prodImage: {
    width: '194px',
    height: '194px',
    marginTop: '30px',
    marginLeft: '20px'
  },
  offerTextWrapper: {
    marginLeft: '250px',
    marginTop: '-20px'
  },
  offerText: {
    color: '#fff',
    fontSize: '14px',
    fontWeight: '300'
  }
})


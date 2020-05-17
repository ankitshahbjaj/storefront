import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native';
import TopBar from './TopBar.js';
import Banner from './Banner.js';
import Brands from './Brands.js';
import GenderWise from './GenderWise.js';
import TypeWise from './TypeWise.js';
import OfferSection from './OfferSection.js';
import Collection from './Collection.js';

export default class Home extends Component{
  render() {
    return(
      <View>
        <TopBar />
        <Banner />
        <Brands />
        <GenderWise />
        <TypeWise />
        <OfferSection />
        <Collection />
      </View>
    )
  }
}
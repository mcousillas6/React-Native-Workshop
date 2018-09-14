import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';
import firebaseLogo from '../assets/react-native-firebase-1-logo-png-transparent.png';
import styles from './styles';

const reactImageUrl = 'https://1.bp.blogspot.com/-FSP5WOusVAI/WiqqkqqFNVI/AAAAAAAACTs/C1R1vMKS1kIab9jHT_hHoUVD7PvyjNGnQCLcBGAs/s1600/1_ypyKHfdnTbM-DZG-nZ5tRg.png';

export default () => (
  <ScrollView
    contentContainerStyle={styles.container}
    style={styles.scrollView}
  >
    <Text style={styles.title}>
      Views
    </Text>
    <View style={styles.box} />
    <View style={styles.rectangle} />
    <View style={styles.spaceBetween}>
      <View style={styles.box} />
      <View style={styles.box} />
    </View>
    <Text style={styles.title}>
      Images
    </Text>
    <Text style={styles.label}> Static asset </Text>
    <Image
      resizeMode='contain'
      source={firebaseLogo}
      style={styles.icon}
    />
    <Text style={styles.label}> From uri </Text>
    <Image
      resizeMode='contain'
      source={{ uri: reactImageUrl }}
      style={styles.icon}
    />
    <Text style={styles.title}>
      Flex Examples
    </Text>
    <Text style={styles.label}>
      Centered elements
    </Text>
    <View>
      <View style={[styles.box, { backgroundColor: '#9C27B0'}]} />
      <View style={[styles.box, { backgroundColor: '#9E9E9E'}]} />
      <View style={[styles.box, { backgroundColor: '#009688'}]} />
    </View>
    <Text style={styles.label}>
      You can align them as you want
    </Text>
    <View style={styles.stretched}>
      <View style={[styles.box, { backgroundColor: '#9C27B0'}]} />
      <View style={[styles.box, { backgroundColor: '#9E9E9E'}]} />
      <View style={[styles.box, { backgroundColor: '#009688'}]} />
    </View>
    <Text style={styles.label}>
      Or change the flex direction to row
    </Text>
    <View style={styles.row}>
      <View style={[styles.box, { backgroundColor: '#9C27B0'}]} />
      <View style={[styles.box, { backgroundColor: '#9E9E9E'}]} />
      <View style={[styles.box, { backgroundColor: '#009688'}]} />
    </View>
    <Text style={styles.label}>
      Or give each child different priorities
    </Text>
    <View style={styles.priorities}>
      <View style={{ backgroundColor: '#9C27B0', flex: 1 }} />
      <View style={{ backgroundColor: '#9E9E9E', flex: 3 }} />
      <View style={{ backgroundColor: '#009688', flex: 2}} />
    </View>
  </ScrollView>
);

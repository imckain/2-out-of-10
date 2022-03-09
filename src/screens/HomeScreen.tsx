import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
// @ts-ignore
import { API_KEY } from 'react-native-dotenv';

const HomeScreen = () => {

  return (
    <View style={styles.mapView}>
      <Text>balls</Text>
      <MapView 
        style={styles.map} 
        provider={PROVIDER_GOOGLE}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mapView: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
})

export default React.memo(HomeScreen);
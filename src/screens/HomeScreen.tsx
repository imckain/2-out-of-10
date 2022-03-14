import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import getLocation from '../hooks/getLocation';

const HomeScreen = () => {
  const [ region, setRegion ] = useState({});
  const [location, locationError] = getLocation();

  // setRegion(location);
  console.log(location);

  return (
    <View style={styles.mapView}>
      <MapView 
        style={styles.map} 
        provider={undefined}
        region={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
        followsUserLocation={true}
        showsUserLocation={true}
        userLocationAnnotationTitle={'My location'}
        userLocationCalloutEnabled={true}
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
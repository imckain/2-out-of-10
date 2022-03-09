import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
// @ts-ignore
import { API_KEY } from 'react-native-dotenv';

const HomeScreen = () => {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <View>
      <Text>balls</Text>
      <GoogleMap
        mapContainerStyle={styles.mapStyle}
        center={{
          lat: -5,
          lng: -60,
        }}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
      </GoogleMap>
    </View>
  ) : <Text>404 Dawg</Text>
}

const styles = StyleSheet.create({
  mapStyle: {
    height: 400,
    width: 400,
  }
})

export default HomeScreen;
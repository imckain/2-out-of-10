import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export default () => {
  const [location, setLocation] = useState({});
  const [locationError, setLocationError] = useState('');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status != 'granted') {
        setLocationError('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return [location, locationError];
}
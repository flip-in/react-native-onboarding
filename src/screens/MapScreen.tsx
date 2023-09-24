import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

interface Point {
  name: string;
  description: string;
  latitude: number;
  longitude: number;
}

const points: Point[] = [
  {
    name: 'Point A',
    description: 'This is the first point',
    latitude: 37.7749,
    longitude: -122.4194,
  },
  {
    name: 'Point B',
    description: 'This is the second point',
    latitude: 37.773972,
    longitude: -122.431297,
  },
  {
    name: 'Point C',
    description: 'This is the third point',
    latitude: 37.7727,
    longitude: -122.4353,
  },
];

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {points.map((point, index) => (
          <Marker
            key={index}
            coordinate={{latitude: point.latitude, longitude: point.longitude}}
            title={point.name}
            description={point.description}
          />
        ))}
      </MapView>
    </View>
    //123456789william printhello world if then ok
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

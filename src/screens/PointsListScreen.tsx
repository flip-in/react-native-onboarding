import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const points = [
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

export default function PointsListScreen() {
  return (
    <View style={styles.container}>
      {points.map(point => (
        <View key={point.name} style={styles.card}>
          <Text style={styles.title}>{point.name}</Text>
          <Text style={styles.description}>{point.description}</Text>
          <Text style={styles.coordinates}>
            ({point.latitude}, {point.longitude})
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
  },
  coordinates: {
    fontSize: 14,
    color: '#888',
  },
});

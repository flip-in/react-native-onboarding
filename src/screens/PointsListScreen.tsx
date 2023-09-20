import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MapScreen from './MapScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

type Point = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
};

type Props = {
  points?: Point[];
};

const PointsListScreen: React.FC<Props> = ({
  points = [
    {id: 1, name: 'Point 1', latitude: 37.78825, longitude: -122.4324},
    {id: 2, name: 'Point 2', latitude: 37.78825, longitude: -122.4324},
    {id: 3, name: 'Point 3', latitude: 37.78825, longitude: -122.4324},
  ],
}) => {
  const navigation = useNavigation();

  const handlePointPress = (point: Point) => {
    navigation.navigate('MapScreen', {point});
  };

  return (
    <View style={styles.container}>
      {points.map(point => (
        <TouchableOpacity
          key={point.id}
          style={styles.point}
          onPress={() => handlePointPress(point)}>
          <Text style={styles.pointName}>{point.name}</Text>
          <Text style={styles.pointCoordinates}>
            {point.latitude}, {point.longitude}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  point: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  pointName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  pointCoordinates: {
    fontSize: 16,
  },
});

export default PointsListScreen;

import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import {
  addPreferredPoint,
  getPreferredPoints,
  removePreferredPoint,
} from '../../lib/fakeApi';
import {useQuery} from '@tanstack/react-query';
import queryClient from '../../lib/clientPersister';

interface Point {
  name: string;
  description: string;
  latitude: number;
  longitude: number;
}

export default function MapScreen() {
  // let markerRef = React.useRef(null);
  const {data: preferredPoints} = useQuery(['points'], async () =>
    getPreferredPoints(),
  );
  const isPointPreferred = (point: Point): boolean => {
    return (
      preferredPoints?.some(
        (preferredPoint: {name: string}) =>
          preferredPoint?.name === point?.name,
      ) ?? false
    );
  };
  // React.useEffect(() => {
  //   if (markerRef.current) {
  //     markerRef.current.showCallout();
  //   }
  // });

  const handlePress = async (e: Point) => {
    // console.log('press');
    const updatePoint = isPointPreferred(e)
      ? removePreferredPoint
      : addPreferredPoint;
    await updatePoint(e);
    queryClient.invalidateQueries(['points']);
  };
  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={region}>
        {points.map((point, index) => (
          <Marker
            // ref={markerRef}/
            key={index}
            coordinate={{latitude: point.latitude, longitude: point.longitude}}
            title={point.name}
            description={point.description}>
            <Callout style={styles.callout} onPress={() => handlePress(point)}>
              <Text>{point.name}</Text>
              <Text>{point.description}</Text>
              <Text
                style={
                  isPointPreferred(point)
                    ? styles.removeButton
                    : styles.addButton
                }>
                {isPointPreferred(point) ? 'remove preferred' : 'add preferred'}
              </Text>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
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
  addButton: {
    backgroundColor: 'green',
    color: 'white',
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
  },
  removeButton: {
    backgroundColor: 'red',
    color: 'white',
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
  },
  callout: {
    padding: 10,
    height: 120,
  },
});

const region = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

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
    latitude: 37.789975,
    longitude: -122.431297,
  },
  {
    name: 'Point C',
    description: 'This is the third point',
    latitude: 37.7627,
    longitude: -122.4353,
  },
];

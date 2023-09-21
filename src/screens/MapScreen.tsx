import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

interface Point {
  name: string;
  description: string;
  latitude: number;
  longitude: number;
}

type Props = {
  route: {
    params: {
      selectedPoint: Point;
    };
  };
};

export default function MapScreen(props: Props) {
  const {latitude, longitude} = props.route.params.selectedPoint;

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
        <Marker
          coordinate={{latitude, longitude}}
          title={props.route.params.selectedPoint.name}
          description={props.route.params.selectedPoint.description}
        />
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
});

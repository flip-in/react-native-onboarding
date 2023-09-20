import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type Props = {
  navigation: any;
};

const HomeScreen: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to my app!</Text>
      <Text style={styles.description}>
        This is a generic Home Screen component.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 16,
    textAlign: 'center',
  },
});

export default HomeScreen;

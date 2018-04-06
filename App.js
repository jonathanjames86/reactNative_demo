import React from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.colorText}>It's Super Easy Joe</Text>
        <Text>Time to Learn</Text>
        <Picker
          selectedValue={}
          onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d2d2d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  }
});

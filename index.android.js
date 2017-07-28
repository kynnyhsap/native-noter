// @flow

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';

export default class Noter extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.header}>
          <Text style={styles.headerText}>- Noter -</Text>
        </View>

        <ScrollView style={styles.scrollContainer}></ScrollView>

        <View style={styles.footer}>
          
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>

          <TextInput style={styles.textInput} 
            placeholder='> note'
            placeholderTextColor='white'
            underlineColorAndroid='transparent'>
          </TextInput>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: '#e91e63',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd',
  },
  headerText: {
    color: '#fff',
    fontSize: 25, 
    padding: 26,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    right: 0,
    left: 0,
  },
  addButton: {
    backgroundColor: '#e91e63',
    width: 90,
    height: 90,
    borderRadius: 50,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    zIndex: 10,
    marginBottom: -45,
    
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff', 
    padding: 20,
    paddingTop: 46,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed'
  }
});

AppRegistry.registerComponent('Noter', () => Noter);

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity, DrawerLayoutAndroid, Text } from 'react-native';
import { Camera } from 'expo-camera';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

export default function index() {
  const drawerRef = React.useRef(null);

  const openDrawer = () => {
    drawerRef.current.openDrawer();
  };

  const closeDrawer = () => {
    drawerRef.current.closeDrawer();
  };

  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={200}
      drawerPosition={'left'}
      renderNavigationView={() => (
        <View style={styles.drawerContent}>
          <TouchableOpacity onPress={closeDrawer} style={styles.drawerCloseButton}>
            <Text style={styles.drawerCloseButtonText}>Close</Text>
          </TouchableOpacity>
          <Text>Config Option 1</Text>
          <Text>Config Option 2</Text>
          <Text>Config Option 3</Text>
        </View>
      )}
    >
      <View style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.button} onPress={openDrawer}>
            <FontAwesome name="bars" size={50} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <FontAwesome name="question-circle-o" size={50} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <Camera style={styles.camera} type={Camera.Constants.Type.back} />
        </View>

        <View style={styles.bottomNavigation}>
          <TouchableOpacity style={styles.button}>
            <FontAwesome name="cutlery" size={50} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <FontAwesome name="plus" size={50} color="green" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <FontAwesome name="image" size={50} color="black" />
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
  },
  content: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 100,
    backgroundColor: '#f0f0f0',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  drawerContent: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  drawerCloseButton: {
    marginBottom: 20,
  },
  drawerCloseButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});


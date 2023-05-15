import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity, DrawerLayoutAndroid, Text, Modal } from 'react-native';
import { Camera } from 'expo-camera';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  const drawerRef = React.useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [privacyModalVisible, setPrivacyModalVisible] = useState(false);
  const [aboutModalVisible, setAboutModalVisible] = useState(false);

  const openDrawer = () => {
    drawerRef.current.openDrawer();
  };

  const closeDrawer = () => {
    drawerRef.current.closeDrawer();
  };

  const openHelpModal = () => {
    setModalVisible(true);
  };

  const openPrivacyModal = () => {
    setPrivacyModalVisible(true);
  };
  const openAboutModal = () => {
    setAboutModalVisible(true);
  };


  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={300} // Ajuste o valor conforme necessário
      drawerPosition={'left'}
      renderNavigationView={() => (
        <View style={styles.drawerContent}>
          <View style={styles.drawerHeader}>
            <Text style={styles.drawerTitle}>Menu</Text>
            <TouchableOpacity onPress={closeDrawer} style={styles.drawerCloseButton}>
              <FontAwesome name="close" size={34} color="darkred" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.drawerOption}>
            <FontAwesome name="cogs" size={30} color="black" />
            <Text style={styles.drawerOptionText}>Configurações</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.drawerOption} onPress={openHelpModal}>
            <FontAwesome name="question-circle" size={30} color="black" />
            <Text style={styles.drawerOptionText}>Ajuda</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.drawerOption} onPress={openPrivacyModal}>
            <FontAwesome name="lock" size={30} color="black" />
            <Text style={styles.drawerOptionText}>Privacidade</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.drawerOption} onPress={openAboutModal}>
            <FontAwesome name="info-circle" size={30} color="black" />
            <Text style={styles.drawerOptionText}>Sobre</Text>
          </TouchableOpacity>
        </View>
      )}
    >
      <View style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.button} onPress={openDrawer}>
            <FontAwesome name="bars" size={50} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
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

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() =>
            () => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Ajuda</Text>
              <Text style={styles.modalText}>Esta seção fornece algumas informações importantes para um uso correto da aplicação,
                dando dicas ao utilizador e descrevendo as principais funcionalidades aplicacionais.
              </Text>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="fade"
          transparent={true}
          visible={privacyModalVisible}
          onRequestClose={() => setPrivacyModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Privacidade</Text>
              <Text style={styles.modalText}>Esta é a seção de privacidade. Aqui você pode encontrar informações sobre como seus dados são coletados, armazenados e usados pela aplicação.</Text>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setPrivacyModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="fade"
          transparent={true}
          visible={aboutModalVisible}
          onRequestClose={() => setAboutModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Sobre</Text>
              <Text style={styles.modalText}>Esta é a seção de Sobre. Aqui você pode encontrar informações sobre a aplicação.</Text>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setAboutModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

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
  drawerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  drawerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    flex: 1,
  },
  drawerCloseButton: {
    padding: 10,
  },
  drawerOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  drawerOptionText: {
    marginRight: 10,
    fontSize: 20,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});



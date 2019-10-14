/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
  FlatList,
  Modal,
  TouchableOpacity,
} from 'react-native';

const list = [1, 2, 3, 4, 5, 6, 7];

const App: () => React$Node = () => {
  const [visible, setVisible] = useState(false);

  function homeHeaderComponent() {
    return (
      <Image
        source={{
          uri:
            'http://tupian.qqw21.com/article/UploadPic/2015-4/20154412125271570.jpg',
        }}
        style={styles.avatar}
      />
    );
  }

  function _renderItem({item}) {
    return (
      <TouchableOpacity style={styles.flexRow} onPress={() => setVisible(true)}>
        <Image
          source={{
            uri:
              'http://tupian.qqw21.com/article/UploadPic/2015-4/20154412125271570.jpg',
          }}
          style={styles.avatar}
        />

        <Text>Hello{item}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <>
      <SafeAreaView>
        {homeHeaderComponent()}

        <FlatList
          key="Discover_home"
          contentContainerStyle={styles.contentContainerStyle}
          ListHeaderComponent={homeHeaderComponent}
          keyExtractor={item => item + ''}
          data={list}
          renderItem={_renderItem}
        />

        <Modal
          visible={visible}
          animationType="fade"
          transparent={true}
          style={styles.bottomModal}>
          <View style={[styles.mask]} />
          <View style={styles.modalContainer}>
            <TouchableOpacity
              onPress={() => setVisible(false)}
              style={styles.modalItem}>
              <Text style={styles.cancelText}>cancel</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    padding: 15,
  },
  flexRow: {
    flexDirection: 'row',
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  mask: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 100,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  modalContainer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 200,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-end',
    paddingBottom: 34,
  },
  modalItem: {
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelText: {
    fontSize: 17,
    color: '#858585',
  },
});

export default App;

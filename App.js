import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
        <Image
          source={require('./assets/plaid.png')}
          style={styles.plaid}
        ></Image>
    );
  }
}

const styles = StyleSheet.create({
  plaid: {
    flex: 1,
    width: null,
    height: null,
  }
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
var React = require('react-native');
var Main = require('./App/Components/Main.js')

var {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View,
} = React;

class githubNotetaker extends React.Component {
  render() {
    return (
      <NavigatorIOS 
        style={styles.container}
        initialRoute={{
          title: 'Github Notetaker',
          component: Main
        }}
      />
    );
  }
}

var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#111111'
  },
});

AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);

var React = require('react-native');
var Badge = require('./Badge');
var Separator = require('./Separator');
var Web_View = require('./WebView');
var {
  ScrollView,
  Text,
  View,
  TouchableHighlight,
  StyleSheet
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'column',
    flex: 1,
    padding: 10
  },
  name: {
    color: '#48BBEC',
    fontSize: 18,
    paddingBottom: 5
  },
  stars: {
    color: '#48BBEC',
    fontSize: 14,
    paddingBottom: 5
  },
  description: {
    fontSize: 14,
    paddingBottom: 5
  }
});

class Repositories extends React.Component{
  openPage(url){
    this.props.navigator.push({
      component: Web_View,
      title: 'Web View',
      passProps: {url}
    })
  }
  render(){
    var repos = this.props.repos;
    var list = repos.map((item, index) => {
      var desc = item.description ? <Text style={styles.description}> {item.description} </Text> : <View />;
      return (
        <View key={index}>
          <View style={styles.rowContainer}>
            <TouchableHighlight
              onPress={this.openPage.bind(this, item.html_url)}
              underlayColor='transparent'>
              <Text style={styles.name}> {item.name} </Text>
            </TouchableHighlight>
            <Text style={styles.name}> {item.stargazer_count} </Text>
            {desc}
          </View>
          <Separator />
        </View>
      )
    });

    return (
      <ScrollView sytle={styles.container}>
        <Badge userInfo={this.props.userInfo} />
        {list}
      </ScrollView>
    )
  }
}

Repositories.propTypes = {
  userInfo: React.PropTypes.object.isRequired,
  repos: React.PropTypes.array.isRequired
}

module.exports = Repositories;
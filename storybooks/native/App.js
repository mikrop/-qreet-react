import React from 'react';
import { Dimensions, StatusBar, TextInput, View } from 'react-native';
 
import QREet from './lib';

const { height, width } = Dimensions.get('window');

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { text: 'Hello, World!' };
  }

  render() {
    return (
      <View>
        <StatusBar hidden />
        <QREet size={Math.min(height, width)} value={this.state.text} />
        <TextInput
          style={{ height: 50, borderColor: '#ccc', borderWidth: 1, margin: 10, padding: 5 }}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
      </View>
    );
  }
}

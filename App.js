import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Greeting extends Component {
  render(){
    return (
        <View style={{alignItems: 'center'}}>
          <Text> Hello {this.props.name}!</Text>
        </View>
    );
  }
}

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{alignItems:'center', top:500}}>
        <Greeting name='Rich'/>
      </View>
    );
  }
}

AppRegistry.registerComponent('pomodoro', ()=>HelloWorldApp);

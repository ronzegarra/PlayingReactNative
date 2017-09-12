import React, { Component } from 'react';
import { Text, View, Image, TouchableOPacity } from 'react-native';

import DialogSteps from '../../Lib/DialogSteps';
import MediaText from './MediaText';
import Start from './Start';

import styles from './styles';
import Images from '../../Images';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: {
        current: {},
        quantity: 3
      }
    };
  }
  componentWillMount() {
    const current = DialogSteps.getStep(0);
    const nextState = this.state;
    nextState.steps.current = current;
    this.setState(nextState);
  }

  nextStep = index => () => {
    const next = index + 1;
    const current = DialogSteps.getStep(next);
    const nextState = this.state;
    nextState.steps.current = current;
    this.setState(nextState);
  };

  render() {
    let content;
    const { current } = this.state.steps;
    switch (current.type.key) {
      case 'Start':
        content = <Start />;
        break;
      default:
        content = null;
        break;
    }
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>{content}</View>
        <MediaText
          text={current.text}
          button={current.button}
          onPress={this.nextStep(current.uid)} 
        />
      </View>
    );
  }
}

export default Home;

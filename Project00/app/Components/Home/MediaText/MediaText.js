import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import Button from '../Button';

import styles from './styles';

const MediaText = ({ text, button, onPress }) => (
  <View>
    <Text style={styles.instructions}>{text}</Text>
     <View style={styles.submitContainer}>
      <Button text={button.title} onPress={onPress} />
    </View>
  </View>
);

MediaText.PropTypes = {
  text: PropTypes.string.isRequired,
  button: PropTypes.shape({ title: PropTypes.string }).isRequired,
  onPress: PropTypes.func.isRequired
};

export default MediaText;

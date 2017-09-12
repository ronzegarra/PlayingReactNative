import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const Button = ({ text, onPress }) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.button}>{text}</Text>
    </TouchableOpacity>
  </View>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Button;

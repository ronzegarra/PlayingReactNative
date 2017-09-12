import React from 'react';
//import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';

import Images from '../../../Images';
import styles from './styles';

const Start = () => (
  <View style={styles.container}>
    <Image source={Images.logo} />
  </View>
);

export default Start;

import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Sizes from '../../utils/Sizes';

const Slider = props => {
  const render = () => {
    return (
      <View
        style={{flexDirection: 'row', width: '100%', borderRadius: Sizes.s40}}>
        <View
          style={{
            height: Sizes.s10,
            width: '20%',
            backgroundColor: '#FFC069',
          }}>
          <Text>{}</Text>
        </View>
        <View
          style={{
            height: Sizes.s10,
            width: '80%',
            backgroundColor: '#8C8C8C',
          }}>
          <Text>{}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{borderRadius: Sizes.s40, marginTop: Sizes.s10}}>
      {render()}
    </View>
  );
};

export default Slider;

import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Images from '../res/image';
import {screenWidth} from '../res/style/theme';

const NotiSuccessComponent = props => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Image
        source={Images.icon_credit}
        style={{height: screenWidth / 2, width: screenWidth * 0.8}}
      />
      <Text style={{fontSize: 20, color: 'black', marginTop: 10}}>
        Thank You !
      </Text>
      <Text style={{textAlign: 'center'}} numberOfLines={2}>
        Order placed successfully . For more details check your orders
      </Text>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Home');
        }}
        style={{
          height: 50,
          width: screenWidth / 2,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#0076FF',
          borderRadius: 8,
          marginTop: 10,
        }}>
        <Text style={{color: 'white', fontSize: 16}}>Continue Shopping</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NotiSuccessComponent;

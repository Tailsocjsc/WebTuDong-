import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
import Images from '../../res/image';
import {screenWidth} from '../../res/style/theme';

const Swipe = () => {
  return (
    <Swiper style={styles.wrapper} autoplay={true} dotColor={'white'} activeDotColor={'black'}>
      <View style={styles.slide1}>
        <Image
          resizeMode="cover"
          source={Images.icon_Qc}
          style={{
            width: screenWidth ,
            height: screenWidth * 0.4,
            
          }}
        />
      </View>
      <View style={styles.slide2}>
        <Image
          resizeMode="cover"
          source={Images.icon_Qc1}
          style={{
            width: screenWidth ,
            height: screenWidth * 0.4,
          }}
        />
      </View>
      <View style={styles.slide3}>
        <Image
          resizeMode="cover"
          source={Images.icon_Qc2}
          style={{
            width: screenWidth,
            height: screenWidth * 0.4,
          }}
        />
      </View>
    </Swiper>
  );
};

export default Swipe;
const styles = StyleSheet.create({
  wrapper: {height: screenWidth * 0.4,},
  slide1: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

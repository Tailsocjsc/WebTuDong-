import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';
import {colors, screenWidth} from '../res/style/theme';
import Sizes from '../utils/Sizes';
import Header from './Custom/Header';
import TextInputAnimated from './Custom/TextInputAnimated';

const AddressComponent = props => {
  const [state, setstate] = useState('');
  const [price, setPrice] = useState('');
  const [count, setCount] = useState('');
  const [Size123, setSize123] = useState('');
  React.useEffect(() => {
    const data = props.route.params.dataState;
    const data1 = props.route.params.dataPrice;
    const data2 = props.route.params.dataCount;
    const data3 = props.route.params.dataSize;
    setSize123(data3);
    setPrice(data1);
    setstate(data);
    setCount(data2);
  }, []);
  const onContinue = () => {
    props.navigation.navigate('CartBuyNow', {
      dataSize: Size123,
      dataCount: count,
      dataPrice: price,
      dataState: state,
    });
  };
  return (
    <View style={{flex: 1, backgroundColor: colors.white3}}>
      <Header
        title="My Address"
        isShowMenu
        isShowBack
        onPressBack={() => {
          props.navigation.goBack();
        }}
      />
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: Sizes.s20,
            marginHorizontal: Sizes.s20,
            paddingVertical: Sizes.s20,
            marginTop: Sizes.s20,
          }}>
          <View style={styles.viewText}>
            <TextInputAnimated
              label="Name "
              style={{marginTop: Sizes.s20}}
              value={''}
            />
          </View>
          <View style={styles.viewText}>
            <TextInputAnimated
              label="Phone "
              style={{marginTop: Sizes.s20}}
              value={''}
            />
          </View>
          <View style={styles.viewText}>
            <TextInputAnimated
              label="Email"
              style={{marginTop: Sizes.s20}}
              value={''}
            />
          </View>
          <View style={styles.viewText}>
            <TextInputAnimated
              label="Address "
              style={{marginTop: Sizes.s20}}
              value={''}
            />
          </View>
        </View>
        <View style={{height: Sizes.s100}}></View>
      </ScrollView>
      <View
        style={{
          height: Sizes.s120,
          width: screenWidth,
          backgroundColor: 'white',
          borderTopLeftRadius: Sizes.s40,
          borderTopRightRadius: Sizes.s40,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            onContinue();
          }}
          style={{
            height:  Sizes.s80,
            width: screenWidth * 0.4,
            backgroundColor: 'red',
            marginHorizontal: Sizes.s40,
            borderRadius: Sizes.h16,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white'}}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddressComponent;
const styles = StyleSheet.create({
  viewText: {
    marginHorizontal: Sizes.s20,
    paddingVertical: Sizes.s20,
  },
});

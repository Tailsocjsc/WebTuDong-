import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';
import {colors, screenWidth} from '../res/style/theme';
import Sizes from '../utils/Sizes';
import Header from './Custom/Header';

const CartComponent = props => {
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
  const onBuy = () => {
    props.navigation.navigate('NotiSuccess');
  };
  return (
    <View style={{flex: 1, backgroundColor: colors.white3}}>
      <Header
        title="My cart"
        isShowMenu
        isShowBack
        onPressBack={() => {
          props.navigation.goBack();
        }}
      />
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            marginHorizontal: Sizes.s20,
            marginTop:  Sizes.s40,
            backgroundColor: 'white',
            borderRadius:  Sizes.h16,
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal:  Sizes.s20,
              marginVertical:  Sizes.s20,
              justifyContent: 'space-between',
            }}>
            <Text style={{color: 'black', fontSize:  Sizes.h36}}>Delivery Address</Text>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Text style={{color: 'red'}}>Change</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              marginTop:  Sizes.s20,
              borderRadius:  Sizes.s20,
              marginHorizontal:  Sizes.s20,
            }}>
            <View style={styles.viewAddress}>
              <Text>Name</Text>
              <Text>Nguyen Tan Tai</Text>
            </View>
            <View style={[styles.viewAddress, {marginTop: Sizes.s20}]}>
              <Text>Phone</Text>
              <Text>082742992</Text>
            </View>
            <View style={[styles.viewAddress, {marginTop: Sizes.s20}]}>
              <Text>Email</Text>
              <Text>ntt123@gmail.com</Text>
            </View>
            <View style={[styles.viewAddress, {marginTop: Sizes.s20}]}>
              <Text>Address</Text>
              <Text>155A Nam Ky Khoi Nghia</Text>
            </View>
          </View>
          <View
            style={{
              marginHorizontal:  Sizes.s20,
              marginTop:  Sizes.s40,
            }}>
            <Text style={{color: 'black', fontSize:  Sizes.h36}}>My Order</Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              marginHorizontal:  Sizes.s20,
              flexDirection: 'row',
              marginTop:  Sizes.s20,
              borderRadius:  Sizes.s20,
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <View style={{flex: 3}}>
              
              <Image
                resizeMode="contain"
                source={state.imageSp}
                style={{width:  Sizes.s200, height:  Sizes.s200}}
              />
            </View>
            <View style={{flex: 7, marginHorizontal:  Sizes.s20}}>
              <Text style={{color: 'black', fontSize:  Sizes.h36}}>{state.nameSp}</Text>
              <Text style={{color: 'black', fontSize:  Sizes.h28}}>
                Size : {Size123}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{fontWeight: '600', color: 'blue', fontSize: 18}}>
                    $ {state.price}
                  </Text>
                  <Text
                    style={{
                      fontWeight: '600',
                      color: 'black',
                      fontSize: 14,
                      textDecorationLine: 'line-through',
                      marginLeft: 10,
                    }}>
                    $ {state.price}
                  </Text>
                </View>
                <Text>Quantity: {count}</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 10,
              marginTop: 10,
              paddingVertical: 10,
            }}>
            <Text style={{color: 'black', fontSize: 18}}>Have a coupon?</Text>
            <Text style={{color: 'black', fontSize: 12}}>
              Enter your coupon code here & get awesome discounts!
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottomWidth: 0.5,
                borderBottomColor: colors.gray1,
                borderRadius: 5,
                marginTop: 10,
              }}>
              <TextInput
                style={{height: 35, width: '80%', fontSize: 12}}
                placeholder="Input coupon ..."
              />
              <TouchableOpacity
                style={{
                  backgroundColor: 'blue',
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  height: 35,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                }}>
                <Text style={{color: 'white'}}>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 10,
              marginTop: 10,
              borderRadius: 10,
            }}>
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                height: 50,
              }}>
              <Text style={{fontWeight: '600', color: 'black', fontSize: 18}}>
                Total :
              </Text>
              <Text style={{fontWeight: '600', color: 'black', fontSize: 18}}>
                $ {price}
              </Text>
            </View>
          </View>
        </View>
        <View style={{height: 60}}></View>
      </ScrollView>
      <View
        style={{
          height: 60,
          width: screenWidth,
          backgroundColor: 'white',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            onBuy();
          }}
          style={{
            height: 40,
            width: screenWidth * 0.4,
            backgroundColor: 'red',
            marginHorizontal: 20,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white'}}>CHECKOUT NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartComponent;
const styles = StyleSheet.create({
  viewAddress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

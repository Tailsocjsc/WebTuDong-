import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import DataDetail from '../res/image/DataDetail/Index';
import {colors} from '../res/style/theme';
import Header from './Custom/Header';

const DetailOrderComponent = props => {
  return (
    <View style={{flex: 1,backgroundColor:colors.white3}}>
      <Header
        title="Detail Order"
        isShowBack
        onPressBack={() => {
          props.navigation.goBack();
        }}
      />
      <ScrollView>
        <View style={{marginHorizontal: 10,paddingVertical:15, marginTop: 20,backgroundColor:'white',borderRadius:10}}>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 10,
              justifyContent: 'space-between',

            }}>
            <Text style={{color: 'black', fontSize: 18}}>Delivery Address</Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              marginTop: 10,
              borderRadius: 10,
              marginHorizontal: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text>Name</Text>
              <Text>Nguyen Tan Tai</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                justifyContent: 'space-between',
              }}>
              <Text>Phone</Text>
              <Text>082742992</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                justifyContent: 'space-between',
              }}>
              <Text>Email</Text>
              <Text>ntt123@gmail.com</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                justifyContent: 'space-between',
              }}>
              <Text>Address</Text>
              <Text>155A Nam Ky Khoi Nghia</Text>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 10,
              marginTop: 20,
            }}>
            <Text style={{color: 'black', fontSize: 18}}>My Order</Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              marginHorizontal: 10,
              flexDirection: 'row',
              marginTop: 10,
              borderRadius: 10,
              justifyContent: 'space-around',
              alignItems: 'center',
              borderBottomWidth:0.5
            }}>
            <View style={{flex: 3}}>
              <Image
                resizeMode="contain"
                source={DataDetail.imageSp}
                style={{width: 100, height: 100}}
              />
            </View>
            <View style={{flex: 7, marginHorizontal: 10}}>
              <Text style={{color: 'black', fontSize: 18}}>
                {DataDetail.nameSp}
              </Text>
              <Text style={{color: 'black', fontSize: 14}}>Size : 43</Text>
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
                    $ {DataDetail.price}
                  </Text>
                  <Text
                    style={{
                      fontWeight: '600',
                      color: 'black',
                      fontSize: 14,
                      textDecorationLine: 'line-through',
                      marginLeft: 10,
                    }}>
                    $ {DataDetail.price}
                  </Text>
                </View>
                <Text>Quantity: 1</Text>
              </View>
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
                $ 999
              </Text>
            </View>
          </View>
        </View>
        <View style={{height: 60}}></View>
      </ScrollView>
    </View>
  );
};

export default DetailOrderComponent;

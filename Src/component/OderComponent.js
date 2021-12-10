import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {colors} from '../res/style/theme';
import Header from './Custom/Header';

const OderComponent = (props) => {
  return (
    <View style={{flex: 1, backgroundColor: colors.white3}}>
      <Header
        title="My Order"
        isShowBack
        onPressBack={() => {
          props.navigation.goBack();
        }}
      />
      <View style={{marginHorizontal: 10, marginVertical: 10}}>
        <View style={{backgroundColor: 'white', borderRadius: 10}}>
          <View style={{marginHorizontal: 10, marginVertical:15}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{color: 'black', fontSize: 15, fontWeight: '500'}}>
                Order #90s09ds
              </Text>
              <Text>5/12/2021</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 8,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text>Item :</Text>
                <Text style={{color: 'black'}}>1</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>Total Price :</Text>
                <Text style={{color: 'black'}}>$195</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginTop: 8,
              }}>
              <TouchableOpacity
              onPress={()=>{props.navigation.navigate('DetailOrder')}}
                style={{
                  height: 30,
                  width: 70,
                  backgroundColor: colors.blue1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius:5
                }}>
                <Text style={{color: 'white', fontSize: 15,}}>
                  Detail
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 30,
                  width: 70,
                  backgroundColor: colors.red,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius:5,
                  marginLeft:10
                }}>
                <Text style={{color: 'white', fontSize: 15, }}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OderComponent;

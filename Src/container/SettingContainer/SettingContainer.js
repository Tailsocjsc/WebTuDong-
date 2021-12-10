import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Header from '../../component/Custom/Header';
import Images from '../../res/image';
import {colors, screenHeight} from '../../res/style/theme';

const SettingContainer = (props) => {
  return (
    <View style={{flex: 1, backgroundColor: colors.white3}}>
      <Header title="My Account"  />
      <View
        style={{
          marginHorizontal: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            borderRadius: 10,
            marginTop: 10,
          }}>
          <View
            style={{
              marginHorizontal: 20,
              marginVertical: 20,
              flexDirection: 'row',
            }}>
            <Image
              source={Images.ic_logo_no_images}
              style={{height: 100, width: 100}}
            />
            <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                marginLeft: 15,
                marginTop: 10,
              }}>
              <Text style={{color: 'black', fontSize: 18, fontWeight: '500'}}>
                Tai Nguyen Tan
              </Text>
              <Text style={{color: 'black', fontSize: 15}}>
                ntt123@gmail.com
              </Text>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 20,
              marginVertical: 20,
            }}>
            <Text style={{color: 'red'}}>Change</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          marginHorizontal: 10,
          marginTop: 10,
        }}>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 10,
            height: screenHeight,
          }}>
          <TouchableOpacity
          onPress={()=>{props.navigation.navigate('Oder')}}
            style={{
              flexDirection: 'row',
              marginHorizontal: 20,
              marginTop: 10,
              justifyContent: 'flex-start',
              alignItems: 'center',
              paddingVertical: 10,
              borderBottomWidth: 0.5,
              borderColor: 'gray',
            }}>
            <Image source={Images.icon_sent} style={{height: 25, width: 25}} />
            <Text style={{marginLeft: 20,color:'black'}}>My Order</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 20,
              marginTop: 10,
              justifyContent: 'flex-start',
              alignItems: 'center',
              paddingVertical: 10,
              borderBottomWidth: 0.5,
              borderColor: 'gray',
            }}>
            <Image source={Images.icon_location} style={{height: 25, width: 25}} />
            <Text style={{marginLeft: 20,color:'black'}}>My Address</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 20,
              marginTop: 10,
              justifyContent: 'flex-start',
              alignItems: 'center',
              paddingVertical: 10,
              borderBottomWidth: 0.5,
              borderColor: 'gray',
            }}>
            <Image source={Images.icon_notification} style={{height: 25, width: 25}} />
            <Text style={{marginLeft: 20 , color:'black'}}>Notification</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 20,
              marginTop: 10,
              justifyContent: 'flex-start',
              alignItems: 'center',
              paddingVertical: 10,
              borderBottomWidth: 0.5,
              borderColor: 'gray',
            }}>
            <Image source={Images.icon_log_out} style={{height: 25, width: 25}} />
            <Text style={{marginLeft: 20,color:'black'}}>Log out</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SettingContainer;

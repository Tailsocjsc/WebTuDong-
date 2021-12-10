import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {ProgressBar, Colors} from 'react-native-paper';
import Images from '../../res/image';
import {colors} from '../../res/style/theme';
import Sizes from '../../utils/Sizes';

const RenderItemType3 = props => {
  return (
    <TouchableOpacity
      style={{
        // width: 150,
        // height: 200,
        backgroundColor: 'white',
        borderRadius: Sizes.s10,
        marginHorizontal: Sizes.s10,
        // marginVertical: 5,
        paddingVertical: Sizes.h16,
        marginTop: Sizes.s10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginHorizontal: Sizes.s10,
          // marginVertical: 5,
        }}>
        <View>
          <View
            style={
              {
                // marginTop: 5,
                // marginLeft: 10,
              }
            }>
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  paddingHorizontal: Sizes.s10,
                  backgroundColor:
                    props.Data.item.Drs == 'New' ? '#00b894' : '#ffaf00',
                  borderRadius: Sizes.s20,
                }}>
                <Text
                  style={{
                    color: props.Data.item.Drs == 'New' ? 'white' : 'black',
                    fontSize: Sizes.s20,
                    fontWeight: '700',
                    fontFamily: 'small',
                  }}>
                  {props.Data.item.Drs}
                </Text>
              </View>
              <View style={{height: Sizes.s30, width: Sizes.s30}}></View>
            </View>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              resizeMode="cover"
              source={props.Data.item.imageSp}
              style={{
                width: Sizes.s130,
                height: Sizes.s130,
              }}
            />
          </View>
        </View>

        <View style={{marginLeft: Sizes.s20}}>
          <Text
            style={{
              fontWeight: '600',
              color: 'black',
              width: Sizes.s100,
              fontSize: Sizes.h26,
            }}
            numberOfLines={2}>
            {props.Data.item.nameSp}
          </Text>
          <View style={{}}>
            <Text
              style={{fontWeight: '600', color: 'blue', fontSize: Sizes.h24}}>
              $ {props.Data.item.price}
            </Text>
            <Text
              style={{
                fontWeight: '600',
                color: 'gray',
                fontSize: Sizes.s20,
                textDecorationLine: 'line-through',
                marginRight: Sizes.s20,
              }}>
              $ {props.Data.item.price}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: Sizes.s20,
        }}>
        <Image
          source={Images.icon_love}
          style={{
            width: Sizes.s30,
            height: Sizes.s30,
          }}
        />
        <TouchableOpacity
          style={{
            height: Sizes.s50,
            width: Sizes.s160,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ea4c62',
            borderRadius: Sizes.h12,
          }}>
          <Image
            source={Images.icon_shopping}
            style={{
              width: Sizes.s40,
              height: Sizes.s40,
            }}
          />
          <Text
            style={{color: 'white', fontSize: Sizes.h22, fontWeight: '500'}}>
            Buy now
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default RenderItemType3;

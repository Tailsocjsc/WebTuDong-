import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {ProgressBar, Colors} from 'react-native-paper';
import Images from '../../res/image';
import {colors} from '../../res/style/theme';
import Sizes from '../../utils/Sizes';

const RenderItem = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.OnPressDetail(props.Data.item);
      }}
      style={{
        width: Sizes.s240,
        height: Sizes.s300,
        backgroundColor: 'white',
        borderRadius: Sizes.s10,
        marginHorizontal: Sizes.s10,
        marginVertical: Sizes.s10,
      }}>
      {props.type == '2' ? (
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            marginHorizontal: Sizes.s20,
            marginTop: Sizes.s10,
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
          <Image
            source={Images.icon_love}
            style={{height: Sizes.s30, width: Sizes.s30}}
            resizeMode="contain"
          />
        </View>
      ) : null}
      {props.type == '4' ? (
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            marginHorizontal: Sizes.s20,
            marginTop: Sizes.s10,
          }}>
          <Image
            source={Images.icon_badge}
            style={{height: Sizes.s30, width: Sizes.s30}}
            resizeMode="contain"
          />
          <Image
            source={Images.icon_love}
            style={{height: Sizes.s30, width: Sizes.s30}}
            resizeMode="contain"
          />
        </View>
      ) : null}

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
      <View style={{marginHorizontal: Sizes.s10, alignItems: 'center'}}>
        <Text numberOfLines={1} style={{fontWeight: '600', color: 'black'}}>
          {props.Data.item.nameSp}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{fontWeight: '600', color: '#100dd1', fontSize: Sizes.h28}}>
            $ {props.Data.item.price}
          </Text>
          <Text
            style={{
              fontWeight: '600',
              color: 'gray',
              fontSize: Sizes.h24,
              textDecorationLine: 'line-through',
              marginLeft: Sizes.s20,
            }}>
            $ {props.Data.item.price}
          </Text>
        </View>
      </View>
      {props.type == '1' ? (
        <View>
          <View style={{marginHorizontal: Sizes.s20}}>
            <Text style={{color: 'gray', fontSize: Sizes.h24}}>
              {props.Data.item.sale}% Sold out
            </Text>
          </View>

          <ProgressBar
            progress={props.Data.item.sale / 100}
            color={'blue'}
            style={{marginHorizontal: Sizes.s20}}
          />
        </View>
      ) : null}
      {props.type == '2' ? (
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            marginHorizontal: Sizes.s20,
          }}>
          <Image
            source={Images.icon_rating}
            style={{height: Sizes.s40, width: Sizes.s80}}
          />
          <Image
            source={Images.icon_Plus}
            style={{
              height: Sizes.s40,
              width: Sizes.s40,
              backgroundColor: '#00b894',
              borderRadius: 999,
            }}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default RenderItem;

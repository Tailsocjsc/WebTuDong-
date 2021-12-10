import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import Images from '../res/image';
import DataAdidas from '../res/image/DataAdidas/Index';
import DataBalance from '../res/image/DataBalan/Index';
import DataConverse from '../res/image/DataConver/Index';
import DataMLB from '../res/image/DataMLB/Index';
import DataNike from '../res/image/DataNike';
import DataSp from '../res/image/DataSP/Index';
import DataVanr from '../res/image/DataVans/Index';
import {colors, screenWidth} from '../res/style/theme';
import Sizes from '../utils/Sizes';
import Header from './Custom/Header';

const ListProductComponent = props => {
  const renderItem = item => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('DetailProduct', {item: item.item});
        }}
        style={{
          width: screenWidth * 0.4,
          // height: 200,
          backgroundColor: 'white',
          borderRadius: Sizes.s10,
          marginHorizontal: Sizes.s20,
          marginVertical: Sizes.s20,
        }}>
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
              backgroundColor: item.item.Drs == 'New' ? '#00b894' : '#ffaf00',
              borderRadius: Sizes.s20,
            }}>
            <Text
              style={{
                color: item.item.Drs == 'New' ? 'white' : 'black',
                fontSize: Sizes.h22,
                fontWeight: '700',
                fontFamily: 'small',
              }}>
              {item.item.Drs}
            </Text>
          </View>
          <Image
            source={Images.icon_love}
            style={{height: Sizes.s40, width: Sizes.s40}}
            resizeMode="contain"
          />
        </View>
        <View style={{}}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              resizeMode="cover"
              source={item.item.imageSp}
              style={{
                width: Sizes.s160,
                height: Sizes.s160,
              }}
            />
          </View>
          <Text
            numberOfLines={2}
            style={{fontWeight: '600', color: 'black', textAlign: 'center'}}>
            {item.item.nameSp}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginHorizontal: Sizes.s20,
            }}>
            <Text
              style={{fontWeight: '600', color: 'blue', fontSize: Sizes.h28}}>
              ${item.item.price}
            </Text>
            <Text
              style={{
                fontWeight: '600',
                color: 'gray',
                fontSize: Sizes.h22,
                textDecorationLine: 'line-through',
                marginLeft: Sizes.s20,
              }}>
              ${item.item.price}
            </Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            marginHorizontal: Sizes.s20,
          }}>
          <Image
            source={Images.icon_rating}
            style={{height: Sizes.s60, width: Sizes.s120}}
          />
          <Image
            source={Images.icon_Plus}
            style={{
              height: Sizes.s50,
              width: Sizes.s50,
              backgroundColor: '#00b894',
              borderRadius: 999,
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };
  const renderData = item => {
    switch (item) {
      case 'Adidas':
        return DataAdidas;

        break;
      case 'Nike':
        return DataNike;

        break;
      case 'Balance':
        return DataBalance;

        break;
      case 'Converse':
        return DataConverse;

        break;
      case 'MLB':
        return DataMLB;

        break;
      case 'Vanr':
        return DataVanr;

        break;

      default:
        break;
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: colors.white3}}>
      <Header
        title={props.route.params.title}
        isShowMenu
        isShowBack
        onPressBack={() => {
          props.navigation.goBack();
        }}
      />
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={renderData(props.route.params.type)}
          keyExtractor={(item, index) => String(index)}
          renderItem={renderItem}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default ListProductComponent;

import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import Header from '../../component/Custom/Header';
import Images from '../../res/image';
import DataCart from '../../res/image/DataCart/Index';
import {colors, screenWidth} from '../../res/style/theme';

const CartContainer = props => {
  const [state, setState] = useState(0);
  React.useEffect(() => {
    total();
  }, []);
  const total = () => {
    var Sum = 0;
    for (var i = 0; i < DataCart.length; i++) {
      Sum = Sum + DataCart[i].Total;
    }
    setState(Sum);
  };
  const renderItem = item => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          marginHorizontal: 10,
          flexDirection: 'row',
          marginTop: 10,
          borderRadius: 10,
          justifyContent: 'space-around',
          alignItems: 'center',
          borderBottomWidth: 0.5,
        }}>
        <View style={{flex: 3}}>
          <Image
            resizeMode="contain"
            source={item.item.imageSp}
            style={{width: 100, height: 100}}
          />
        </View>
        <View style={{flex: 7, marginHorizontal: 10}}>
          <Text style={{color: 'black', fontSize: 18}}>{item.item.nameSp}</Text>
          <Text style={{color: 'black', fontSize: 14}}>
            Size : {item.item.Size}
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
              <Text style={{fontWeight: '600', color: 'blue', fontSize: 18}}>
                $ {item.item.price}
              </Text>
              <Text
                style={{
                  fontWeight: '600',
                  color: 'black',
                  fontSize: 14,
                  textDecorationLine: 'line-through',
                  marginLeft: 10,
                }}>
                $ {item.item.price}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                  style={{
                    backgroundColor: '#f3f3f3',
                    paddingHorizontal: 2,
                    paddingVertical: 2,
                    borderRadius: 4,
                  }}
                  onPress={() => Minus()}>
                  <Image
                    source={Images.icon_minus}
                    style={{height: 20, width: 20}}
                  />
                </TouchableOpacity>

                <Text
                  style={{paddingHorizontal: 10, fontSize: 17, color: 'black'}}>
                  {item.item.Count}
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#f3f3f3',
                    paddingHorizontal: 2,
                    paddingVertical: 2,
                    borderRadius: 4,
                  }}
                  onPress={() => Plus()}>
                  <Image
                    source={Images.icon_Add}
                    style={{height: 20, width: 20}}
                  />
                  </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: colors.white3}}>
      <Header
        title="List cart"
        isShowMenu
        isShowBack
        onPressBack={() => {
          props.navigation.goBack();
        }}
      />
      <ScrollView>
        <View
          style={{
            backgroundColor: 'white',
            marginTop: 10,
            marginHorizontal: 10,
            borderRadius: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 10,
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text style={{color: 'black', fontSize: 18}}>Delivery Address</Text>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Text style={{color: 'red'}}>Change</Text>
            </TouchableOpacity>
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
          <FlatList
            data={DataCart}
            keyExtractor={(item, index) => String(index)}
            renderItem={renderItem}
          />
          <View
            style={{
              marginHorizontal: 10,
              marginTop: 20,
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
                $ {state}
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 60,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <TouchableOpacity
              //   onPress={() => {
              //     onBuy();
              //   }}
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
      </ScrollView>
    </View>
  );
};

export default CartContainer;

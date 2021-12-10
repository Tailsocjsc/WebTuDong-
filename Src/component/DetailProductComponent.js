import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  LayoutAnimation,
  UIManager,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import Images from '../res/image';
import {colors, screenWidth} from '../res/style/theme';
import Sizes from '../utils/Sizes';
import Animation from './Custom/AlertAnimation';
import ColorCustom from './Custom/Color';
import Header from './Custom/Header';
import Size from './Custom/Size';
import WalletModal from './Custom/WalletModal';
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const DetailProductComponent = props => {
  const [state, setstate] = useState('');
  const [expande, setExpande] = useState(false);
  const [animated, setAnimated] = useState(false);
  const [animated1, setAnimated1] = useState(false);
  const [count, setCount] = useState(0);
  const [size, setSize] = useState('');
  const [price, setPrice] = useState('');
  const walletModal = React.createRef();
  React.useEffect(() => {
    const data = props.route.params.item;
    setstate(data);
  }, []);
  const Minus = () => {
    if (count > 0) {
      setCount(count - 1);
      setPrice(state.price * (count - 1));
      console.log(state.price * (count - 1));
    }
  };
  const Plus = () => {
    setCount(count + 1);
    setPrice(state.price * (count + 1));
    console.log(state.price * (count + 1));
  };
  const onSize = item => {
    console.log(item);
    setSize(item);
  };
  const Buy = () => {
    if (count == 0 || size === '') {
      if (count == 0) {
        setAnimated(true);
      } else if (size == '') {
        setAnimated1(true);
      }
    } else {
      props.navigation.navigate('Address', {
        dataSize: size,
        dataCount: count,
        dataPrice: price,
        dataState: state,
      });
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: colors.white3}}>
      {animated && (
        <Animation
          title="Please select quantity"
          offAnimatedState={() => setAnimated(false)}
        />
      )}
      {animated1 && (
        <Animation
          title="Please select size"
          offAnimatedState={() => setAnimated1(false)}
        />
      )}
      <Header
        title="Detail Product"
        isShowMenu
        isShowBack
        onPressBack={() => {
          props.navigation.goBack();
        }}
      />
      <ScrollView style={{flex: 1}}>
        <View style={{marginTop: Sizes.s20}}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: Sizes.s20,
              marginHorizontal: Sizes.s30,
            }}>
            <TouchableOpacity
              onPress={() => {
                walletModal.current.open();
              }}
              style={{marginTop: Sizes.s10, marginLeft: Sizes.s20}}>
              <Image
                resizeMode="contain"
                source={Images.icon_play}
                style={{width: Sizes.s40, height: Sizes.s40}}
              />
            </TouchableOpacity>

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: Sizes.s20,
              }}>
              <Image
                resizeMode="contain"
                source={state.imageSp}
                style={{width: screenWidth * 0.8, height: screenWidth * 0.6}}
              />
            </View>

            <View
              style={{
                marginHorizontal: Sizes.s40,
                marginVertical: Sizes.s40,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontSize: Sizes.s40}}>{state.nameSp}</Text>
                <Image
                  source={Images.icon_love}
                  style={{height: Sizes.s40, width: Sizes.s40}}
                  resizeMode="contain"
                />
              </View>

              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontWeight: '600',
                      color: 'blue',
                      fontSize: Sizes.h36,
                    }}>
                    $ {state.price}
                  </Text>
                  <Text
                    style={{
                      fontWeight: '600',
                      color: 'black',
                      fontSize: Sizes.h28,
                      textDecorationLine: 'line-through',
                      marginLeft: Sizes.s20,
                    }}>
                    $ {state.price}
                  </Text>
                  <Text
                    style={{
                      color: 'red',
                      fontSize: Sizes.h28,
                      marginLeft: Sizes.s30,
                    }}>
                    - {state.sale} OFF
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Image
                  source={Images.icon_rating}
                  style={{height: Sizes.s40, width: Sizes.s120}}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      backgroundColor: '#ea4c62',
                      color: 'white',
                      fontWeight: '500',
                      borderRadius: Sizes.h80,
                      paddingHorizontal: Sizes.s10,
                      fontSize: Sizes.h22,
                    }}>
                    5.0
                  </Text>
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: Sizes.h22,
                      marginLeft: Sizes.s10,
                    }}>
                    Very good
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{marginTop: Sizes.s20}}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: Sizes.s10,
              marginHorizontal: Sizes.s30,
            }}>
            <View style={styles.viewQuavsDetail}>
              <Text style={{color: 'black', fontSize: Sizes.h36}}>
                Quantity
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={styles.viewPlusMinue}
                  onPress={() => Minus()}>
                  <Image
                    source={Images.icon_minus}
                    style={{height: Sizes.s40, width: Sizes.s40}}
                  />
                </TouchableOpacity>

                <Text
                  style={{
                    paddingHorizontal: Sizes.s20,
                    fontSize: Sizes.h34,
                    color: 'black',
                  }}>
                  {count}
                </Text>
                <TouchableOpacity
                  style={styles.viewPlusMinue}
                  onPress={() => Plus()}>
                  <Image
                    source={Images.icon_Add}
                    style={{height: Sizes.s40, width: Sizes.s40}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={{marginTop: Sizes.s20}}>
          <View style={styles.viewLabel}>
            <View style={styles.viewItemLabel}>
              <Text style={{color: 'black', fontSize: Sizes.h36, width: '20%'}}>
                Color
              </Text>
              <View>
                <ColorCustom />
              </View>
            </View>
          </View>
        </View>
        <View style={{marginTop: Sizes.s20}}>
          <View style={styles.viewLabel}>
            <View style={styles.viewItemLabel}>
              <Text style={{color: 'black', fontSize: Sizes.h36, width: '20%'}}>
                Size
              </Text>
              <Size
                OnSize={item => {
                  onSize(item);
                }}
              />
            </View>
          </View>
        </View>
        <View style={{marginTop: Sizes.s20}}>
          <View style={styles.viewLabel}>
            <TouchableOpacity
              style={styles.viewQuavsDetail}
              onPress={() => {
                LayoutAnimation.configureNext(
                  LayoutAnimation.Presets.easeInEaseOut,
                );
                setExpande(!expande);
              }}>
              <Text style={{color: 'black', fontSize: Sizes.h36}}>
                Detai Product
              </Text>
              <Image
                source={Images.icon_down}
                style={{height: Sizes.h34, width: Sizes.h34}}
              />
            </TouchableOpacity>

            <View style={{backgroundColor: 'white', overflow: 'hidden'}}>
              {expande && (
                <View
                  style={{
                    marginHorizontal: Sizes.s40,
                    borderRadius: Sizes.s10,
                  }}>
                  <Text style={{color: 'black'}}> {state.Content}</Text>
                </View>
              )}
            </View>
          </View>
        </View>
        <View style={{height: Sizes.s100}}></View>
        <WalletModal ref={walletModal} />
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
          style={[styles.viewButton, {backgroundColor: 'black'}]}>
          <Text style={{color: 'white'}}>ADD TO CART</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Buy();
          }}
          style={[styles.viewButton, {backgroundColor: 'red'}]}>
          <Text style={{color: 'white'}}>BUY NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailProductComponent;
const styles = StyleSheet.create({
  viewItemLabel: {
    marginHorizontal: Sizes.s40,
    height: Sizes.s100,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewPlusMinue: {
    backgroundColor: '#f3f3f3',
    paddingHorizontal: Sizes.s4,
    paddingVertical: Sizes.s4,
    borderRadius: Sizes.s10,
  },
  viewLabel: {
    backgroundColor: 'white',
    borderRadius: Sizes.s10,
    marginHorizontal: Sizes.s30,
  },
  viewQuavsDetail: {
    overflow: 'hidden',
    marginHorizontal: Sizes.s40,
    height: Sizes.s100,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewButton: {
    height: Sizes.s80,
    width: screenWidth * 0.4,
    marginHorizontal: Sizes.s40,
    borderRadius: Sizes.h16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

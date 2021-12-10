import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {colors, screenWidth} from '../res/style/theme';
import Header from './Custom/Header';
import Swipe from './Custom/Swipe';
import DataSp from '../res/image/DataSP/Index';
import CountDown from 'react-native-countdown-component';
import RenderItem from './Custom/RenderItem';
import DataNike from '../res/image/DataNike';
import Images from '../res/image';
import SwiperImagebackgrounp from './Custom/SwiperImageBackgrounp';
import RenderItemType3 from './Custom/RenderItemType3';

const HomeComponent = props => {
  const onPressDetail = item => {
    props.navigation.navigate('CartBuyNow', {item: item});
  };

  const renderItem = item => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('ListProduct', {
            type: item.item.nameSp,
            title: 'List Products',
          });
        }}
        style={{
          width: 120,
          height: 65,
          backgroundColor: 'white',
          borderRadius: 5,
          marginHorizontal: 5,
          marginVertical: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          resizeMode="cover"
          source={item.item.imageSp}
          style={{
            width: 35,
            height: 35,
          }}
        />
        <Text style={{fontWeight: '600', color: '#747794'}} f>
          {item.item.nameSp}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: colors.white3}}>
      <Header search isShowMenu isLogo />
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            height: screenWidth * 0.4,
            marginTop: 10,
            marginHorizontal: 10,
          }}>
          <Swipe />
        </View>
        <Text
          style={{
            marginHorizontal: 10,
            marginTop: 10,
            fontSize: 17,
            fontWeight: '600',
            color: 'black',
          }}>
          Product Categories
        </Text>
        <View
          style={{
            height: screenWidth * 0.4,
            marginTop: 10,
            marginHorizontal: 10,
          }}>
          <FlatList
            data={DataSp}
            keyExtractor={(item, index) => String(index)}
            renderItem={renderItem}
            numColumns={3}
          />
        </View>
        <View
          style={{
            marginHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems:'center'}}>
            <Image source={Images.icon_Flash} style={{height: 20, width: 20}} />
            <Text style={{fontSize: 17, fontWeight: '600', color: 'black'}}>
              Flash sale
            </Text>
          </View>

          <CountDown
            until={60 * 10000000 + 30}
            size={12}
            digitStyle={{backgroundColor: '#FFF', height: 25, width: 25}}
            digitTxtStyle={{color: '#1CC625'}}
            timeToShow={['M', 'S']}
            timeLabels={{m: null, s: null}}
          />
        </View>
        <View
          style={{
            height: screenWidth * 0.33,
            marginHorizontal: 10,
          }}>
          <FlatList
            data={DataNike}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => String(index)}
            renderItem={item => {
              return (
                <RenderItem
                  Data={item}
                  type="1"
                  OnPressDetail={item => onPressDetail(item)}
                />
              );
            }}
          />
        </View>
        <View
          style={{
            marginTop: 10,
            marginHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 17, fontWeight: '600', color: 'black'}}>
            Top Products
          </Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('ListProduct', {
                type: 'Nike',
                title: 'Top Products',
              });
            }}>
            <Text style={{fontSize: 12,  color: 'gray', fontWeight: '500'}}>View all</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: screenWidth * 0.4,
            marginHorizontal: 10,
          }}>
          <FlatList
            data={DataNike}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => String(index)}
            renderItem={item => {
              return <RenderItem Data={item} type="2" />;
            }}
          />
        </View>
        <View style={{marginHorizontal: 15, marginTop: 10}}>
          <ImageBackground
            style={{
              height: screenWidth * 0.3,
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
            }}
            source={Images.icon_Qc}>
            <View style={{marginHorizontal: 10}}>
              <Text style={{fontSize: 17, fontWeight: '600', color: 'white'}}>
                On Sale 50% Off!
              </Text>
              <Text style={{fontSize: 15, color: 'white', width: 250}}>
                Suha is a multipurpose, creative & modern mobile template.
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: colors.yellow1,
                  width: 80,
                  height: 35,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 6,
                }}>
                <Text style={{fontWeight: '600', color: 'black', fontSize: 12}}>
                  Shop Today
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            marginTop: 10,
            marginHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 17, fontWeight: '600', color: 'black'}}>
            Weekly Best Sellers
          </Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('ListProduct', {
                type: 'Nike',
                title: 'Weekly Best Sellers',
              });
            }}>
            <Text style={{fontSize: 12,  color: 'gray', fontWeight: '500'}}>View all</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            // height: screenWidth * 0.35,
            marginHorizontal: 10,
          }}>
          <FlatList
            data={DataNike}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => String(index)}
            renderItem={item => {
              return <RenderItemType3 Data={item} type="3" />;
            }}
          />
        </View>
        <View style={{marginHorizontal: 15, marginTop: 10}}>
          <ImageBackground
            style={{
              height: screenWidth * 0.2,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            source={Images.icon_Qc1}>
            <View
              style={{
                marginHorizontal: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: '600',
                  color: 'white',
                  width: screenWidth * 0.3,
                  borderRightWidth: 2,
                  borderColor: 'white',
                }}>
                Get 20% discount
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: 'white',
                  width: screenWidth * 0.6,
                  marginLeft: 5,
                }}>
                To get discount, enter theGET20code on the checkout page.
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            marginTop: 10,
            marginHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 17, fontWeight: '600', color: 'black'}}>
            Featured Products
          </Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('ListProduct', {
                type: 'Nike',
                title: 'Featured Products',
              });
            }}>
            <Text style={{fontSize: 12, color: 'gray', fontWeight: '500'}}>View all</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: screenWidth * 0.35,
            marginHorizontal: 10,
          }}>
          <FlatList
            data={DataNike}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => String(index)}
            renderItem={item => {
              return <RenderItem Data={item} type="4" />;
            }}
          />
        </View>
        <View
          style={{
            marginTop: 10,
            marginHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 17, fontWeight: '600', color: 'black'}}>
            Collections
          </Text>
          <Text style={{fontSize: 12, color: 'gray', fontWeight: '500'}}>View all</Text>
        </View>
        <View
          style={{
            height: screenWidth * 0.3,
            marginHorizontal: 10,
          }}>
          <SwiperImagebackgrounp />
        </View>
        <View style={{marginBottom: 100}}></View>
      </ScrollView>
    </View>
  );
};

export default HomeComponent;

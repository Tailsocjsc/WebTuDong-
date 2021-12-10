import * as React from 'react';
import {Image, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Sizes from './Src/utils/Sizes';
import Images from './Src/res/image';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeContainer from './Src/container/HomeContainer/HomeContainer';
import LoginContainer from './Src/container/LoginContainer/LoginContainer';
import CartContainer from './Src/container/CartContainer/CartContainer';
import PagesContainer from './Src/container/PageContainer/PagesContainer';
import SettingContainer from './Src/container/SettingContainer/SettingContainer';
import NikeComponent from './Src/component/OderComponent';
import VanrComponent from './Src/component/DetailOrderComponent';
import ConverseComponent from './Src/component/AddressComponent';
import CartComponent from './Src/component/CartComponent';
import ListProductComponent from './Src/component/ListProductComponent';
import CartBuyNowComponent from './Src/component/DetailProductComponent';
import NotiSuccessComponent from './Src/component/NotiSuccessComponent';
import OderComponent from './Src/component/OderComponent';
import DetailOrderComponent from './Src/component/DetailOrderComponent';
import AddressComponent from './Src/component/AddressComponent';
import DetailProductComponent from './Src/component/DetailProductComponent';
const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard:true,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white',
          position: 'absolute',
          height: Sizes.s160,
          shadowColor: '#000',
          shadowOpacity: 0.06,
          shadowOffset: {
            width: Sizes.s20,
            height: Sizes.s20,
          },
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeContainer}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                resizeMode="contain"
                source={Images.ic_Home}
                style={{
                  width: Sizes.s50,
                  height: Sizes.s50,
                  tintColor: focused ? '#0076FF' : 'black',
                }}
              />
              <Text
                style={{
                  fontSize: Sizes.h24,
                  width: Sizes.s140,
                  textAlign: 'center',
                  // fontWeight: focused ? 'bold' : 'normal',
                  color: focused ? '#0076FF' : 'black',
                }}>
                HOME
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={LoginContainer}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                resizeMode="contain"
                source={Images.icon_support}
                style={{
                  width: Sizes.s50,
                  height: Sizes.s50,
                  tintColor: focused ? '#0076FF' : 'black',
                }}
              />
              <Text
                style={{
                  fontSize: Sizes.h24,
                  width: Sizes.s140,
                  textAlign: 'center',
                  // fontWeight: focused ? 'bold' : 'normal',
                  color: focused ? '#0076FF' : 'black',
                }}>
                SUPPORT
              </Text>
            </View>
          ),
        }}
      />
       <Tab.Screen
        name="Cart"
        component={CartContainer}
        options={{
          tabBarHideOnKeyboard:true,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                resizeMode="contain"
                source={Images.icon_shopping}
                style={{
                  width: Sizes.s50,
                  height: Sizes.s50,
                  tintColor: focused ? '#0076FF' : 'black',
                }}
              />
              <Text
                style={{
                  fontSize: Sizes.h24,
                  width: Sizes.s140,
                  textAlign: 'center',
                  // fontWeight: focused ? 'bold' : 'normal',
                  color: focused ? '#0076FF' : 'black',
                }}>
                CART
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Pages"
        component={PagesContainer}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                resizeMode="contain"
                source={Images.icon_love}
                style={{
                  width: Sizes.s50,
                  height: Sizes.s50,
                  tintColor: focused ? '#0076FF' : 'black',
                }}
              />
              <Text
                style={{
                  fontSize: Sizes.h24,
                  width: Sizes.s140,
                  textAlign: 'center',
                  // fontWeight: focused ? 'bold' : 'normal',
                  color: focused ? '#0076FF' : 'black',
                }}>
                PAGES
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingContainer}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                resizeMode="contain"
                source={Images.icon_settings}
                style={{
                  width: Sizes.s50,
                  height: Sizes.s50,
                  tintColor: focused ? '#0076FF' : 'black',
                }}
              />
              <Text
                style={{
                  fontSize: Sizes.h24,
                  width: Sizes.s140,
                  textAlign: 'center',
                  // fontWeight: focused ? 'bold' : 'normal',
                  color: focused ? '#0076FF' : 'black',
                }}>
                SETTING
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const App = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="MyTabs"
          component={MyTabs}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Oder"
          component={OderComponent}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name="ListProduct"
          component={ListProductComponent}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name="NotiSuccess"
          component={NotiSuccessComponent}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name="DetailOrder"
          component={DetailOrderComponent}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name="Address"
          component={AddressComponent}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name="DetailProduct"
          component={DetailProductComponent}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="CartBuyNow"
          component={CartComponent}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

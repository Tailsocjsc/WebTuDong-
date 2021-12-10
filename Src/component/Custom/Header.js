import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  Platform,
  TextInput,
} from 'react-native';

import Images from '../../res/image';
import {colors, screenWidth, screenHeight} from '../../res/style/theme';
import Sizes from '../../utils/Sizes';
import StatusBarView from './StatusBarView';

const Header = props => {
  const iconLogo = () => (
    <TouchableOpacity
      style={[styles.iconBack,{borderRadius:999}]}
      // onPress={() => props.onPressBack()}
      >
      <Image
        source={Images.icon_SOC}
        style={{width: Sizes.s60, height: Sizes.s60}}
      />
    </TouchableOpacity>
  );
  const iconBack = () => (
    <TouchableOpacity
      style={[styles.iconBack,{borderRadius:999}]}
      onPress={() => props.onPressBack()}
      >
      <Image
        source={Images.icon_back}
        style={{width: Sizes.s60, height: Sizes.s60}}
      />
    </TouchableOpacity>
  );
  const iconMenu = () => (
    <TouchableOpacity
      style={styles.iconBack}
      // onPress={() => props.onPressMenu()}
      >
      <Image
        source={Images.icon_Menu}
        style={{width: Sizes.s50, height: Sizes.s50}}
      />
    </TouchableOpacity>
  );
  const iconRight = () => (
    <View
      style={{
        height: Sizes.s80,
        marginHorizontal: Sizes.s20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <TouchableOpacity
      // onPress={() => props.onPressRightVN()}
      >
        <Image
          source={Images.ic_flag_vietnam}
          style={{width: Sizes.s50, height: Sizes.s35}}
        />
      </TouchableOpacity>
      <TouchableOpacity
      //  onPress={() => props.onPressRightEN()}
      >
        <Image
          source={Images.ic_flag_english}
          style={{width: Sizes.s50, marginLeft: 10, height: Sizes.s35}}
        />
      </TouchableOpacity>
      {/* <TouchableOpacity style={{marginHorizontal: Sizes.s20,}} onPress={() => props.onPressRightJA()}>
        <Image
          source={require('../../res/image/img/Asset-1.png')}
          style={{width: Sizes.s50, height: Sizes.s35}}
        />
      </TouchableOpacity> */}
    </View>
  );

  const textRight = () => (
    <TouchableOpacity
      style={{
        marginHorizontal: Sizes.s20,
        width: Sizes.s80,
        height: Sizes.s80,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={() => props.onPressNavigate()}>
      <Text style={{color: 'white', fontSize: Sizes.h34, fontWeight: '700'}}>
        abc
      </Text>
    </TouchableOpacity>
  );
  //////////////////////////////////
  return (
    <View style={{backgroundColor: 'white'}}>
      {/* <StatusBarView /> */}
      {/* <View style={styles.container}> */}
      <View
        style={{
          height: Platform.OS === 'ios' ? Sizes.s100 : Sizes.s110,

          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          // flex: 3,
          // flex:1
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'flex-start',
            flex: 0.2,
          }}>
          {props.isShowBack ? iconBack() : null}
          {props.isLogo? iconLogo() : null}
        </View>
        <Text style={{color:'black', fontSize: 17,}}>
          {props.title}
        </Text>
        {props.search ?<View
          style={{justifyContent: 'center', alignItems: 'center', flex: 0.6}}>
          <View
            style={{
              borderWidth: 0.5,
              width: '80%',
              height: 35,
              alignItems: 'center',
              justifyContent: 'flex-start',
              flexDirection:'row',
              borderRadius:5,
              borderColor:'#ebebeb'
              
            }}>
            <Image
              source={Images.ic_search}
              style={{width: Sizes.s50, height: Sizes.s50,}}
            />
            <TextInput style={{width:'80%',height: 35,fontSize: 12,}} placeholder="Enter your keyword ..." placeholderTextColor="#858c93"/>
          </View>
        </View> :null}
        
        <View
          style={{justifyContent: 'center', alignItems: 'flex-end', flex: 0.2}}>
            {props.isShowMenu ? iconMenu() : null}
          {props.isShowImage ? images(props.image) : null}
          {/* isShowRight */}
          {props.isShowRight ? iconRight() : null}

          {props.isShowTextRight ? textRight() : null}
        </View>
      </View>
      {/* </View> */}
    </View>
  );
};

export default Header;
Header.defaultProps = {
  onPressBack: () => {},
  onPressMenu: () => {},
  onPressRightVN: () => {},
  onPressRightEN: () => {},
  onPressRightJA: () => {},
  onPressRightCN: () => {},
  onPressRightES: () => {},

  onPressNavigate: () => {},
  onPressImage: () => {},
};
const styles = StyleSheet.create({
  container: {
    height: Platform.OS === 'ios' ? Sizes.s100 : Sizes.s110,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    //  backgroundColor: '#bb64a1',
    // borderColor: colors.gray,
    // borderBottomWidth: 1,
  },
  title: {
    fontSize: Sizes.h36,
    fontWeight: 'bold',
    color: colors.black,
  },
  iconBack: {
    position: 'absolute',
    // left: 0,
    height: Sizes.h95,
    paddingHorizontal: Sizes.h20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

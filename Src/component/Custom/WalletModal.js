import React, {useState, forwardRef, useRef, useImperativeHandle} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import {colors, fonts, screenHeight, screenWidth} from '../../res/style/theme';

import Modals from './Modal';
import YoutubePlayer from 'react-native-youtube-iframe';
import Images from '../../res/image';

const WalletModal = forwardRef((props, ref) => {
  const playerRef = useRef();
  //   const [selected, setSelected] = useState('');
  const [arrItem, setArrItem] = useState([]);

  const modalRef = useRef();

  const onCancel = () => {
    onClose();
  };
  const onClose = () => {
    modalRef.current.close();
  };
  useImperativeHandle(ref, () => ({
    open: () => modalRef.current.open(),
    close: () => onClose(),
  }));

  return (
    <Modals ref={modalRef}>
      <View style={styles.edit}>
        <TouchableOpacity onPress={()=>onCancel()} style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>
          <Image
            source={Images.icon_cross}
            style={{height: 25, width: 25, backgroundColor: '#c05b6d'}}
          />
        </TouchableOpacity>
        <View
          style={[
            styles.edit,
            // {
            //   backgroundColor: colors.white,
            //   borderRadius: 10,
            //   paddingVertical: 10,
            //   paddingHorizontal: 10,
            // },
          ]}>
          <YoutubePlayer
            ref={playerRef}
            height={300}
            // width={screenWidth*0.9}
            videoId={'AVAc1gYLZK0'}
            play={true}
            style={{}}
          />
        </View>
      </View>
    </Modals>
  );
});
export default WalletModal;

WalletModal.defaultProps = {
  cardName: '',
  money: '',
  onSubmit: () => {},
};

const styles = StyleSheet.create({
  edit: {
    height: 220,
    width: screenWidth * 0.9,
  },
  titleEdit: {
    textAlign: 'left',
    color: colors.black,
    fontFamily: fonts.bold,
    fontWeight: '700',
  },
  input: {
    marginTop: 20,
  },
  viewBtn: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
  },
  btn: {
    backgroundColor: '#5DB1E7',
    borderRadius: 8,
    padding: 12,
    width: '30%',
  },
  txtBtn: {
    fontFamily: fonts.bold,
    color: colors.white,
    textAlign: 'center',
  },
  action: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 8,
    right: 8,
  },
});

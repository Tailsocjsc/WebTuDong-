import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import Images from '../../res/image';
import {colors} from '../../res/style/theme';

const ColorCustom = props => {
  const [arrItem, setArrItem] = useState('');
  const list = [
    {
      id: 1,
      position: '#000000',
    },
    {
      id: 2,
      position: '#FF0000',
    },
    {
      id: 3,
      position: '#00FF00',
    },
    {
      id: 4,
      position: '#0000FF',
    },
    {
      id: 5,
      position: '#FFFF00',
    },
    {
      id: 7,
      position: '#C0C0C0',
    },
  ];
  const renderItem = item => {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          key={item.item.id}
          style={[
            {
              paddingHorizontal: 10,
              borderWidth: 1,
              marginHorizontal: 5,
              marginVertical: 5,
              borderRadius: 999,
              borderColor: colors.gray1,
              backgroundColor: item.item.position,
              height: 20,
              width: 20,
              justifyContent: 'center',
              alignItems: 'center',
            },
            // arrItem == item.item.id && {backgroundColor: '#5DB1E7'},
          ]}
          onPress={() => {
            setArrItem(item.item.id);
            // props.OnSize(item.item.position)
          }}>
          {arrItem == item.item.id && (
            <Image
              source={
                arrItem == 1 ? Images.ic_check : Images.icon_check2
              }
              style={{height: 10, width: 10}}
            />
          )}
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={list}
      keyExtractor={(item, index) => String(index)}
      renderItem={renderItem}
    />
  );
};

export default ColorCustom;

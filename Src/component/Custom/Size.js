import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import { colors } from '../../res/style/theme';
import Sizes from '../../utils/Sizes';

const Size = (props) => {
  const [arrItem, setArrItem] = useState('');
  const list = [
    {
      id: 1,
      position: '35',
    },
    {
      id: 2,
      position: '36',
    },
    {
      id: 3,
      position: '37',
    },
    {
      id: 4,
      position: '38',
    },
    {
      id: 5,
      position: '39',
    },
    {
      id: 6,
      position: '40',
    },
    {
      id: 7,
      position: '41',
    },
    {
      id: 8,
      position: '43',
    },
    {
      id: 9,
      position: '44',
    },
    {
      id: 10,
      position: '45',
    },
  ];
  const renderItem = item => {
    return (
      <TouchableOpacity
        key={item.item.id}
        style={[
          {
            paddingHorizontal: Sizes.s20,
            borderWidth: 1,
            marginHorizontal: Sizes.s10,
            marginVertical: Sizes.s10,
            borderRadius: Sizes.s20,
            borderColor: colors.gray1,
          },
          arrItem == item.item.id && {backgroundColor: '#5DB1E7'},
        ]}
        onPress={() => {
          setArrItem(item.item.id);
          props.OnSize(item.item.position)
        }}>
        <Text
          style={[
            {fontSize: 15, fontWeight: '700'},
            arrItem == item.item.id && {color: 'white'},
          ]}>
          {item.item.position}
        </Text>
      </TouchableOpacity>
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

export default Size;

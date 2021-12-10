import * as React from 'react';
import {Text, View, StyleSheet, FlatList, ImageBackground} from 'react-native';
import DataDer from '../../res/image/Data/Index';
import {screenWidth} from '../../res/style/theme';
export default function SwiperImageBackgrounp() {
  const listRef = React.useRef();
  React.useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      idx += 2;
      if (idx >= DataDer.length) {
        listRef.current.scrollToIndex({index: DataDer.length - 1});
        idx = -2;
      } else {
        listRef.current.scrollToIndex({index: idx});
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        ref={listRef}
        data={DataDer}
        keyExtractor={(item, index) => String(index)}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        renderItem={({item, index}) => {
          return (
            <View style={{borderRadius: 7}}>
              <ImageBackground
                resizeMode="contain"
                source={item.imageSp}
                style={{
                  height: 100,
                  width: screenWidth * 0.2,
                  marginHorizontal: 5,
                  borderRadius: 7,
                  justifyContent: 'flex-end',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    backgroundColor: 'rgba(52, 52, 52, 0.3)',
                  }}>
                  <Text
                    style={{
                      fontWeight: '600',
                      color: 'white',
                      marginLeft: 5,
                      fontSize: 12,
                    }}>
                    {item.nameSp}
                  </Text>
                  <Text
                    style={{
                      fontWeight: '600',
                      color: 'white',
                      marginRight: 5,
                      fontSize: 12,
                    }}>
                    +{item.item}
                  </Text>
                </View>
              </ImageBackground>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

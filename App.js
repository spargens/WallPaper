import {FlatList, Image, View, Dimensions, Text} from 'react-native';
import imgs from './imgs';

const {width, height} = Dimensions.get('screen');

export default function App() {
  return (
    <View>
      <Text
        style={{
          fontWeight: 'bold',
          color: 'white',
          marginLeft: 12,
          fontSize: 18,
        }}>
        Wallpaper
      </Text>
      <FlatList
        data={imgs}
        keyExtractor={(_, index) => index}
        horizontal={true}
        renderItem={({item, index}) => {
          return (
            <View>
              <Image
                source={{uri: item}}
                style={{width: width, height: height}}
                resizeMode="cover"
              />
            </View>
          );
        }}
      />
    </View>
  );
}

import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import {
  useSharedValue,
} from 'react-native-reanimated';


export default function App() {
  const height = useSharedValue(0);

  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 100,
          height: 100,
        }}
        source={{
          uri: "https://c.tenor.com/MYZgsN2TDJAAAAAC/this-is.gif",
        }}
      />
      <Text>Gif should be animated</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

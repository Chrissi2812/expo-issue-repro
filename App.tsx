import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
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

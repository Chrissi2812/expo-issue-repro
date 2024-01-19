import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig =  {
  /**
   * SUPPLY A VALID FIREBASE_CONFIG
   *
   * REMOVED MINE
   */
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore(firebaseApp);

// Doesn't really matter what function you call.
firestore.waitForPendingWrites();
// firestore.doc('').get() would also trigger the error

export default function App() {
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

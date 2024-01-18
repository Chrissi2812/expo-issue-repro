import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Updates from 'expo-updates';
import {
  useEffect,
  useState,
} from 'react';
import {
  useSharedValue,
} from 'react-native-reanimated';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [updatePending, setUpdatePending] = useState(false);

  const height = useSharedValue(0);

  useEffect(() => {
    (async () => {
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });

      await SplashScreen.hideAsync();
    })();
  }, []);

  useEffect(() => {
    if (__DEV__) return;

    let timeout;
    const timeoutPromise = new Promise((_, reject) => {
      timeout = setTimeout(() => {
        reject(new Error('Expo Update Error: checkForUpdateAsync timeout'));
      }, 3000);
    });

    (async () => {
      // We wait a bit before checking for a new Update
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });

      const { isAvailable } = (await Promise.race([
        timeoutPromise,
        Updates.checkForUpdateAsync(),
      ])) as Updates.UpdateCheckResult;

      if (isAvailable) {
        setUpdateAvailable(true);

        Updates.fetchUpdateAsync().then(() => {
          setUpdatePending(true);
        });
      }

      clearTimeout(timeout);
    })();
  }, []);

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
      {
        updateAvailable && (
          <Pressable
            onPress={async () => {
              // Make sure the download is started before trying to restart the app.
              if (updatePending) {
                await Updates.reloadAsync();
              }
            }}
          >
            <Text>{ `Neue Version ${updatePending ? 'heruntergeladen!' : 'wird heruntergeladen...'}` }</Text>
          </Pressable>
        )
      }
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

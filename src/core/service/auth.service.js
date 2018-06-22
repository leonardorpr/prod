import { AsyncStorage } from 'react-native';

export const TOKEN_KEY = "@Prod:token";

export const onSignIn = (token) => AsyncStorage.setItem(TOKEN_KEY, token);

export const onSignOut = () => AsyncStorage.removeItem(TOKEN_KEY);

export const isSignedIn = async () => {
  const token = await AsyncStorage.getItem(TOKEN_KEY);

  return (token !== null) ? true : false;
};

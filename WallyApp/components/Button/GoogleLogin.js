import React, {useState} from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-community/google-signin';

export const GoogleLogin = () => {
  const [isSigninInProgress, setIsSigninInProgress] = useState(false);
  const signIn = () => {
    console.log('Yikes');
  };
  return (
    <GoogleSigninButton
      style={{width: 192, height: 48}}
      size={GoogleSigninButton.Size.Large}
      color={GoogleSigninButton.Color.Dark}
      onPress={signIn}
      disabled={isSigninInProgress}
    />
  );
};

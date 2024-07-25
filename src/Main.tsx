import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import LoginScreen from './screens/auth/LoginScreen';
import {useAuth} from './context/AuthContext';

const WelcomeScreen = () => {
  const {isLoggedIn, logout} = useAuth();
  return (
    <View style={{flex: 1}}>
      {isLoggedIn ? (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 24}}>Welcome to the app!</Text>
          <TouchableOpacity
            style={{
              width: '100%',
              height: 52,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 8,
              marginTop: 16,
              backgroundColor: 'red',
            }}
            onPress={logout}>
            <Text style={{color: 'white'}}>ĐĂNG XUẤT</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{flex: 1, borderWidth: 1}}>
          <LoginScreen />
        </View>
      )}
    </View>
  );
};

export default WelcomeScreen;

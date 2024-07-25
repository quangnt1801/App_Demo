import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useContext, useState} from 'react';
import {useAuth} from '../../context/AuthContext';

const LoginScreen = () => {
  const {login} = useAuth();
  const [email, setEmail] = useState({
    value: '',
    isValid: false,
    msgError: '',
  });
  const [password, setPassword] = useState({
    value: '',
    isValid: false,
    msgError: '',
  });

  const handleOnChangeText = (value: string, key: string) => {
    switch (key) {
      case 'EmailOrPhone':
        const checkValidEmail =
          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        const isValidEmail = checkValidEmail.test(value);
        setEmail({
          value: value,
          msgError: !isValidEmail ? 'Bạn nhập không phải email.' : '',
          isValid: isValidEmail,
        });
        break;

      case 'Password':
        const isValidPassword = value.length < 6;
        setPassword({
          value: value,
          msgError: isValidPassword ? 'Password phải dài hơn 6 ký tự.' : '',
          isValid: isValidPassword,
        });
        break;

      default:
        break;
    }
  };

  const handleLogin = () => {
    const isValidEmail = email.value !== '';
    const isValidPassword = password.value !== '';

    if (isValidEmail && isValidPassword) {
      login();
    }
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 16,
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={{width: '100%'}}>
        <TextInput
          style={{
            width: '100%',
            height: 52,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 8,
            paddingHorizontal: 16,
          }}
          placeholder="Nhập Email/Số điện thoại"
          value={email.value}
          onChangeText={(text: string) =>
            handleOnChangeText(text, 'EmailOrPhone')
          }
        />
        {email.msgError !== '' && (
          <Text style={{color: 'red', marginTop: 4}}>{email.msgError}</Text>
        )}
      </View>
      <View style={{width: '100%'}}>
        <TextInput
          style={{
            width: '100%',
            height: 52,
            borderWidth: 1,
            borderColor: 'gray',
            marginTop: 16,
            borderRadius: 8,
            paddingHorizontal: 16,
          }}
          placeholder="Mật khẩu"
          value={password.value}
          onChangeText={(text: string) => handleOnChangeText(text, 'Password')}
        />
        {password.msgError !== '' && (
          <Text style={{color: 'red', marginTop: 4}}>{password.msgError}</Text>
        )}
      </View>
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
        onPress={handleLogin}>
        <Text style={{color: 'white'}}>ĐĂNG NHẬP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

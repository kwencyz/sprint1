import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { FIREBASE_AUTH } from '../FirebaseConfig';

export default function SignupScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const userType = ["Passenger", "Driver"];
    const auth = FIREBASE_AUTH;

    const signUp = async () =>{
        try{
            const response = await createUserWithEmailAndPassword(auth,email,password);
            //console.log(response);
            navigation.push('Dashboard')
        } catch(error){
            console.log(error);
            alert('Login Failed' + error.message);
        }
    }
    
  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar style='light' />
      <Image style={styles.backgroundImage} source={require('../assets/images/background.png')} />

      {/* logo */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/images/justgo.png')} style={styles.logoImage} />
      </View>

      <View style={styles.formContainer}>
        {/* form */}
        <View style={styles.inputContainer}>
            <TextInput value={email} style={styles.input} placeholder='Email' placeholderTextColor={'maroon'} onChangeText={(text) => setEmail(text)}/>
        </View>
        <View style={styles.inputContainer}>
            <TextInput value={username} style={styles.input} placeholder='Username' placeholderTextColor={'maroon'} onChangeText={(text) => setUsername(text)}/>
        </View>
        <View style={styles.inputContainer}>
            <TextInput value={password} style={styles.input} placeholder='Password' placeholderTextColor={'maroon'} onChangeText={(text) => setPassword(text)} secureTextEntry/>
        </View>
        <View>
        <SelectDropdown
          data={userType}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          buttonStyle={styles.dropdownButton} // Apply custom styles to the button
          buttonTextStyle={styles.dropdownButtonText} // Apply custom styles to the button text
          dropdownStyle={styles.dropdown} // Apply custom styles to the dropdown container
          dropdownTextStyle={styles.dropdownText} // Apply custom styles to the dropdown items text
        />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => signUp()}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.linkContainer}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.push('Login')}>
            <Text style={styles.linkText}> Login  </Text>
          </TouchableOpacity>
          <Text>now!</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 300,
    height: 300,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    marginBottom: 20,
    padding: 10,
    elevation: 3,
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  input: {
    color: 'maroon',
  },
  buttonContainer: {
    width: '80%',
    marginBottom: 20,
    marginTop: -80,
  },
  button: {
    width: '100%',
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  linkText: {
    color: 'white',
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
dropdownButton: {
    width: '80%',
    height: '33%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 0,
    elevation: 3,
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginBottom: 20,
  },
  dropdownButtonText: {
    color: 'maroon',
    textAlign: 'center',
    fontSize: 16,
  },
  dropdown: {
    width: '80%',
    backgroundColor: 'white', // Set the background color of the dropdown
    borderRadius: 10, // Set the border radius for rounded corners
    elevation: 3, // Apply elevation for shadow effect on Android
    shadowColor: 'rgba(0, 0, 0, 0.2)', // Set shadow color
    shadowOffset: { width: 0, height: 2 }, // Set shadow offset
    shadowOpacity: 0.8, // Set shadow opacity
    shadowRadius: 2, // Set shadow radius
    maxHeight: 200,
  },
  dropdownText: {
    color: 'maroon',
    padding: 10,
    fontSize: 8,
  },
});
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FIREBASE_AUTH } from '../FirebaseConfig';

export default function LoginScreen() {
    const navigation = useNavigation();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const auth = FIREBASE_AUTH;

    const signIn = async () =>{
        try{
            const response = await signInWithEmailAndPassword(auth,email,password);
            //console.log(response);
            navigation.push('Dashboard')
        } catch(error){
            console.log(error);
            alert('Login Failed' + error.message);
        }
    }

    const changePassword = async () =>{
        const response = await sendPasswordResetEmail(auth,email)
        .then(()=>alert("Check your email to reset password"))
        .catch((error)=>{
            alert(error)
        })
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <StatusBar style='light'/>
            <Image style={styles.backgroundImage} source={require('../assets/images/background.png')}/>

            {/* logo */}
            <View style={styles.logoContainer}>
                <Image source={require('../assets/images/justgo.png')} style={styles.logoImage}/>
            </View>

            <View style={styles.formContainer}>
                {/* form */}
                <View style={styles.inputContainer}>
                    <TextInput value={email} style={styles.input} placeholder='Email' placeholderTextColor={'maroon'} onChangeText={(text) => setEmail(text)}/>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput value={password} style={styles.input} placeholder='Password' placeholderTextColor={'maroon'} onChangeText={(text) => setPassword(text)} secureTextEntry/>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => signIn()}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.linkContainer}>
                    <Text>Forget Password?</Text>
                    <TouchableOpacity onPress={() => changePassword()}>
                        <Text style={styles.linkText}> Click Here </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.linkContainer}>
                    <Text>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.push('Signup')}>
                        <Text style={styles.linkText}> Signup </Text>
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
        marginLeft: 5,
    },
});

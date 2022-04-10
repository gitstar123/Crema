import React, { useState } from 'react';
import { StyleSheet, View , Text, TextInput,Button, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons'
import { useForm } from 'react-hook-form';
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const SignUpScreen = () => {

    const [email, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [name, setUsername] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const onSignUpPress = () => {
        var SignUPAPI = "http://192.168.1.78/CremaCafe/server.php";
        var headers ={
            'Accept':'application/json',
            'Content-Type':'application.json'
        };

        var Data={
            name:name,
            email:email,
            password:password
        };
        fetch(SignUPAPI,
            {
                method:'POST',
                headers:headers,
                body:JSON.stringify(Data)
            }
            )
            // .then((response)=>response.json())
            .then((response)=>
                {
                    navigation.navigate('SignIn');
                    // alert(response[0].Message);
                }
            )
            .catch((error)=>{alert("Error"+error)});
    }
    
    const {control, handleSubmit, watch} = useForm();
    const navigation = useNavigation();

    const onTermsOfUsePressed = () =>{
        console.warn("Terms of Use");
    }
    const onPrivacyPressed = () => {
        console.warn("Privacy Policies");
    }
    // const onForgotPasswordPress = () => {
    //     console.warn("Forgot Password");
    // }

    const onSignInPress = () => {
        navigation.navigate('SignIn');
    }

    
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style = {styles.root}>
                <Text style = {styles.title}>Create an account</Text>
                <TextInput 
                    value= {name}
                    onChangeText={setUsername}
                    placeholder= "name" 
                    style = {styles.input}
                    secureTextEntry={false} />
                <TextInput 
                    value= {email}
                    onChangeText={setEmailId}
                    placeholder= "Email" 
                    style = {styles.input}
                    secureTextEntry={false} />
                <TextInput 
                    value= {password}
                    onChangeText={setPassword}
                    placeholder= "Password" 
                    style = {styles.input}
                    secureTextEntry={false} />
                

                <Button
                    title={"Submit"}
                    style = {styles.button}
                    onPress={onSignUpPress}
                />
                {/* <CustomInput
                name="username"
                control={control}
                placeholder="Name"
                rules={{
                    required: 'Name is required',
                    minLength: {
                    value: 3,
                    message: 'Name should be at least 3 characters long',
                    },
                    maxLength: {
                    value: 24,
                    message: 'Name should be max 24 characters long',
                    },
                }}
                /> */}
                {/* <CustomInput
                    name="username"
                    control={control}
                    

                    placeholder="Username"
                    rules={{
                        required: 'Username is required',
                        minLength: {
                        value: 3,
                        message: 'Username should be at least 3 characters long',
                        },
                        maxLength: {
                        value: 24,
                        message: 'Username should be max 24 characters long',
                        },
                    }}
                />
                <CustomInput
                name="email"
                control={control}
                placeholder="Email"
                rules={{
                    required: 'Email is required',
                    pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
                }}
                />
                <CustomInput
                name="password"
                control={control}
                placeholder="Password"
                secureTextEntry
                rules={{
                    required: 'Password is required',
                    minLength: {
                    value: 8,
                    message: 'Password should be at least 8 characters long',
                    },
                }}
                />
                <CustomInput
                    name="passwordRepeat"
                    control={control}
                    placeholder="Repeat Password"
                    secureTextEntry
                    rules={{
                        validate: value => value === pwd || 'Password do not match',
                    }}
                />
                <CustomButton onPress={onRegisterPress} text='Register' type='primary'/>
                <Text style={styles.text}>By registering, you confirm that you accept our <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text></Text> */}
                <SocialSignInButtons/>
                <CustomButton onPress={onSignInPress} text="Have an Account? Sign-In" type='tertiary'/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200
    },
    container: {
        backgroundColor: 'white',
        width: '100%',
    
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
    
        paddingHorizontal: 10,
        marginVertical: 5,
      },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10
    },
    text:{
        color: 'gray',
        marginVertical: 10
    },
    link:{
        color: 'orange'
    },
    input: {
            backgroundColor: 'white',
            width: '100%',
        
            borderColor: '#e8e8e8',
            borderWidth: 1,
            borderRadius: 5,
        
            paddingHorizontal: 10,
            marginVertical: 5,
    },
    button:{
        width : '80%'
    }
});
export default SignUpScreen;

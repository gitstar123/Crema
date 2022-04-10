import React, { useState } from 'react';
import { StyleSheet, View , Text, Image, useWindowDimensions, ScrollView, TextInput} from 'react-native';
import Logo from '../../../assets/images/image.png'
import Food1 from '../../../assets/images/Food1.png'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
const SignInScreen = () => {
    const {height} = useWindowDimensions();
    const {control, handleSubmit, formState: {errors}} = useForm();
    const [password, setPassword] = useState('');
    const [email, setEmailId] = useState('');
    const navigation = useNavigation();
    const onButttonPress = () => {
        navigation.navigate('MyOrders');
    }
    const onSignInPress = () =>{
        //Validate the User
        var SignUPAPI = "http://192.168.1.78/CremaCafe/logincheck.php";
        var headers ={
            'Accept':'application/json',
            'Content-Type':'application.json'
        };

        var Data={
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
            .then((response)=>response.json())
            .then((response)=>
                {
                    var id = response[0].id;
                     response[0].Message == "1" ? navigation.navigate('Home',{id}) : alert("Incorrect Email or password");
                }
            )
            .catch((error)=>{alert("Error"+error)});

        
    }
    const onForgotPasswordPress = () => {
        navigation.navigate('ForgotPassword');
    }
    const onSignUpPress = () => {
        navigation.navigate('SignUp');
    }
    const onAdminLogin = () => {
        navigation.navigate('AdminLogin');
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Image source = {Food1} style = {styles.backgroundImage} />
            <View style = {styles.root}>
                
                <Image source = {Logo} style = {[styles.logo, {height: height*0.3}]} resizeMode="contain"/>
                {/* {/* <CustomInput placeholder='Email-ID' value={emailId} setValue = {setEmailId} SecureTextEntry= {false}/> */}
                {/* <CustomInput placeholder='Password' value={password} setValue = {setPassword} SecureTextEntry = {true}/>  */}
                {/* 
                 */}
                {/* <Controller 
                    control={control}
                    name = 'password'
                    rules={{minLength: {value: 3, message: 'Username is required'}}}
                    render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
                        <>
                        <TextInput value={value} onChangeText={onChange} onBlur={onBlur} placeholder = "Password" style={styles.input} secureTextEntry = {true}/>
                        <Text>{error.message || "Error"}</Text>
                        </>
                    )}
                /> */}
                {/* <Controller
                    control={control}
                    name = "password"
                    placeholder = "Password"
                    secureTextEntry
                /> */}
                {/* <CustomInput
                    name="username"
                    placeholder="Username"
                    control={control}
                    rules={{required: 'Username is required'}}
                />
                <CustomInput
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    control={control}
                    rules={{
                        required: 'Password is required',
                        minLength: {
                        value: 3,
                        message: 'Password should be minimum 3 characters long',
                        },
                    }}
                /> */}
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
                
                <CustomButton onPress={handleSubmit(onSignInPress)} text='Submit' type='primary'/>
                <CustomButton onPress={onForgotPasswordPress} text='Forgot Password' type='tertiary'/>
                <SocialSignInButtons/>
                <CustomButton onPress={onSignUpPress} text="Don't have an account? Create One" type='tertiary'/>
                <CustomButton onPress={onAdminLogin} text="ADMIN Login" type='tertiary'/>
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
        maxHeight: 200,
        opacity: 0.7
    },
    input: {
        backgroundColor: 'white',
        width: '100%',
    
        borderColor: '#e8e8e8',
        borderWidth: 3,
        borderRadius: 5,
    
        paddingHorizontal: 10,
        marginVertical: 5,
      },
      backgroundImage:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0.5
    },
});
export default SignInScreen;

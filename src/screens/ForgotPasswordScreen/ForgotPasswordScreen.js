import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, useWindowDimensions, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
const ForgotPasswordScreen = () => {
    const {control, handleSubmit} = useForm();
    const navigation = useNavigation();
    const onSendPress = () => {
        navigation.navigate('NewPassword');
    }
    const onSignInPress = () => {
        navigation.navigate('SignIn');
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Reset Your Password</Text>
                {/* <CustomInput placeholder='Enter Username' value={username} setValue = {setUsername} SecureTextEntry= {false}/> */}
                <CustomInput
                    name="username"
                    control={control}
                    placeholder="Username"
                    rules={{
                        required: 'Username is required',
                    }}
                />
                <CustomButton onPress={onSendPress} text='Send Code' type='primary' />
                <CustomButton onPress={onSignInPress} text="Back to sign in" type='tertiary' />
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10
    },
    text: {
        color: 'gray',
        marginVertical: 10
    },
    link: {
        color: 'orange'
    }
});
export default ForgotPasswordScreen;

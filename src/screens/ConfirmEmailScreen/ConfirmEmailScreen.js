import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, useWindowDimensions, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import {useRoute} from '@react-navigation/native';
const ConfirmEmailScreen = () => {
    const route = useRoute();
    const { control, handleSubmit, watch } = useForm({
        defaultValues: { username: route?.params?.username },
    });
    const [code, setCode] = useState('');
    const [username, setUsername] = useState('');
    
    const navigation = useNavigation();
    const onConfirmPress = () => {
        //Validation 
        navigation.navigate('Home');
    }
    const onSignInPress = () => {
        navigation.navigate('SignIn');
    }
    const onResendPress = () => {
        console.warn('Resended');
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Confirm Your Email</Text>
                {/* <CustomInput placeholder='Confirm Code' value={code} setValue = {setCode} SecureTextEntry= {false}/> */}
                <CustomInput
                    name="username"
                    control={control}
                    placeholder="Username"
                    rules={{
                        required: 'Username code is required',
                    }}
                />

                <CustomInput
                    name="code"
                    control={control}
                    placeholder="Enter your confirmation code"
                    rules={{
                        required: 'Confirmation code is required',
                    }}
                />
                <CustomButton onPress={onConfirmPress} text='Confirm' type='primary' />
                <CustomButton onPress={onResendPress} text="Resend Code" type='secondary' />
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
export default ConfirmEmailScreen;

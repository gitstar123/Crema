import { ScrollView, TextInput, StyleSheet , Text , View} from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import React, { useState } from "react";

import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from "@react-navigation/native";
const AdminLogin = () => {

    const {control, handleSubmit, formState: {errors}} = useForm();
    const navigation = useNavigation();
    const onAdminSubmit = () => {

        var SignUPAPI = "http://192.168.1.78/CremaCafe/adminlogin.php";
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
                     response[0].Message == "1" ? navigation.navigate('AdminPortal') : alert("Incorrect Email or password");
                }
            )
            .catch((error)=>{alert("Error"+error)});

        

    }
    const [password, setPassword] = useState('');
    const [email, setEmailId] = useState('');
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style = {styles.container}>
            <Text style = {styles.heading}>Admin Login</Text>
            <TextInput
                value={email}
                onChangeText={setEmailId}
                placeholder="Email"
                style={styles.input}
                secureTextEntry={false} />
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                style={styles.input}
                secureTextEntry={false} />

            <CustomButton onPress={handleSubmit(onAdminSubmit)} text='Submit' type='primary' />
            </View>
        </ScrollView>
    );
}

export default AdminLogin;

const styles = StyleSheet.create({
    heading:{
        fontSize: 30,
        color: 'silver',
        fontWeight: 'bold',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 10,
        marginLeft: 100
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
    container: {
        alignContent: 'center',
        justifyContent: 'center'
    }
});
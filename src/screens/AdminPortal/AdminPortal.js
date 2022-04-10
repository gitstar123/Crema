import { Text, StyleSheet, View, Dimensions, FlatList, Image, Button, SafeAreaView, TouchableOpacity } from "react-native";
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../components/CustomButton/CustomButton";



const MyOrders = () => {

    const [dataList, setDataList] = useState();
    const OnButtonViewPress = (data) => {
        var SignUPAPI = "http://192.168.1.78/CremaCafe/allorders.php";
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application.json'
        };


        var Data = {
        };

        fetch(SignUPAPI,
            {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(Data)
            }
        )
            .then((response) => response.json())
            .then((response) => {
                setDataList(response);

                // response[0].Message == "1" ? navigation.navigate('Home',{id}) : alert("Incorrect Email or password");
            }
            )
            .catch((error) => { alert("Error" + error) });

    }

    const renderItem = ({ item, index }) => {
        const OnRemoveOrderPress = () => {
            var SignUPAPI = "http://192.168.1.78/CremaCafe/delete.php";
            var headers = {
                'Accept': 'application/json',
                'Content-Type': 'application.json'
            };

            var Data = {
                id:item.id
            };
            fetch(SignUPAPI,
                {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(Data)
                }
            )
                // .then((response)=>response.json())
                // .then((response) => {
                //     navigation.navigate('SignIn');
                //     // alert(response[0].Message);
                // }
                // )
                // .catch((error) => { alert("Error" + error) });
        }
    
    return (

        <View key={index} style={styles.itemContainer}>
            <View style={styles.itemBody}>
                <Text style={styles.itemName}>{item.food}</Text>
            </View>
            <View style={styles.itemBody}>
                <Text style={styles.itemName}>{item.name}</Text>
            </View>
            <View style={styles.itemStatus}>
                <Text>{item.id}</Text>
            </View>
            <Button onPress={OnRemoveOrderPress} title='Completed' color='#841584' />
        </View>
    )
}
const navigation = useNavigation();
const separator = () => {
    return (
        <View style={{ height: 1, backgroundColor: '#f1f1f1' }} />
    )
}

return (
    <SafeAreaView>
        <View>
            <CustomButton onPress={OnButtonViewPress} text='Refresh' type='primary' />
        </View>
        <FlatList
            data={dataList}
            keyExtractor={(e, i) => i.toString()}
            renderItem={renderItem}
            ItemSeparatorComponent={separator}

        />
    </SafeAreaView>
)
};

export default MyOrders;

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 15,
        marginVertical: 10,
        marginBottom: 50
    },
    itemBody: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
    itemStatus: {
        paddingHorizontal: 6,
        justifyContent: 'center',
        right: 12
    }
})
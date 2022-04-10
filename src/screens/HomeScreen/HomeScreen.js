import { Text, StyleSheet, View, Dimensions, FlatList, Image,Button, SafeAreaView, TouchableOpacity } from "react-native";
import { useState } from 'react';

import Food2 from '../../../assets/images/Food2.jpg'
import { useNavigation } from "@react-navigation/native";
const listTab = [
    {
        status: 'Patty'
    },
    {
        status: 'Thali'
    },
    {
        status: 'Chhole Bhature'
    }
]
const data = [
    {
        name: 'Veg Thali',
        price: '₹80',
        status: 'Thali',
        source: require('../../../assets/images/vegThali.jpg'),
        key : 1,
        about: "Thali (meaning plate) or Bhojanam is a round platter used to serve food"
    },
    {
        name: 'NonVeg Thali',
        price: "₹140",
        status: 'Thali',
        source: require('../../../assets/images/vegThali.jpg'),
        key : 2,
        about: "Thali (meaning plate) or Bhojanam is a round platter used to serve food"
    },
    {
        name: 'South Indian Thali',
        price: "₹120",
        status: 'Thali',
        source: require('../../../assets/images/vegThali.jpg'),
        key: 3,
        about: "Thali (meaning plate) or Bhojanam is a round platter used to serve food"
    },
    {
        name: 'North Indian Thali',
        price: "₹70",
        status: 'Thali',
        source: require('../../../assets/images/vegThali.jpg'),
        key : 4,
        about: "Thali (meaning plate) or Bhojanam is a round platter used to serve food"
    },
    {
        name: 'Paneer Bhature',
        price: "₹60",
        status: 'Chhole Bhature',
        source: require('../../../assets/images/vegThali.jpg'),
        key : 5,
        about: 'Chole bhature is a food dish popular in the Northern areas of the Indian subcontinent. It is a combination of chana masala (spicy white chickpeas) and bhatura/puri.'
    },
    {
        name: 'Aloo Bhature',
        price: "₹40",
        status: 'Chhole Bhature',
        source: require('../../../assets/images/vegThali.jpg'),
        key : 6,
        about: 'Chole bhature is a food dish popular in the Northern areas of the Indian subcontinent. It is a combination of chana masala (spicy white chickpeas) and bhatura/puri.'
    },
    {
        name: 'Aloo Patty',
        price: "₹20",
        status: 'Patty',
        source: require('../../../assets/images/vegThali.jpg'),
        key : 7,
        about: 'these turnovers feature a warm potato filling enveloped in butter puff pastry, baked to perfection.'
    },
    {
        name: 'Paneer Patty',
        price: "₹30",
        status: 'Patty',
        source: require('../../../assets/images/vegThali.jpg'),
        key : 8,
        about: 'these turnovers feature a warm paneer filling enveloped in butter puff pastry, baked to perfection. '
    },
    {
        name: 'Non Veg Patty',
        price: "₹50",
        status: 'Patty',
        source: require('../../../assets/images/vegThali.jpg'),
        key : 9,
        about: 'these turnovers feature a meat filling enveloped in butter puff pastry, baked to perfection. '
    },

]


const HomeScreen = ({route}) => {
    const [status, setStatus] = useState('Thali');
    const [dataList, setDataList] = useState(data);
    const {id} = route.params;
    const SetStatusFilter = status => {
        setDataList([...data.filter(e => e.status === status)])
        setStatus(status)
    }
    const onMyOrdersPress = () => {
        navigation.navigate('MyOrders', {id});
    }
    const navigation = useNavigation();
    const renderItem = ({item, index}) => {
        return (
            <TouchableOpacity
                onPress={() => (
                navigation.navigate('BuyScreen', {item,id}))
                }
                >
                <View key = {index} style = {styles.itemContainer}>
                    <View style = {styles.itemLogo}>
                        <Image
                            style = {styles.itemImage}
                            source = {{uri : 'https://previews.123rf.com/images/vectorstockcompany/vectorstockcompany1808/vectorstockcompany180817641/108634745-food-vector-icon-isolated-on-transparent-background-food-logo-concept.jpg'}}
                        />
                    </View>
                    <View style = {styles.itemBody}>
                        <Text style = {styles.itemName}>{item.name}</Text>
                    </View>
                    <View style = {styles.itemStatus}>
                        <Text>{item.price}</Text>
                    </View>
                    
                </View>
                
            </TouchableOpacity>
            
        )
    }
    const separator = () => {
        return(
            <View style = {{height : 1, backgroundColor : '#f1f1f1'}}/>
        )
    }
    var flag = 0;
    return(
        <SafeAreaView style = {styles.container}>
            <Image style= { styles.backgroundImage } source={Food2}
            /> 
            <View style = {styles.listTab}>
                {
                    listTab.map(e => (
                        <>
                        <TouchableOpacity
                         style = {[styles.btnTab, status === e.status && styles.btnTabActive]}
                         onPress = {() => SetStatusFilter(e.status)}
                        >
                        <Text style = {(styles.textTab, status === e.status && styles.textTabActive)}>{e.status}</Text>
                        </TouchableOpacity>
                        </>
                    ))
                }
            </View>
            <FlatList
                data={dataList}
                // keyExtractor = {(e,i) => i.toString()}
                renderItem = {renderItem}
                keyExtractor={item => item.key}
                ItemSeparatorComponent = {separator}
                
            />
            <View style={styles.bottombutton}>
                    <Button
                        title="View Orders"
                        onPress={onMyOrdersPress}
                    />
                    </View>
        </SafeAreaView>
    )
}
export default HomeScreen;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center'
    },

    bottombutton: {
        right: 10,
        left: 10,
        position: 'absolute',
        bottom: 10,
      },

    listTab : {
        alignSelf: 'center',
        flexDirection: 'row',
        marginBottom: 20 
    },
    btnTab: {
        width: Dimensions.get('window').width / 3.5,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#EBEBEB',
        padding: 10,
        justifyContent: 'center'
    },
    textTab: {
        fontSize : 16,
    },
    btnTabActive: {
        backgroundColor: '#E6838D'
    },
    textTabActive: {
        color: '#fff'
    },
    itemContainer: {
        flexDirection: 'row',
        paddingVertical: 15
    },
    itemLogo : {
        padding: 10
    },
    itemImage: {
        width: 50,
        height: 50 
    },
    itemBody: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
    itemName: {
        fontWeight: 'bold',
        fontSize: 16
    },
    itemStatus: {
        paddingHorizontal: 6,
        justifyContent: 'center',
        right: 12
    },
    backgroundImage:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0.3
    },
});
import Meal from '../../../assets/images/vegThali.jpg'
import {View, SafeAreaView, Image, Text, StyleSheet} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
const BuyScreen = ({navigation, route}) => {
  const {item, id} = route.params;
  const onBuy = () => {
    //  navigation.navigate('Payment');
    var SignUPAPI = "http://192.168.1.78/CremaCafe/order.php";
        var headers ={
            'Accept':'application/json',
            'Content-Type':'application.json'
        };
    
    var Data={
        sid:id,
        food:item.name
    };

    fetch(SignUPAPI,
        {
            method:'POST',
            headers:headers,
            body:JSON.stringify(Data)
        }
        )
        //.then((response)=>response.json())
        .then((response)=>
            {
                // var id = response[0].id;
                // var food = response[0].food;
                // console.log(id,food);

                alert("Succesful");
                // navigation.navigate('Home');
            }
        )
        .catch((error)=>{alert("Error"+error)});




  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
        
      <SafeAreaView style={style.imageContainer}>
        <Image style={{flex: 1, resizeMode: 'contain'}} />
      </SafeAreaView>
      <View style={style.detailsContainer}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <View style={style.line} />
          {/* <Text style={{fontSize: 18, fontWeight: 'bold'}}>Best choice</Text> */}
        </View>
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>{item.name}</Text>
          <View style={style.priceTag}>
            <Text
              style={{
                marginLeft: 15,
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              {item.price}
            </Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.about}</Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 16,
              lineHeight: 22,
              marginTop: 10,
            }}>
          </Text>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={style.borderBtn}>
                <Text style={style.borderBtnText}>-</Text>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal: 10,
                  fontWeight: 'bold',
                }}>
                1
              </Text>
              <View style={style.borderBtn}>
                <Text style={style.borderBtnText}>+</Text>
              </View>
            </View>
            <CustomButton onPress={onBuy} text='BUY' type='tertiary' bgColor="#E6838D" fgColor='#fff'/>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: 'center',
    maxWidth: 300,
    maxHeight: 200,
    alignItems: 'center'
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: '#fff',
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: '#fff',
    marginBottom: 5,
    marginRight: 3,
  },
  borderBtn: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 40,
  },
  borderBtnText: {fontWeight: 'bold', fontSize: 28},
  buyBtn: {
    width: 130,
    height: 50,
    backgroundColor: '#E6838D',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  priceTag: {
    backgroundColor: '#E6838D',
    width: 80,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
});

export default BuyScreen;

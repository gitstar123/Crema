import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConfirmEmailScreen from '../../screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from '../../screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../../screens/NewPasswordScreen/NewPasswordScreen';
import SignInScreen from '../../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../../screens/SignUpScreen/SignUpScreen';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import BuyScreen from '../../screens/BuyScreen/BuyScreen';
import MyOrders from '../../screens/MyOrders/MyOrders';
import AdminLogin from '../../screens/AdminLogin/AdminLogin';
import AdminPortal from '../../screens/AdminPortal/AdminPortal';
// import Payment from '../../../Payment';
const Stack = createNativeStackNavigator();

const Navigation = () => {
    return(
        <>
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="BuyScreen" component={BuyScreen} />
                <Stack.Screen name="MyOrders" component={MyOrders} />
                <Stack.Screen name="AdminLogin" component={AdminLogin} />
                <Stack.Screen name="AdminPortal" component={AdminPortal} />
                {/* <Stack.Screen name="Payment" component={Payment} /> */}
            </Stack.Navigator>
        </NavigationContainer>
        </>
    )
}

export default Navigation;
import CustomButton from "../CustomButton/CustomButton"

const onSignInWithFacebook = () => {
    console.warn("Forgot Password");
}
const onSignInWithGoogle = () => {
    console.warn("Forgot Password");
}
const onSignInWithApple = () => {
    console.warn("Forgot Password");
}

const SocialSignInButtons = () => {

    return(
        <>
            <CustomButton onPress={onSignInWithFacebook} text='Sign In With Facebook' bgColor='#E7EAF4' fgColor='#4765A9'/>
            <CustomButton onPress={onSignInWithGoogle} text='Sign In With Google' bgColor='#FAE9EA' fgColor ='#DD4D44'/>
            <CustomButton onPress={onSignInWithApple} text='Sign In With Apple' bgColor='#e3e3e3' fgColor='#363636'/>
        </>
    )
}
export default SocialSignInButtons;
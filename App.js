import React from 'react';
import {View, Text, StyleSheet, Image, Button, Alert} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

function App(){

    const handlePayment = () => {
        var options = {
            name: 'Inmakes',
            description: "For Payment",
            currency: 'INR',
            amount: 50000,
            key: 'rzp_test_Rv8nqbG8pp0cU9',
            prefill: {
                email:'binuja.inmakes@gmail.com',
                contact:'8714600175',
                name: 'developer'
            },
            theme: {color: '#f37251'}
        }
        RazorpayCheckout.open(options).then((data) => {
            console.log("data", data);
            Alert.alert('Success');
        })
        .catch((error) => {
            Alert.alert(`Error : ${error.code} | ${error.description}`)
        })
    }
    return(
        <View style = {styles.container}>
            <Image style={styles.productImg} source={require("./assets/img.jpg")}/>
                   <Text style={styles.text}>Payment</Text>
                   <Text style={styles.text}>Rs.500</Text>
                   <View style={styles.button}>
                       <Button title="Buy" onPress={() => handlePayment()}/>
                   </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    productImg: {
        width: 200,
        height: 200,
        resizeMode:'contain'
    },
    text:{
        fontSize:20
    },
    button:{
        width:200
    }
});

export default App;
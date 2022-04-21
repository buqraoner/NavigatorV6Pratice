import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";

//Components
import Button from "../components/Button";
//Screens
import MemberSign from "../screens/MemberSign";







function WelcomeScreen({ navigation }) {

    function goToMemberSign() {
        navigation.navigate("MemberSign");
    }


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>React Navigator V6 Pratice</Text>
            <Button text="Member Sign" onPress={goToMemberSign} />
        </SafeAreaView>
    );
}




export default WelcomeScreen;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "grey",


    },
    header: {

        textAlign: "center",
        width: "75%",
        height: "5%",
        fontWeight: "bold",

    },


});

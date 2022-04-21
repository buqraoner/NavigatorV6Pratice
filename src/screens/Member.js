import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



function Member({ route }) {

    const { user } = route.params;

    return (
        <SafeAreaView>
            <Text style={styles.label}>Member{user.name}</Text>
        </SafeAreaView >
    )
}


const styles = StyleSheet.create({
    label: {
        fontSize: 20,
    }

})



export default Member;
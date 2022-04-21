import React from "react";
import { View, Text, TextInput } from "react-native";


import styles from "./Input.style";


const Input = ({ label, placeholder, OnChange,value }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput OnChangeText={OnChange} value={value} placeholder={placeholder} />
            </View>
        </View>



    );
};

export default Input;

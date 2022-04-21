import { View, Text, SafeAreaView, Alert, StyleSheet } from 'react-native'
import React, { useState } from 'react'


//Components
import Input from "../components/Input";
import Button from '../components/Button';





export default function MemberSign({ navigation }) {
    const [Name, setUsername] = useState(null);
    const [Surname, setSurname] = useState(null);
    const [Age, setAge] = useState(null);
    const [Email, setEmail] = useState(null);



    function handleSubmit() {

        if (!Name || !Surname || !Age || !Email) {
            Alert.alert('!!!', 'Please fill all fields');
            return;

        }

        const user = {
            Name,
            Surname,
            Age,
            Email,
        };

        navigation.navigate("Member", { user });
    }


    return (
        <SafeAreaView style={styles.container}>
            <Input
                label="Üye Adı"
                placeholder="Üye İsmini giriniz..."
                OnChange={setUsername}
            />

            <Input
                label="Üye Soyadı"
                placeholder="Üye Soyismini giriniz..."
                OnChange={setSurname}
            />

            <Input
                label="Üye Yaşı"
                placeholder="Üye Yaşını giriniz..."
                OnChange={setAge}
            />

            <Input
                label="Üyenin Epostasi"
                placeholder="Üye Epostasini giriniz..."
                OnChange={setEmail}
            />

            <View style={styles.button}>
                <Button text="Kaydı Tamamla" onPress={handleSubmit} />
            </View>

        </SafeAreaView>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "grey",

    },
    button: {
        flex: 1,
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,
        height: 60,


        alignItems: "center",
    },
});





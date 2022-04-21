import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './screens/WelcomeScreen';
import MemberSign from './screens/MemberSign';
import Member from "./screens/Member";





const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={WelcomeScreen} />
                <Stack.Screen name="MemberSign" component={MemberSign} />
                <Stack.Screen name="Member" component={Member} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go To Details"
                onPress={() => navigation.navigate('null')} />
        </View>
    );
}
export default App;
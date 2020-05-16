/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

const Login = (props) => {
    const [username, setUsername] = useState(false);
    const [password, setPassword] = useState(false);
    const [displayError, setDisplayError] = useState(false);

    let validateLogin = () => {
        (username === "Admin" && password === "Admin") ? props.navigation.replace('Home') : setDisplayError(true);
    };
    const onChangeUsername = (text) => {
        setDisplayError(false);
        setUsername(text);
    };
    let onChangePassword = (text) => {
        setDisplayError(false);
        setPassword(text);
    };

    return (
        <View style={styles.container}>
            <TextInput style={styles.textField}
                testID="username"
                underlineColorAndroid="transparent"
                placeholder="username"
                onChangeText={text => onChangeUsername(text)}>{username}</TextInput>
            <TextInput style={styles.textField}
                testID="password"
                underlineColorAndroid="transparent"
                placeholder="password"
                onChangeText={(text) => onChangePassword(text)}>{password}</TextInput>
            <TouchableHighlight onPress={() => validateLogin()}>
                <Text style={styles.text}> Login </Text>
            </TouchableHighlight>
            {displayError ? <Text style={styles.errorText}>Invalid username or password</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3b5998',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textField: {
        width: 300,
        marginBottom: 20,
        height: 45,
        backgroundColor: '#FFF',
        paddingLeft: 10,
    },
    text: {
        width: 200,
        height: 40,
        textAlign: 'center',
        color: '#3b5998',
        paddingTop: 12,
        backgroundColor: '#FFF'
    },
    errorText: {
        top: 10,
        fontSize: 18,
    },
});

export default Login;
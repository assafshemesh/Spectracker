import React, {useState, useContext}  from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
// import { SessionContext } from '../contexts/SessionState';



const LoginPlaceholder = ({ navigation }) => {

    // const sessionContext = useContext(SessionContext);
    // const { updateSession } = useContext(SessionContext);
    // console.log("BEFORE UPDATE: sessionContext.therapistName = " + sessionContext.therapistName);
    const managers = ["עדי","assaf"];
    // const therapists = ["Adi", "Coral", "May", "Hadar"];
    const therapists = ["עדי","קורל", "מאי", "הדר"];

    const [text, setText] = useState('');

    const onChange = textValue => setText(textValue);

    const isValidUser = (username) => {
        if (managers.includes(username) || therapists.includes(username)) {
            // Alert.alert('User is valid. Route to the tracker.');
            // var sessionProp = {name: 'therapistName', value: username};
            // updateSession({name: 'therapistName', value: username});
            // sessionContext.updateSession(sessionProp.value);
            // sessionContext.updateSession("afunit");
            // sessionContext.updateSession({name: 'therapistName', value: username});
            // console.log("AFTER UPDATE: sessionContext.therapistName = " + sessionContext.therapistName);
            navigation.navigate('Therapist Home', { username });
        } else {
            Alert.alert('User is not valid!');
        }
    };

    return (
        <View style={styles.loginContainer}>
            <View style={styles.loginInput}>
                <TextInput placeholder="Name..." style={styles.loginInputText} onChangeText={onChange} value={text}/>
                {/* <TextInput placeholder="שם משתמש..." style={styles.input}/> */}
            </View>
            <View style={styles.loginInput}>
                <TextInput placeholder="Password..." style={styles.loginInputText}/>
            </View>
            <View style={styles.loginButton}>
                <TouchableOpacity style={styles.button} onPress={() => isValidUser(text)}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
  );
};

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        // backgroundColor: 'pink',
        marginLeft: 60,
        marginRight: 60,
        marginBottom: 20,
        marginTop: 20,
    },
    loginInput: {
        flex: 1,
        // backgroundColor: 'steelblue',
        maxHeight: 58,
        borderWidth: 1,
        borderColor: 'lightgrey',
        justifyContent: 'center',
        marginBottom: 8,
    },
    loginButton: {
        flex: 0.2,
        minHeight: 30,
        maxHeight: 60,
        justifyContent: 'center',
        backgroundColor: '#c2bad8',
    },
    loginInputText: {
        paddingLeft: 10,
        fontSize: 18,
    },
    button: {
        padding: 12,
    },
    loginButtonText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center',
    },

})

export default LoginPlaceholder;
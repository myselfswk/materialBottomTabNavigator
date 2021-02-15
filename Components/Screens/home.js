import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

class Home extends React.Component {
    render() {
        return (
            <View style={styles.mainView}>
                <Text>This is Home</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default Home;

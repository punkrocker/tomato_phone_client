import {StyleSheet} from 'react-native'

export const clockMainStyle = StyleSheet.create({
    window: {
        flex: 1,
        backgroundColor: '#cdeff3',
        justifyContent: 'center',
        alignItems: 'center'
    },
    motherPanel: {
        alignItems: 'center'
    },
    clock: {
        borderRadius: 90,
        borderColor: '#000',
        borderWidth: 3,
        width: 200,
        height: 200,
        alignItems: 'center'
    },
    pointer: {
        width: 3,
        height: 20,
        backgroundColor: '#000'
    }
});
import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native'
import {tabStyles} from '../../Styles/tabbarStyle'
import {clockMainStyle} from '../../Styles/clockMainStyle'

export default class ClockMain extends React.Component {
    static navigationOptions = {
        tabBarLabel: '番茄钟',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../../Images/clock.png')}
                style={[tabStyles.icon, {tintColor: tintColor}]}
            />
        ),
    }

    render() {
        const {navigate} = this.props.navigation
        return (
            <View style={clockMainStyle.window}>
                <View style={clockMainStyle.motherPanel}>
                    <Text>0</Text>
                    <View style={{flexDirection: 'row', alignItems:'center'}}>
                        <Text>45</Text>
                        <View style={clockMainStyle.clock}>
                            <View style={clockMainStyle.pointer}/>
                        </View>
                        <Text>15</Text>
                    </View>
                    <Text>30</Text>
                </View>
            </View>
        );
    }
}


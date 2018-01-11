import React from 'react';
import {View, Image, Vibration, Button, Text, TouchableOpacity} from 'react-native'
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

    onVibrate() {
        Vibration.vibrate([0, 2000], true)
    }

    onVibrateStop() {
        Vibration.cancel()
    }

    render() {
        const {navigate} = this.props.navigation
        return (
            <View style={clockMainStyle.window}>
                <View style={clockMainStyle.motherPanel}>
                    <Text>0</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text>45</Text>
                        <View style={clockMainStyle.clock}>
                            <View style={clockMainStyle.pointer}/>
                        </View>
                        <Text>15</Text>
                    </View>
                    <Text>30</Text>
                </View>
                <TouchableOpacity onPress={this.onVibrate}>
                    <View>
                        <Text>Hi</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.onVibrateStop}>
                    <View>
                        <Text>Stop</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}


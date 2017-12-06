import React from 'react';
import {View, Image} from 'react-native'
import {tabStyles} from '../../Styles/tabbarStyle'

export default class ClockMain extends React.Component {
    static navigationOptions = {
        tabBarLabel: '番茄钟',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../Images/clock.png')}
                style={[tabStyles.icon, {tintColor: tintColor}]}
            />
        ),
    }

    render() {
        const {navigate} = this.props.navigation
        return (
            <View style={{flex:1, backgroundColor: '#cdeff3'}} />
        );
    }
}
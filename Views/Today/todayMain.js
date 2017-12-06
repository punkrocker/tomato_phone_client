import React from 'react';
import {View, Image} from 'react-native'
import {tabStyles} from '../../Styles/tabbarStyle'

export default class TodayMain extends React.Component {
    static navigationOptions = {
        tabBarLabel: '今日待办',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../Images/today.png')}
                style={[tabStyles.icon, {tintColor: tintColor}]}
            />
        ),
    }

    render() {
        const {navigate} = this.props.navigation
        return (
            <View style={{flex:1, backgroundColor: '#445533'}} />
        );
    }
}
import React from 'react';
import {View, Image} from 'react-native'
import {tabStyles} from '../../Styles/tabbarStyle'

export default class MineMain extends React.Component {
    static navigationOptions = {
        tabBarLabel: '我的',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../Images/mine.png')}
                style={[tabStyles.icon, {tintColor: tintColor}]}
            />
        ),
    }

    render() {
        const {navigate} = this.props.navigation
        return (
            <View style={{flex:1, backgroundColor: '#332233'}} />
        );
    }
}
import React from 'react';
import {View, Image} from 'react-native'
import {tabStyles} from '../../Styles/tabbarStyle'

export default class TodoMain extends React.Component {
    static navigationOptions = {
        tabBarLabel: '待办列表',
        tabBarIcon: ({ tintColor }) => ( <Image
                source={require('../../Images/todo.png')}
                style={[tabStyles.icon, {tintColor: tintColor}]}
            />
        ),
    }

    render() {
        const {navigate} = this.props.navigation
        return (
            <View style={{flex:1, backgroundColor: '#778877'}} />
        );
    }
}
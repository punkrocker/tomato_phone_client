import React, { Component } from 'react';
class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: "Pro"
    }

    render() {
        const {navigate} = this.props.navigation
        return <View style={{flex:1, backgroundColor:"black"}} />
    }
}
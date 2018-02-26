import React from 'react'; 

import { ToolbarAndroid } from 'react-native';

import MainScreenContainer  from '../../containers/mainScreenContainer/mainScreenContainer';

const Fragment = React.Fragment;

export default class Root extends React.Component{

    render(){
        return(
            <Fragment>
                <ToolbarAndroid style = {{ height: 100, backgroundColor: '#24292e'  }} title="AwesomeApp"/> 
                <MainScreenContainer/>
            </Fragment>
        );
    }
}
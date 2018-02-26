import React from 'react';

import {
    View, 
    Text,
    Image
} from 'react-native';

import styles from './CardStyles';

import { imgPath, IMGSIZE1000 } from '../../constants/imgs';

export default class Card extends React.Component {
    render(){

        const { text, src } = this.props;
        return(
            <View style = { styles.card }>
                <View style = { styles.poster }><Image style = { styles.image } source = { imgPath(IMGSIZE1000, src) }/></View>
                <View style = { styles.bottom }><Text numberOfLines = { 2 } style = { styles.title } >{ text }</Text></View>
            </View>
        )
    }
}
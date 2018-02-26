import { StyleSheet, Dimensions, PixelRatio } from 'react-native';

import { heightInPercent, widthInPercent } from '../../utils/dimensions';

const marginBottom = 15;
const padding = 10;


const styles = StyleSheet.create({

    card: {
        height: 165, 
        padding: 10,
        marginVertical: 10,
        flexDirection: 'row',
        backgroundColor: 'skyblue',
    },

    poster: {
        flex: 1,
        backgroundColor: 'pink', 
    },

    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    },

    bottom: {
        flex: 2,
        height: 50,
        padding: 5
    },

    title: {
        fontSize: 16,
    }
});

export default styles;
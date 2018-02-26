import { StyleSheet } from 'react-native';

import { heightInPercent, widthInPercent } from '../../utils/dimensions';

const style = StyleSheet.create({
    moviesWrap: {
        alignItems: 'center',
        backgroundColor: 'sienna', 
        paddingTop: 10
    }, 

    movies:{
        width: '90%',
        backgroundColor: 'black', 
        marginVertical: -10
    }
});

export default style;
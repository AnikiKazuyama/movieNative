import { Dimensions } from 'react-native';

let height = Dimensions.get('window').height;
let width  = Dimensions.get('window').width;

export let heightInPercent = (percent) => {
    return (height/100) * percent;
} 

export let widthInPercent = (percent) => {
    return (width/100) * percent;
} 


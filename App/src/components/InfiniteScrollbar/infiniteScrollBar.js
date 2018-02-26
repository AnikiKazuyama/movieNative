import React from 'react';

import { ScrollView } from 'react-native';

export default class InfiniteScrollBar extends React.Component {
    isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
        const paddingToBottom = 40;
        return layoutMeasurement.height + contentOffset.y >=
          contentSize.height - paddingToBottom;
    };

    handleScroll(event){
        if(this.isCloseToBottom(event)){
            this.props.handleOnScroll();
        }
    }

    render(){
        const children = this.props.children; 
        
        return (        
            <ScrollView onScroll = { ({nativeEvent}) => this.handleScroll(nativeEvent) }>
                { children }
            </ScrollView>);
    }
}
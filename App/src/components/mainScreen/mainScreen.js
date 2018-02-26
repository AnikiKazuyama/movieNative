import React from 'react';

import { observer } from 'mobx-react';

import { View, Text } from 'react-native';
import InfiniteScrollBar from '../InfiniteScrollbar/infiniteScrollBar';
import Card from '../../components/Card/Card';

import style from './mainScreenStyle';

export default class MainScreen extends React.Component {

    componentDidMount(){
        this.props.fetch(1);
    }

    renderCards(films){
        return films.map((item, index) => {
            return <Card key = { index } text = { item.original_title } src = { item.poster_path } />
        }); 
    }

 

    handleOnScroll = () => {
        this.props.fetch(this.props.currentPage + 1);
    }

    render(){

        return(
            <InfiniteScrollBar handleOnScroll = { this.handleOnScroll }>
                {
                    this.props.movies.length != 0 ? 
                    <View  style = { style.moviesWrap }>
                        <View style = { style.movies }>
                            { this.renderCards(this.props.movies) }
                        </View>
                    </View>
                    : <Text>Ждем</Text>
                }

            </InfiniteScrollBar>
        );
    }
}
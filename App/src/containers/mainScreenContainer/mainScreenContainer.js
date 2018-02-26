import React from 'react';

import { inject, observer } from 'mobx-react';

import MainScreen  from "../../components/mainScreen/mainScreen";

@inject('MoviesStore')
@observer
export default class FilmsContainer extends React.Component {

    render(){

        const currentPage = this.props.MoviesStore.getCurrentPage;
        const movies = this.props.MoviesStore.getMovies;
        const fetch = (page) => this.props.MoviesStore.fetchMovies(page);
        return(
            <MainScreen movies = { movies } currentPage = { currentPage } fetch = { fetch } />
        );
    }
}
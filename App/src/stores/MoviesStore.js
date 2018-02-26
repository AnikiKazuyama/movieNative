import { observable, action, autorun, computed } from 'mobx';
import axios from 'axios';

import { MOVIES_URL } from '../constants/api';

class MoviesStore {
    constructor(category){
        this.category = category;
        this.totalPages = null;
    }

    @observable movies = {};
    @observable currentPage = 0;
    @observable isFetching = false;

    @action fetchMovies(page){
        this.isFetching = true;

        axios.get(MOVIES_URL(this.category, page))
            .then(action( (response) => {
                this.movies[page] = response.data.results;
                this.currentPage = page;
                this.totalPages = response.data.total_pages;
            }))
            .finally(action(() => { this.isFetching = false; }));
    }

    @computed get getMovies(){
        let movies = [];

        for(let i = 1; i <= this.currentPage; i++ ){
            movies.push(...this.movies[i]);
        }
        return movies;
    }

    @computed get getCurrentPage(){
        return this.currentPage;
    }

}

export default new MoviesStore('popular');


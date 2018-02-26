const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=5d86851f8dccd20c99b410ddf0237d0c';
const LANGUAGE = 'language';
const MOVIE = 'movie';
const PERSON = 'person';
const POPULAR = 'popular';
const REGION = 'region';
const APPEND_TO_RESPONSE = "append_to_response";

export const MOVIES_URL = (category, page = 1) => `${ API_URL }/${ MOVIE }/${ category }?page=${ page }&${ API_KEY }&${ LANGUAGE }=ru-RU&${ REGION }=ru`;
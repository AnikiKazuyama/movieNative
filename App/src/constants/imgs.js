const IMGURL = 'https://image.tmdb.org/t/p';
export const IMGSIZE1000 = '/w500';

export function imgPath(size, path){
    return { uri: IMGURL + size + path };
}
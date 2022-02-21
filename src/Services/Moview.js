import Axios from 'axios';
import { AllUrl } from './Url';

export const fetchMoviesData = async (url_to_fetch) => {
     const { data } = await Axios.get(AllUrl[`${url_to_fetch}`])
     return data;

}
export const fetchTrailer = async (id) => {
     const { data } = await Axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=bc6526fed5902c904cc64f13b16c62af`);
     return data;
}
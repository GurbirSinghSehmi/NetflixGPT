import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {addNowPlayingMovies} from "../utils/moviesSlice"

const useNowPlayingMovies = () => {
//Fetch Data form TMDB API and update store
const dispatch = useDispatch();
const getNowPlayingMovies = async () => {
    var data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    var json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
}
useEffect(() => {getNowPlayingMovies();},[]);

};
export default useNowPlayingMovies;
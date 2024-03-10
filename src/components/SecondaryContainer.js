import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

export const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);
  return (
    <div className = "bg-black">
    <div className='-mt-36 relative z-20'>
        <MovieList title = {"Now Playing"} movies = {movies?.nowPlayingMovies}/>
        <MovieList title = {"Trending"} movies = {movies?.nowPlayingMovies}/>
        <MovieList title = {"Mystery"} movies = {movies?.nowPlayingMovies}/>
        <MovieList title = {"Drama"} movies = {movies?.nowPlayingMovies}/>
    </div>
    </div>
  )
}

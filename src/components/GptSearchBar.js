import React from 'react'
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import openai from '../utils/openai';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
    const searchText = useRef(null);
    const dispatch = useDispatch();
    const searchMovieTMDB = async (movie) => {
       const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+ movie + "&include_adult=false&language=en-US&page=1",API_OPTIONS);
       const json = await data.json();
       return json.results;
    }
    const handleGptSearchClick = async () => {
        const gptQuery = "Act as a movie recommendation system and suggest some movies for the query : " +searchText.current.value + ". Only give me names of 5 movies, comma seperated like example result given ahead. Example result : gadar, sholay, pyaar kiya toh darna hya, krish, hum aapke hain kaun"; 
         // make an API call to GPT API and get movie results
            const gptResults = await openai.chat.completions.create({
              messages: [{ role: 'user', content: gptQuery }],
              model: 'gpt-3.5-turbo',
            });
        
            if(!gptResults.choices) alert("No result fetched from API.");
          const gptMovies = gptResults.choices?.[0]?.message?.content.split(","); 

          // For each movie we will search TMDB API.
          const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));// since async function is getting called 5 times so it will return 5 promises as it will take some time to complete
          const tmdbResults = await Promise.all(promiseArray);
          dispatch(addGptMovieResult({movieNames : gptMovies,movieResults : tmdbResults}));
    }
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className = "bg-black grid grid-cols-12 w-1/2"
        onSubmit={(e) => e.preventDefault()}
        >
            <input ref = {searchText} type = "text" placeholder='What do you want to watch today?' className = "p-4 m-4 col-span-9"/>
            <button className='py-2 px-4 m-4 rounded-lg bg-red-500 text-white col-span-3' onClick = {handleGptSearchClick}>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar